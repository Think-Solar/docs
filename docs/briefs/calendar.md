---
layout: doc
---

# Project Brief: Vue 3 Calendar App

## Objective:

Develop a Calendar app using Vue 3, integrating the composition API, script setup, TypeScript, and Tailwind CSS. The calendar will display events classified as 'projects', 'tasks', and 'events', retrieved from an API, across the days of the month. The app will provide two views – a standard month calendar view and a user-based weekly view. Events should be draggable and droppable, allowing for date alterations. The calendar should also include filters for completed tasks/projects and for different users. Completed events should, by default, have reduced opacity. Each event should display a title and, for tasks, an optional due time.

## Functionality:

### General:

1. The calendar will occupy the full width and height of the parent div and present events in a grid layout.
2. Events will be stacked items and can extend over multiple days if needed.
3. The calendar should be vertically scrollable, progressively loading and displaying future months and their events as the user scrolls.

### Event Loading:

1. The calendar will initially present the current month and load events for the visible dates from an API.
2. The calendar should dynamically load as the user scrolls down, revealing events for the visible dates.

### Event Types and Details:

1. Events are classified into 'Projects', 'Tasks', and 'Events'.
2. Project events can span multiple non-consecutive dates but will maintain the same project ID across different days. The title of the project events will come from the project name, and the color will be determined by the project's install status.
3. Task events and general events can have an optional category, which will determine the color of the event. The title for tasks will come from the task name and optionally display a due time if set during task/event creation or editing.

### Event Styling:

1. Calendar events are classified into 'Projects', 'Tasks', and 'Events'. Calendar events will be assigned colors based on being either an event with category, task with category or project install status using Tailwind CSS.
2. The default color for tasks is `#00a1ff`.
3. The default color for projects is `#8b8b8b`.
4. The tailwind config classes for events are:

    ```javascript
    event: {
      task: '#00a1ff',
      'task-site-visit': '#8a00ff',
      'task-design': '#993395',
      'task-proposal': '#d851cd',
      project: '#8b8b8b',
      'project-install-status-ready-not-booked' : '#b6b6b6',
      'project-install-status-not-ready' : '#c71919',
      'project-install-status-not-ready-provisionally-booked' : '#ffc107',
      'project-install-status-ready-booked' : '#4caf50',
      'meter-inspection': '#244ead',
    },
    ```
5. Completed events should have reduced opacity by default, indicating their completion status visually.

### Event Interaction:

1. Clicking an event will emit an event that allows interaction, such as routing to another view for editing event details or viewing project information.
2. Events should be draggable and droppable, enabling users to change the dates of the events by dragging and dropping them onto different dates.

### Event Filters:

1. The calendar should include filters for viewing completed tasks and projects.
2. There should also be filters to view tasks and projects assigned to specific users.

### Calendar Views:

1. **Standard Month Calendar View**: This is the default view with days of the week on the x-axis and events shown for each day of the month.
2. **User-based Weekly View**: This view will have days of the week on the x-axis and users with assigned events on the y-axis. User-specific events will span across the week in their own row. Horizontal scrolling will display subsequent weeks for all users events.
The users will stay sticky on the left when scrolling to the next weeks, loading events for those dates.

### Event Overflow:

1. If the number of events for a particular day exceeds the maximum displayable limit, an option should be available to click on the cell to expand it. This expansion will load and display more events for that date.

## Technical Requirements:

1. Vue 3 (with Composition API and Script Setup)
2. TypeScript
3. Tailwind CSS
4. API integration for event data fetch (Mock implementation for now)
5. Drag and Drop functionality
6. Event filtering capability
7. Opacity control for completed events
8. Displaying event details including title and optional due time

This project requires a robust understanding of Vue.js, TypeScript, and CSS styling with Tailwind. Implementing drag and drop functionality, filter functionality. The final application should be thoroughly tested and free of errors.

## Example sources:

### Month view

![Simple calendar](/assets/images/briefs/simple-calendar.png)

### User view

![Simple calendar](/assets/images/briefs/user-view-calendar.jpeg)