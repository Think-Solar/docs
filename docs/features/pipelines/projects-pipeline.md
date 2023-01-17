---
layout: doc
---

# Projects pipeline
A projects pipeline item will be represented in the database as `projects_pipeline_item`.

### Stages

 - Project setup
 - Pre-installation
 - Pending installation
 - Installation
 - Post installation
 - Project completed

### States
The projects in the overview can be in various states and are highlighted to relfect this when the following points are all true.

 - White
    - The default colour
 - Grey
    - A new build
 - Red
    - Is in the [Post installation](#post-installation) stage
    - Checkbox for **"I confirm that there are no remaining installation issues"** is checked.

### Overview

![Projects pipeline overview](/assets/images/features/feature-projects-pipeline-overview.png)