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
