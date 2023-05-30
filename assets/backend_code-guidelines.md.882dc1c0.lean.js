import{i as a}from"./chunks/useMermaid.a862639e.js";import{o as r,a as i,c as s,b as e,t as o,u as l,d as t,e as n}from"./app.0db9ce93.js";const d=`flowchart TD
    incomingRequest(Start)-->|HTTP request to https://api.thinksolar.co.nz|app(App Entry Point)
    app-->|If path is valid, Laravel router passes request to applicable middleware.|middleware(Middleware)
    middleware-->|If middleware layer permits, route handler forwards request to controller.|success(Controller)`,c=e("h1",{id:"code-guidelines",tabindex:"-1"},[t("Code guidelines "),e("a",{class:"header-anchor",href:"#code-guidelines","aria-hidden":"true"},"#")],-1),h=e("h2",{id:"request-lifecycle",tabindex:"-1"},[t("Request lifecycle "),e("a",{class:"header-anchor",href:"#request-lifecycle","aria-hidden":"true"},"#")],-1),u=e("p",null,"Below is an overview of the request lifecycle as it moves through the API. Each step is explained in more detail below.",-1),m={class:"mermaid"},f=n("",13),v=JSON.parse('{"title":"Code guidelines","description":"","frontmatter":{"layout":"doc"},"headers":[{"level":2,"title":"Request lifecycle","slug":"request-lifecycle","link":"#request-lifecycle","children":[]},{"level":2,"title":"Code style","slug":"code-style","link":"#code-style","children":[{"level":3,"title":"Incoming request","slug":"incoming-request","link":"#incoming-request","children":[]},{"level":3,"title":"Middleware","slug":"middleware","link":"#middleware","children":[]},{"level":3,"title":"Validation","slug":"validation","link":"#validation","children":[]},{"level":3,"title":"Controller methods","slug":"controller-methods","link":"#controller-methods","children":[]},{"level":3,"title":"Transforming resources","slug":"transforming-resources","link":"#transforming-resources","children":[]},{"level":3,"title":"Response","slug":"response","link":"#response","children":[]}]}],"relativePath":"backend/code-guidelines.md","lastUpdated":1675158118000}'),p={name:"backend/code-guidelines.md"},b=Object.assign(p,{setup(g){return r(async()=>{a()}),(q,w)=>(i(),s("div",null,[c,h,u,e("pre",m,"  "+o(l(d))+`
`,1),f]))}});export{v as __pageData,b as default};