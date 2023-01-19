import { ID3ZoomParam } from "../contacts/ID3ZoomParam";
import { initD3Zoom } from "./useD3";

export const initMermaid = (params: ID3ZoomParam | null) => {
  import(/* @vite-ignore */ "mermaid/dist/mermaid.esm.min.mjs").then(
    (module) => {
      module.default.initialize({
        startOnLoad: true,
        er: { useMaxWidth: false },
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

      initD3Zoom(params);
    }
  );
};
