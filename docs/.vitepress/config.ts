/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  title: "Think Solar Docs",
  description: "Documentation for Think Solar suite",
  base: "/docs/",
  lastUpdated: true,
  themeConfig: {
    logo: "/images/logos/android-chrome-192x192.png",
    siteTitle: "Think Solar",
    nav: [
      { text: "Changelog", link: "/changelog" },
      // {
      //   text: "Docs",
      //   items: [
      //     {
      //       text: "Features",
      //       items: [
      //         { text: "Section A Item A", link: "..." },
      //         { text: "Section B Item B", link: "..." },
      //       ],
      //     },
      //   ],
      // },
    ],
    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Introduction", link: "/" },
          { text: "Database", link: "/guide/database" },
          { text: "Code", link: "/guide/code" },
        ],
      },
      {
        text: "Features",
        items: [
          {
            text: "Roles",
            link: "/features/roles",
          },
          {
            text: "Account",
            link: "/features/account",
          },
          {
            text: "Dashboard",
            link: "/features/dashboard",
          },
          {
            text: "Pipelines",
            link: "/features/pipelines/pipelines",
            items: [
              {
                text: "Sales Pipeline",
                link: "/features/pipelines/sales-pipeline",
              },
              {
                text: "Projects Pipeline",
                link: "/features/pipelines/projects-pipeline",
              },
            ],
          },
          {
            text: "Contacts",
            link: "/features/contacts/contacts",
            items: [
              {
                text: "Contact",
                link: "/features/contacts/contact",
              },
            ],
          },
        ],
      },
      {
        text: "Backend",
        items: [
          {
            text: "Getting Started",
            link: "/backend/getting-started",
            items: [
              {
                text: "Cloning the project",
                link: "/backend/getting-started#cloning-the-project",
              },
              {
                text: "Laravel Sail & Docker",
                link: "/backend/getting-started#laravel-sail-docker",
              },
              {
                text: "Database setup",
                link: "/backend/getting-started#database-setup",
              },
              {
                text: "Local hostnames",
                link: "/backend/getting-started#local-hostnames",
              },
            ],
          },
          {
            text: "Code Guidelines",
            link: "/backend/code-guidelines",
            items: [
              {
                text: "Request Lifecycle",
              },
            ],
          },
          {
            text: "Testing",
          },
          {
            text: "Deployment",
            link: "/backend/deployment",
            items: [
              {
                text: "Git workflow",
                link: "/backend/deployment#git-workflow",
              },
              {
                text: "Pull requests",
                link: "/backend/deployment#pull-requests",
              },
              {
                text: "CI/CD Pipeline",
                link: "/backend/deployment#ci-cd-pipeline",
              },
              {
                text: "Laravel Forge",
                link: "/backend/deployment#laravel-forge",
              },
            ],
          },
          {
            text: "Common Issues",
          },
        ],
      },
      {
        text: "Frontend",
        items: [
          {
            text: "Level 3",
          },
          {
            text: "Level 3",
          },
        ],
      },
      {
        text: "DevOps",
        items: [
          {
            text: "DNS",
          },
          {
            text: "Server Management",
          },
          {
            text: "Disaster Recovery",
          },
        ],
      },
      {
        text: "Briefs",
        items: [
          {
            text: "Calendar",
            link: "/briefs/calendar",
          },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/think-solar" },
      { icon: "facebook", link: "https://facebook.com/wanakasolar" },
    ],
    footer: {
      copyright: "Copyright © 2022-present Think Solar",
    },
  },
  ssr: {
    noExternal: ["@mermaid/dist/mermaid.esm.mjs"],
  },
};

// const configWithMermaid = withMermaid(config);

// const configWithMermaid = defineConfig({
//   resolve: {
//     alias: {
//       mermaid: "mermaid/dist/mermaid.esm.mjs",
//     },
//   },
// });

export default config;
