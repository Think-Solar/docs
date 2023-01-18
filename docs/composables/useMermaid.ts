export const initMermaid = () => {
  import(/* @vite-ignore */ "mermaid/dist/mermaid.esm.min.mjs").then(
    (module) => {
      module.default.initialize({ startOnLoad: true });
      module.default.init();
    }
  );
};
