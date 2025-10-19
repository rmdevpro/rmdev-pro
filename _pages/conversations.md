---
layout: page
title: conversations
permalink: /conversations/
description: Complete conversational development record - thousands of conversations showing how Joshua was built through LLM collaboration.
nav: true
nav_order: 6
---

<!-- pages/conversations.md -->
<div class="conversations">
  <div class="row mb-4">
    <div class="col">
      <p>This archive contains the complete conversational development record of the Joshua system. Every conversation represents real development work, design discussions, implementation sessions, and debugging efforts - all conducted through natural language interaction with LLMs.</p>
      <p><strong>Use Ctrl+K (or Cmd+K)</strong> to search across all conversations, or browse by workflow and tags below.</p>
    </div>
  </div>

  {% assign sorted_conversations = site.conversations | sort: "date" | reverse %}
  {% assign total_count = sorted_conversations | size %}

  <div class="row mb-3">
    <div class="col">
      <p class="text-muted">
        <i class="fa-solid fa-comments"></i> {{ total_count }} conversations
        {% assign total_messages = 0 %}
        {% for conv in sorted_conversations %}
          {% if conv.message_count %}
            {% assign total_messages = total_messages | plus: conv.message_count %}
          {% endif %}
        {% endfor %}
        {% if total_messages > 0 %}
          &nbsp; &middot; &nbsp; {{ total_messages | divided_by: 1000.0 | round: 1 }}K messages
        {% endif %}
      </p>
    </div>
  </div>

  <div class="table-responsive">
    <table class="table table-sm table-hover">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Title</th>
          <th scope="col">Workflow</th>
          <th scope="col">Tags</th>
          <th scope="col" class="text-right">Messages</th>
        </tr>
      </thead>
      <tbody>
        {% for conversation in sorted_conversations %}
          <tr>
            <td class="text-nowrap">
              {{ conversation.date | date: '%Y-%m-%d' }}
            </td>
            <td>
              <a href="{{ conversation.url | relative_url }}">{{ conversation.title }}</a>
              {% if conversation.summary %}
                <br><small class="text-muted">{{ conversation.summary | truncate: 100 }}</small>
              {% endif %}
            </td>
            <td>
              {% if conversation.workflow %}
                <span class="badge badge-primary">{{ conversation.workflow }}</span>
              {% endif %}
            </td>
            <td>
              {% if conversation.tags %}
                {% for tag in conversation.tags limit:3 %}
                  <span class="badge badge-secondary">{{ tag }}</span>
                {% endfor %}
              {% endif %}
            </td>
            <td class="text-right text-nowrap">
              {% if conversation.message_count %}
                {{ conversation.message_count }}
              {% else %}
                -
              {% endif %}
            </td>
          </tr>
        {% endfor %}
      </tbody>
    </table>
  </div>

  {% if total_count == 0 %}
    <div class="alert alert-info" role="alert">
      <strong>Coming Soon!</strong> Conversations are being exported from our development database. Check back soon to explore the complete development record.
    </div>
  {% endif %}
</div>
