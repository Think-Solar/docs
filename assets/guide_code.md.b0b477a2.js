import{i as s}from"./chunks/useMermaid.854f2eb1.js";import{e as a,o as n,c as l,d as e}from"./app.16583731.js";const p=e(`<h1 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h1><p>Guidelines to follow when working on the codebase.</p><h2 id="flow" tabindex="-1">Flow <a class="header-anchor" href="#flow" aria-hidden="true">#</a></h2><pre class="mermaid">graph TD
  request[Browser request] --&gt; api[Laravel API]
  api --&gt;|Call requested route| authenticate[Authenticate]
  authenticate --&gt;|Check cookies| controller[Controller]
  controller --&gt;|Call route CRUD method| validate[Validate]
  validate --&gt;|Validate input| action[Action]
  action --&gt;|Handle CRUD logic| database[Database]
  database --&gt;|Return JSON resource| response[Response]
</pre><h2 id="explanation" tabindex="-1">Explanation <a class="header-anchor" href="#explanation" aria-hidden="true">#</a></h2><p>This flowchart shows the basic flow of the API. The API starts with the request, which goes through authentication, validation, it is passed to the controller and then to an action.</p><ul><li><p>At first, an API route is called and the request is received by the API, protected routes will go through the authentication process where it checks the recieved cookie to make sure that the request is coming from an authenticated user.</p></li><li><p>The request is passed to the controller where the method that was bound to the route is called.</p></li><li><p>Next, it goes through the validation process where it validates the input received in the request to make sure that the data is in the correct format and contains all the necessary fields.</p><p><code>FormRequest</code> should be used to validate the data.</p><details class="details custom-block"><summary>View snippet</summary><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#F78C6C;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">App</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">Http</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">Requests</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">Illuminate</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Foundation</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Http</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">FormRequest</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ApiRequest</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">FormRequest</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    * Determine if the user is authorized to make this request.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    * </span><span style="color:#F78C6C;font-style:italic;">@return</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#F78C6C;font-style:italic;">bool</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">authorize</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    * Get the validation rules that apply to the request.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    * </span><span style="color:#F78C6C;font-style:italic;">@return</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#F78C6C;font-style:italic;">array</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rules</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">//</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></details><p>However we extend from this base class to allow for any global form validation.</p><details class="details custom-block"><summary>View snippet</summary><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#F78C6C;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">App</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">Http</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">Requests</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">Tasks</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">App</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Http</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Requests</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">ApiRequest</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CreateTask</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ApiRequest</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    * Get data to be validated from the request.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    * </span><span style="color:#F78C6C;font-style:italic;">@return</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#F78C6C;font-style:italic;">array</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">validationData</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$this-&gt;</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">task</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[];</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    * Get the validation rules that apply to the request.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    * </span><span style="color:#F78C6C;font-style:italic;">@return</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#F78C6C;font-style:italic;">array</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rules</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">assigned_to.id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">nullable|exists:users,id</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    * Get the error messages for the defined validation rules.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    * </span><span style="color:#F78C6C;font-style:italic;">@return</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#F78C6C;font-style:italic;">array</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">messages</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">assigned_to.id.exists</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Assigned user does not exist</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></details></li><li><p>After that, data is passed to an action class where logic will be called to process the data and interact with the database.</p></li><li><p>Once CRUD operations have been completed, the controller returns a response containing the requested data or the status of request.</p><p>The response should always JSON format returning either a <code>JsonResource</code> or <code>ResourceCollection</code>.</p></li></ul>`,7),o=[p],D=JSON.parse('{"title":"Code","description":"","frontmatter":{"layout":"doc"},"headers":[{"level":2,"title":"Flow","slug":"flow","link":"#flow","children":[]},{"level":2,"title":"Explanation","slug":"explanation","link":"#explanation","children":[]}],"relativePath":"guide/code.md","lastUpdated":1674053737000}'),t={name:"guide/code.md"},F=Object.assign(t,{setup(c){return a(async()=>{s()}),(r,i)=>(n(),l("div",null,o))}});export{D as __pageData,F as default};
