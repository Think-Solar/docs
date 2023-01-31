import{i as a}from"./chunks/useMermaid.f32cc07f.js";import{o as r,a as i,c as s,b as e,t as o,u as l,d as t,e as n}from"./app.d6487981.js";const d=`flowchart TD
    incomingRequest(Start)-->|HTTP request to https://api.thinksolar.co.nz|app(App Entry Point)
    app-->|If path is valid, Laravel router passes request to applicable middleware.|middleware(Middleware)
    middleware-->|If middleware layer permits, route handler forwards request to controller.|success(Controller)`,c=e("h1",{id:"code-guidelines",tabindex:"-1"},[t("Code guidelines "),e("a",{class:"header-anchor",href:"#code-guidelines","aria-hidden":"true"},"#")],-1),h=e("h2",{id:"request-lifecycle",tabindex:"-1"},[t("Request lifecycle "),e("a",{class:"header-anchor",href:"#request-lifecycle","aria-hidden":"true"},"#")],-1),u=e("p",null,"Below is an overview of the request lifecycle as it moves through the API. Each step is explained in more detail below.",-1),m={class:"mermaid"},f=n('<h2 id="code-style" tabindex="-1">Code style <a class="header-anchor" href="#code-style" aria-hidden="true">#</a></h2><h3 id="incoming-request" tabindex="-1">Incoming request <a class="header-anchor" href="#incoming-request" aria-hidden="true">#</a></h3><ol><li>When a user makes a request to a Laravel application, the first step in the request lifecycle is to determine which controller method should handle the request. This is done by the router, which matches the incoming request&#39;s URL and HTTP method to a specific route defined in the application&#39;s routing configuration. The route is associated with a controller method that is responsible for handling the request.</li></ol><h3 id="middleware" tabindex="-1">Middleware <a class="header-anchor" href="#middleware" aria-hidden="true">#</a></h3><ol start="2"><li>Before the request is passed to the controller, any middleware associated with the matching route is processed: Once the appropriate controller method has been identified, any middleware that is associated with the matching route is executed. Middleware is a way to add functionality to the request and response lifecycle, such as authentication or validation. Middleware can reject the request if it fails to meet certain conditions, such as not being authenticated.</li></ol><h3 id="validation" tabindex="-1">Validation <a class="header-anchor" href="#validation" aria-hidden="true">#</a></h3><ol start="3"><li>If the request is not rejected by middleware, it is forwarded to the controller and validated by a custom form request class: If the request is not rejected by the middleware, it is forwarded to the controller method. Before the controller method is executed, the request is validated using a custom form request class. Form request classes provide a way to validate incoming data and reject the request if it fails validation, returning a 422 status response and appropriate validation error messages.</li></ol><h3 id="controller-methods" tabindex="-1">Controller methods <a class="header-anchor" href="#controller-methods" aria-hidden="true">#</a></h3><ol start="4"><li>Once the request has passed validation, it is passed to the controller method where it is processed. The controller method can perform various actions, such as querying a database or interacting with other services, to fulfill the request.</li></ol><h3 id="transforming-resources" tabindex="-1">Transforming resources <a class="header-anchor" href="#transforming-resources" aria-hidden="true">#</a></h3><ol start="5"><li>asdf</li></ol><h3 id="response" tabindex="-1">Response <a class="header-anchor" href="#response" aria-hidden="true">#</a></h3><ol start="6"><li>return a JSON response detailing the outcome of the request: After the controller method has processed the request, it returns a JSON response that details the outcome of the request. This response can include information such as the status of the request, any data that was returned, and any error messages that may have occurred.</li></ol>',13),v=JSON.parse('{"title":"Code guidelines","description":"","frontmatter":{"layout":"doc"},"headers":[{"level":2,"title":"Request lifecycle","slug":"request-lifecycle","link":"#request-lifecycle","children":[]},{"level":2,"title":"Code style","slug":"code-style","link":"#code-style","children":[{"level":3,"title":"Incoming request","slug":"incoming-request","link":"#incoming-request","children":[]},{"level":3,"title":"Middleware","slug":"middleware","link":"#middleware","children":[]},{"level":3,"title":"Validation","slug":"validation","link":"#validation","children":[]},{"level":3,"title":"Controller methods","slug":"controller-methods","link":"#controller-methods","children":[]},{"level":3,"title":"Transforming resources","slug":"transforming-resources","link":"#transforming-resources","children":[]},{"level":3,"title":"Response","slug":"response","link":"#response","children":[]}]}],"relativePath":"backend/code-guidelines.md","lastUpdated":1675158118000}'),p={name:"backend/code-guidelines.md"},b=Object.assign(p,{setup(g){return r(async()=>{a()}),(q,w)=>(i(),s("div",null,[c,h,u,e("pre",m,"  "+o(l(d))+`
`,1),f]))}});export{v as __pageData,b as default};
