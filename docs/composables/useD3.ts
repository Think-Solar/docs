import * as d3 from "d3";
import { ID3ZoomParam } from "../contacts/ID3ZoomParam";

export const initD3Zoom = (params: ID3ZoomParam | null) => {
  let svgs = d3.selectAll(".mermaid.zoomable svg");

  svgs.each(function () {
    let svg = d3.select(this);

    let x = params && params.x ? params.x : 0;
    let y = params && params.y ? params.y : 0;
    let k = params && params.k ? params.k : 1;

    svg.html("<g>" + svg.html() + "</g>");

    let inner = svg.select("g");

    let zoom: any = d3.zoom().on("zoom", function (event) {
      inner.attr("transform", event.transform);
    });

    svg
      .call(zoom)
      .call(zoom.transform, d3.zoomIdentity.translate(x, y).scale(k))
      .select("g")
      .attr("transform", `translate(${x}, ${y}) scale(${k}, ${k})`);
  });
};
