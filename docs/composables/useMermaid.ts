// @ts-ignore
// import * as mermaidjs from "mermaid/dist/mermaid.esm.min.mjs";
export const initMermaid = () => {
  console.log("initMermaid");

  // const mermaidjs = "https://cdn.jsdelivr.net/npm/mermaid@9/dist/mermaid.esm.min.mjs";

  import(/* @vite-ignore */ "mermaid/dist/mermaid.esm.min.mjs").then(
    (module) => {
      console.log("initialized");
      module.default.initialize();
      // mermaidjs.default.initialize();
    }
  );
};
