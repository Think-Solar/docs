export const initMermaid = () => {
  import(/* @vite-ignore */ "mermaid/dist/mermaid.esm.min.mjs").then(
    (module) => {
      module.default.initialize({
        startOnLoad: true,
        // theme: "base",
        // themeVariables: {
        //   primaryColor: "#4273ae",
        //   primaryTextColor: "#fff",
        //   primaryBorderColor: "#393536",
        //   lineColor: "#999",
        //   secondaryColor: "#666",
        //   tertiaryColor: "#fff",
        // },
      });
      module.default.init();
    }
  );
};
