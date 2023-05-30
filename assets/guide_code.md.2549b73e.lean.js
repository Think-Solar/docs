import{i as n}from"./chunks/useMermaid.a862639e.js";import{o as l,a as e,c as o,b as s,t,u as p,d as a,e as c}from"./app.0db9ce93.js";const r=`graph TD
  request[Browser request] --> api[Laravel API]
  api -->|Call requested route| authenticate[Authenticate]
  authenticate -->|Check cookies| controller[Controller]
  controller -->|Call route CRUD method| validate[Validate]
  validate -->|Validate input| action[Action]
  action -->|Handle CRUD logic| database[Database]
  database -->|Return JSON resource| response[Response]`,i=s("h1",{id:"code",tabindex:"-1"},[a("Code "),s("a",{class:"header-anchor",href:"#code","aria-hidden":"true"},"#")],-1),y=s("p",null,"Guidelines to follow when working on the codebase.",-1),C=s("h2",{id:"flow",tabindex:"-1"},[a("Flow "),s("a",{class:"header-anchor",href:"#flow","aria-hidden":"true"},"#")],-1),D={class:"mermaid"},F=c("",3),m=JSON.parse('{"title":"Code","description":"","frontmatter":{"layout":"doc"},"headers":[{"level":2,"title":"Flow","slug":"flow","link":"#flow","children":[]},{"level":2,"title":"Explanation","slug":"explanation","link":"#explanation","children":[]}],"relativePath":"guide/code.md","lastUpdated":1675158118000}'),A={name:"guide/code.md"},g=Object.assign(A,{setup(d){return l(async()=>{n()}),(u,h)=>(e(),o("div",null,[i,y,C,s("pre",D,"  "+t(p(r))+`
`,1),F]))}});export{m as __pageData,g as default};
