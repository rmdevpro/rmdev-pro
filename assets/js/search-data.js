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
          description: "Joshua ecosystem projects and initiatives.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/rmdev-pro/projects/";
          },
        },{id: "nav-discussion-board",
          title: "Discussion Board",
          description: "Join the conversation about Joshua and conversational AI development",
          section: "Navigation",
          handler: () => {
            window.location.href = "/rmdev-pro/discussions/";
          },
        },{id: "post-introducing-the-joshua-ecosystem-a-conversational-ai-that-builds-itself",
        
          title: "Introducing the Joshua Ecosystem: A Conversational AI That Builds Itself",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/rmdev-pro/blog/2025/introducing-joshua/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/rmdev-pro/books/the_godfather/";
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
            },},{id: "projects-mit-data-science-capstone",
          title: 'MIT Data Science Capstone',
          description: "MIT Data Science capstone project",
          section: "Projects",handler: () => {
              window.location.href = "/rmdev-pro/projects/4_mit_capstone/";
            },},{id: "projects-joshua-project-conversation-database",
          title: 'Joshua Project Conversation Database',
          description: "Comprehensive conversational history from all stages of Joshua creation",
          section: "Projects",handler: () => {
              window.location.href = "/rmdev-pro/projects/5_conversation_database/";
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
