---
layout: doc
---

# Code

Guidelines to follow when working on the codebase.

# Flow

<pre class="mermaid">
graph TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]
</pre>

## Routes

 - 

### Diagram

![Database schema](/assets/images/guide/guide-database-schema.png)

<script setup>
import { onMounted, ref } from 'vue'
import { initMermaid } from '../composables/useMermaid.ts'

onMounted(async () => {
  initMermaid()
});
</script>