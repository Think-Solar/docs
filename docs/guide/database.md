---
layout: doc
---

# Database

An overview of the database tables and relationships

## Schema

### Tables

 - pipeline
 - pipeline_item
 - sales_pipeline_item
 - projects_pipeline_item

### Relational diagram

<pre class="mermaid zoomable w-full overflow-hidden max-h-800px">
    {{ databaseDiagram }}
</pre>

<script setup>
import { onMounted, ref } from 'vue'
import { initMermaid } from '../composables/useMermaid.ts'

import databaseDiagram from '/assets/mmd/database-schema-full.mmd?raw'

onMounted(async () => {
  initMermaid({ x: -4300, y: 0, k: 0.6 })
});
</script>