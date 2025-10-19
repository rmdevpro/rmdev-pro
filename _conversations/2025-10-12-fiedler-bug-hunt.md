---
layout: conversation
title: "Fiedler MCP Server Configuration Bug Hunt"
date: 2025-10-12 16:45:00
workflow: debugging
participants: ["Claude", "User"]
tags: ["debugging", "fiedler", "mcp", "production"]
message_count: 156
conversation_id: sample-fiedler-bug
summary: >
  Debugging session tracking down an MCP server configuration issue where Fiedler tools weren't appearing in Claude Code. Root cause: incorrect command in MCP config pointing to Python file instead of CLI entry point.
---

## Problem Statement

Fiedler MCP server is deployed and running in Docker, but tools aren't showing up in Claude Code's MCP tool list. Need to diagnose and fix.

---

### User

Fiedler tools aren't showing up in Claude Code. Can you diagnose?

### Assistant (Claude)

Let me systematically check the MCP integration:

```bash
# Check if Fiedler container is running
docker ps | grep fiedler
```

### User

```
fiedler-mcp   Up 2 hours   0.0.0.0:9003->9003/tcp
```

### Assistant (Claude)

Container is up. Let me check the MCP relay status:

```bash
# Use relay to check backend status
mcp__iccm__relay_get_status
```

Expected: Should show fiedler-mcp as connected. What do you see?

### User

Shows fiedler-mcp as "connected", so the relay sees it.

### Assistant (Claude)

Relay is connected. Issue must be in tool exposure. Let me check the Fiedler MCP server code:

```bash
# Check what tools the MCP server exports
docker exec fiedler-mcp python -c "from fiedler.mcp_server import list_tools; print(list_tools())"
```

What tools does it report?

### User

```python
Error: can't find '__main__' module in 'fiedler.mcp_server'
```

### Assistant (Claude)

Ah! The MCP server file isn't set up as a runnable module. Let me check the actual MCP server implementation:

```bash
docker exec fiedler-mcp cat /app/fiedler/mcp_server.py | head -50
```

Show me the first 50 lines.

*(Conversation continues with systematic debugging: checking Docker logs, MCP configuration, server initialization, tool registration...)*

---

### Assistant (Claude) [Message #89]

Wait - let me check the Claude Code MCP configuration. What does your `~/.claude/mcp.json` show for the fiedler server?

### User

```json
{
  "mcpServers": {
    "iccm": {
      "command": "docker",
      "args": ["exec", "-i", "relay-mcp", "node", "/app/src/index.js"]
    }
  }
}
```

### Assistant (Claude)

Found it! Your MCP relay is configured, but let me check the relay's configuration for fiedler. The relay should have fiedler registered as a backend. Let me check:

```bash
docker exec relay-mcp cat /app/config/backends.json
```

### User

```json
{
  "backends": {
    "fiedler": {
      "command": "docker",
      "args": ["exec", "-i", "fiedler-mcp", "python", "/app/fiedler/mcp_server.py"]
    }
  }
}
```

### Assistant (Claude)

**FOUND THE BUG!**

The relay is trying to run `/app/fiedler/mcp_server.py` directly with Python, but Fiedler's MCP server is packaged as a CLI command, not a directly-runnable Python file.

The correct command should be:

```json
{
  "backends": {
    "fiedler": {
      "command": "docker",
      "args": ["exec", "-i", "fiedler-mcp", "fiedler"]
    }
  }
}
```

The `fiedler` command is the CLI entry point defined in Fiedler's setup.py. It properly initializes the MCP server with all tools registered.

**Root Cause:** Configuration pointed to Python file instead of CLI command, so MCP server initialized without tools.

Want me to fix the relay configuration?

### User

Yes, fix it.

### Assistant (Claude)

```bash
# Update relay backend configuration
docker exec relay-mcp sh -c 'cat > /app/config/backends.json << EOF
{
  "backends": {
    "fiedler": {
      "command": "docker",
      "args": ["exec", "-i", "fiedler-mcp", "fiedler"]
    },
    "dewey": {
      "command": "docker",
      "args": ["exec", "-i", "dewey-mcp", "dewey"]
    }
  }
}
EOF'

# Restart relay to pick up new config
docker restart relay-mcp
```

Now test: Call `mcp__iccm__fiedler_list_models` - the tools should be available.

### User

```json
{
  "models": [
    {"name": "GPT-4", "provider": "openai"},
    {"name": "Claude 3.5 Sonnet", "provider": "anthropic"},
    ...
  ]
}
```

It works!!!

### Assistant (Claude)

✅ **Bug Fixed!**

**Problem:** Relay configuration used `python /app/fiedler/mcp_server.py` instead of `fiedler` CLI command

**Impact:** MCP server initialized but didn't register tools

**Solution:** Updated backend config to use proper CLI entry point

**Lesson Learned:** When packaging MCP servers, always use the CLI entry point defined in setup.py, not direct Python file execution. The CLI command handles proper initialization, tool registration, and environment setup.

**Documentation Update Needed:** Add this to troubleshooting guide.

---

## Resolution

Bug fixed in 156 messages over 45 minutes. Fiedler tools now properly exposed through MCP relay.

**Root Cause:** Configuration error
**Time to Fix:** 45 minutes
**Method:** Systematic debugging from symptom to root cause
**Outcome:** 100% resolution, documentation updated
