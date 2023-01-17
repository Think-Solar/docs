import{_ as e,c as i,o as t,a as l}from"./app.b9a0c764.js";const a="/docs/assets/feature-projects-pipeline-overview.3b7a3f1a.png",f=JSON.parse('{"title":"Projects pipeline","description":"","frontmatter":{"layout":"doc"},"headers":[{"level":3,"title":"Stages","slug":"stages","link":"#stages","children":[]},{"level":3,"title":"States","slug":"states","link":"#states","children":[]},{"level":3,"title":"Overview","slug":"overview","link":"#overview","children":[]}],"relativePath":"features/pipelines/projects-pipeline.md","lastUpdated":null}'),s={name:"features/pipelines/projects-pipeline.md"},r=l('<h1 id="projects-pipeline" tabindex="-1">Projects pipeline <a class="header-anchor" href="#projects-pipeline" aria-hidden="true">#</a></h1><p>A projects pipeline item will be represented in the database as <code>projects_pipeline_item</code>.</p><h3 id="stages" tabindex="-1">Stages <a class="header-anchor" href="#stages" aria-hidden="true">#</a></h3><ul><li>Project setup</li><li>Pre-installation</li><li>Pending installation</li><li>Installation</li><li>Post installation</li><li>Project completed</li></ul><h3 id="states" tabindex="-1">States <a class="header-anchor" href="#states" aria-hidden="true">#</a></h3><p>The projects in the overview can be in various states and are highlighted to relfect this when the following points are all true.</p><ul><li>White <ul><li>The default colour</li></ul></li><li>Grey <ul><li>A new build</li></ul></li><li>Red <ul><li>Is in the <a href="#post-installation">Post installation</a> stage</li><li>Checkbox for <strong>&quot;I confirm that there are no remaining installation issues&quot;</strong> is checked.</li></ul></li></ul><h3 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-hidden="true">#</a></h3><p><img src="'+a+'" alt="Projects pipeline overview"></p>',9),n=[r];function o(p,c,d,h,u,_){return t(),i("div",null,n)}const g=e(s,[["render",o]]);export{f as __pageData,g as default};
