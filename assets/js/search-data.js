// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/rmdev-pro/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/rmdev-pro/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/rmdev-pro/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/rmdev-pro/repositories/";
          },
        },{id: "nav-conversations",
          title: "conversations",
          description: "Complete conversational development record - thousands of conversations showing how Joshua was built through LLM collaboration.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/rmdev-pro/conversations/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/rmdev-pro/books/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/rmdev-pro/blog/";
              },
            },{id: "post-announcing-the-rmdev-research-project-website",
        
          title: "Announcing the RMDev Research Project Website",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/rmdev-pro/blog/2025/project-launch/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/rmdev-pro/books/the_godfather/";
            },},{id: "conversations-mad-architecture-design-session",
          title: 'MAD Architecture Design Session',
          description: "",
          section: "Conversations",handler: () => {
              window.location.href = "/rmdev-pro/conversations/2025-09-28-mad-architecture-design-session/";
            },},{id: "conversations-fiedler-mcp-server-configuration-bug-hunt",
          title: 'Fiedler MCP Server Configuration Bug Hunt',
          description: "",
          section: "Conversations",handler: () => {
              window.location.href = "/rmdev-pro/conversations/2025-10-12-fiedler-bug-hunt/";
            },},{id: "conversations-v0-architecture-creation-sprint",
          title: 'V0 Architecture Creation Sprint',
          description: "",
          section: "Conversations",handler: () => {
              window.location.href = "/rmdev-pro/conversations/2025-10-15-v0-architecture-creation-sprint/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/rmdev-pro/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-joshua-conversational-ai-ecosystem",
          title: 'Joshua Conversational AI Ecosystem',
          description: "A self-improving multi-agent system achieving unbounded capability through natural language interaction",
          section: "Projects",handler: () => {
              window.location.href = "/rmdev-pro/projects/1_joshua/";
            },},{id: "projects-blueprint",
          title: 'Blueprint',
          description: "Autonomous digital asset creator - free for personal and educational use",
          section: "Projects",handler: () => {
              window.location.href = "/rmdev-pro/projects/2_blueprint/";
            },},{id: "projects-patents",
          title: 'Patents',
          description: "16 patents pending covering Joshua&#39;s core innovations",
          section: "Projects",handler: () => {
              window.location.href = "/rmdev-pro/projects/3_patents/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/rmdev-pro/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
