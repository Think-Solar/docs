---
layout: doc
---

# Database

An overview of the database schema - WIP

## Schema

 - pipeline
 - pipeline_item
 - sales_pipeline_item
 - projects_pipeline_item

### Schema diagram

<div class="w-full overflow-x-auto">
<pre class="mermaid w-auto">
    {{ assetAsString }}
</pre>
</div>

<script setup>
import { onMounted, ref } from 'vue'
import { initMermaid } from '../composables/useMermaid.ts'

import assetAsString from '/assets/mmd/database-schema-part.mmd?raw'

onMounted(async () => {
  initMermaid()
});
</script>