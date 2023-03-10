import{i as n}from"./chunks/useMermaid.b09ae745.js";import{e as l,o as e,c as o,a as s,t,u as p,b as a,d as c}from"./app.16583731.js";const r=`graph TD\r
  request[Browser request] --> api[Laravel API]\r
  api -->|Call requested route| authenticate[Authenticate]\r
  authenticate -->|Check cookies| controller[Controller]\r
  controller -->|Call route CRUD method| validate[Validate]\r
  validate -->|Validate input| action[Action]\r
  action -->|Handle CRUD logic| database[Database]\r
  database -->|Return JSON resource| response[Response]`,i=s("h1",{id:"code",tabindex:"-1"},[a("Code "),s("a",{class:"header-anchor",href:"#code","aria-hidden":"true"},"#")],-1),y=s("p",null,"Guidelines to follow when working on the codebase.",-1),C=s("h2",{id:"flow",tabindex:"-1"},[a("Flow "),s("a",{class:"header-anchor",href:"#flow","aria-hidden":"true"},"#")],-1),D={class:"mermaid"},F=c("",3),m=JSON.parse('{"title":"Code","description":"","frontmatter":{"layout":"doc"},"headers":[{"level":2,"title":"Flow","slug":"flow","link":"#flow","children":[]},{"level":2,"title":"Explanation","slug":"explanation","link":"#explanation","children":[]}],"relativePath":"guide/code.md","lastUpdated":1674101025000}'),A={name:"guide/code.md"},g=Object.assign(A,{setup(d){return l(async()=>{n()}),(u,h)=>(e(),o("div",null,[i,y,C,s("pre",D,"  "+t(p(r))+`
`,1),F]))}});export{m as __pageData,g as default};
