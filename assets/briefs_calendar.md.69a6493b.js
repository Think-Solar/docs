import{f as e,a,c as s,e as n}from"./app.0db9ce93.js";const l="/docs/assets/simple-calendar.77a40c67.png",t="/docs/assets/user-view-calendar.a494a771.jpeg",D=JSON.parse('{"title":"Project Brief: Vue 3 Calendar App","description":"","frontmatter":{"layout":"doc"},"headers":[{"level":2,"title":"Objective:","slug":"objective","link":"#objective","children":[]},{"level":2,"title":"Functionality:","slug":"functionality","link":"#functionality","children":[{"level":3,"title":"General:","slug":"general","link":"#general","children":[]},{"level":3,"title":"Event Loading:","slug":"event-loading","link":"#event-loading","children":[]},{"level":3,"title":"Event Types and Details:","slug":"event-types-and-details","link":"#event-types-and-details","children":[]},{"level":3,"title":"Event Styling:","slug":"event-styling","link":"#event-styling","children":[]},{"level":3,"title":"Event Interaction:","slug":"event-interaction","link":"#event-interaction","children":[]},{"level":3,"title":"Event Filters:","slug":"event-filters","link":"#event-filters","children":[]},{"level":3,"title":"Calendar Views:","slug":"calendar-views","link":"#calendar-views","children":[]},{"level":3,"title":"Event Overflow:","slug":"event-overflow","link":"#event-overflow","children":[]}]},{"level":2,"title":"Technical Requirements:","slug":"technical-requirements","link":"#technical-requirements","children":[]},{"level":2,"title":"Example sources:","slug":"example-sources","link":"#example-sources","children":[{"level":3,"title":"Month view","slug":"month-view","link":"#month-view","children":[]},{"level":3,"title":"User view","slug":"user-view","link":"#user-view","children":[]}]}],"relativePath":"briefs/calendar.md","lastUpdated":1685437925000}'),o={name:"briefs/calendar.md"},i=n(`<h1 id="project-brief-vue-3-calendar-app" tabindex="-1">Project Brief: Vue 3 Calendar App <a class="header-anchor" href="#project-brief-vue-3-calendar-app" aria-hidden="true">#</a></h1><h2 id="objective" tabindex="-1">Objective: <a class="header-anchor" href="#objective" aria-hidden="true">#</a></h2><p>Develop a Calendar app using Vue 3, integrating the composition API, script setup, TypeScript, and Tailwind CSS. The calendar will display events classified as &#39;projects&#39;, &#39;tasks&#39;, and &#39;events&#39;, retrieved from an API, across the days of the month. The app will provide two views – a standard month calendar view and a user-based weekly view. Events should be draggable and droppable, allowing for date alterations. The calendar should also include filters for completed tasks/projects and for different users. Completed events should, by default, have reduced opacity. Each event should display a title and, for tasks, an optional due time.</p><h2 id="functionality" tabindex="-1">Functionality: <a class="header-anchor" href="#functionality" aria-hidden="true">#</a></h2><h3 id="general" tabindex="-1">General: <a class="header-anchor" href="#general" aria-hidden="true">#</a></h3><ol><li>The calendar will occupy the full width and height of the parent div and present events in a grid layout.</li><li>Events will be stacked items and can extend over multiple days if needed.</li><li>The calendar should be vertically scrollable, progressively loading and displaying future months and their events as the user scrolls.</li></ol><h3 id="event-loading" tabindex="-1">Event Loading: <a class="header-anchor" href="#event-loading" aria-hidden="true">#</a></h3><ol><li>The calendar will initially present the current month and load events for the visible dates from an API.</li><li>The calendar should dynamically load as the user scrolls down, revealing events for the visible dates.</li></ol><h3 id="event-types-and-details" tabindex="-1">Event Types and Details: <a class="header-anchor" href="#event-types-and-details" aria-hidden="true">#</a></h3><ol><li>Events are classified into &#39;Projects&#39;, &#39;Tasks&#39;, and &#39;Events&#39;.</li><li>Project events can span multiple non-consecutive dates but will maintain the same project ID across different days. The title of the project events will come from the project name, and the color will be determined by the project&#39;s install status.</li><li>Task events and general events can have an optional category, which will determine the color of the event. The title for tasks will come from the task name and optionally display a due time if set during task/event creation or editing.</li></ol><h3 id="event-styling" tabindex="-1">Event Styling: <a class="header-anchor" href="#event-styling" aria-hidden="true">#</a></h3><ol><li><p>Calendar events are classified into &#39;Projects&#39;, &#39;Tasks&#39;, and &#39;Events&#39;. Calendar events will be assigned colors based on being either an event with category, task with category or project install status using Tailwind CSS.</p></li><li><p>The default color for tasks is <code>#00a1ff</code>.</p></li><li><p>The default color for projects is <code>#8b8b8b</code>.</p></li><li><p>The tailwind config classes for events are:</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">event</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">task</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#00a1ff</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">task-site-visit</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#8a00ff</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">task-design</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#993395</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">task-proposal</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#d851cd</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">project</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#8b8b8b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">project-install-status-ready-not-booked</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> : </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#b6b6b6</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">project-install-status-not-ready</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> : </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#c71919</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">project-install-status-not-ready-provisionally-booked</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> : </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#ffc107</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">project-install-status-ready-booked</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> : </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#4caf50</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">meter-inspection</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#244ead</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">},</span></span>
<span class="line"></span></code></pre></div></li><li><p>Completed events should have reduced opacity by default, indicating their completion status visually.</p></li></ol><h3 id="event-interaction" tabindex="-1">Event Interaction: <a class="header-anchor" href="#event-interaction" aria-hidden="true">#</a></h3><ol><li>Clicking an event will emit an event that allows interaction, such as routing to another view for editing event details or viewing project information.</li><li>Events should be draggable and droppable, enabling users to change the dates of the events by dragging and dropping them onto different dates.</li></ol><h3 id="event-filters" tabindex="-1">Event Filters: <a class="header-anchor" href="#event-filters" aria-hidden="true">#</a></h3><ol><li>The calendar should include filters for viewing completed tasks and projects.</li><li>There should also be filters to view tasks and projects assigned to specific users.</li></ol><h3 id="calendar-views" tabindex="-1">Calendar Views: <a class="header-anchor" href="#calendar-views" aria-hidden="true">#</a></h3><ol><li><strong>Standard Month Calendar View</strong>: This is the default view with days of the week on the x-axis and events shown for each day of the month.</li><li><strong>User-based Weekly View</strong>: This view will have days of the week on the x-axis and users with assigned events on the y-axis. User-specific events will span across the week in their own row. Horizontal scrolling will display subsequent weeks for all users events. The users will stay sticky on the left when scrolling to the next weeks, loading events for those dates.</li></ol><h3 id="event-overflow" tabindex="-1">Event Overflow: <a class="header-anchor" href="#event-overflow" aria-hidden="true">#</a></h3><ol><li>If the number of events for a particular day exceeds the maximum displayable limit, an option should be available to click on the cell to expand it. This expansion will load and display more events for that date.</li></ol><h2 id="technical-requirements" tabindex="-1">Technical Requirements: <a class="header-anchor" href="#technical-requirements" aria-hidden="true">#</a></h2><ol><li>Vue 3 (with Composition API and Script Setup)</li><li>TypeScript</li><li>Tailwind CSS</li><li>API integration for event data fetch (Mock implementation for now)</li><li>Drag and Drop functionality</li><li>Event filtering capability</li><li>Opacity control for completed events</li><li>Displaying event details including title and optional due time</li></ol><p>This project requires a robust understanding of Vue.js, TypeScript, and CSS styling with Tailwind. Implementing drag and drop functionality, filter functionality. The final application should be thoroughly tested and free of errors.</p><h2 id="example-sources" tabindex="-1">Example sources: <a class="header-anchor" href="#example-sources" aria-hidden="true">#</a></h2><h3 id="month-view" tabindex="-1">Month view <a class="header-anchor" href="#month-view" aria-hidden="true">#</a></h3><p><img src="`+l+'" alt="Simple calendar"></p><h3 id="user-view" tabindex="-1">User view <a class="header-anchor" href="#user-view" aria-hidden="true">#</a></h3><p><img src="'+t+'" alt="Simple calendar"></p>',28),r=[i];function p(c,d,h,y,v,u){return a(),s("div",null,r)}const f=e(o,[["render",p]]);export{D as __pageData,f as default};