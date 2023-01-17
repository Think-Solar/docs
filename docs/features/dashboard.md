---
layout: doc
---

# Dashboard

This will be the inital route displayed after a user has successfully logged in.

::: info
This may not always be the case because the applications last route is stored to the browsers local storage when logging out, this makes it easier to pick up from where the user left off.

::: details View snippet
```js
if (localStorage.getItem('pathToLoadAfterLogin')) {
  router.replace({ path: `${localStorage.getItem('pathToLoadAfterLogin')}` })
} else {
  router.replace({ name: 'tasks' })
}
```
:::

## Features

A list of buttons to perform the most common operations will be displayed.
- Log Hours
- Add Comment
- Add Photos
- Add Consumables
- Health & Safety Form
- Create COC Form
- Create Project
- Create Task
- Import Invoice
- Knowledge Base
- Barcode Reader


## Example

![Dashboard buttons](/assets/images/features/feature-dashboard-buttons.png)