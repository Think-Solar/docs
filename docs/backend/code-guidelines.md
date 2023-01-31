---
layout: doc
---

# Code guidelines

## Request lifecycle

Below is an overview of the request lifecycle as it moves through the API. Each step is explained in more detail below.

<pre class="mermaid">
  {{ codeFlowDiagram }}
</pre>

## Code style

### Incoming request
1. When a user makes a request to a Laravel application, the first step in the request lifecycle is to determine which controller method should handle the request. This is done by the router, which matches the incoming request's URL and HTTP method to a specific route defined in the application's routing configuration. The route is associated with a controller method that is responsible for handling the request.
### Middleware
2. Before the request is passed to the controller, any middleware associated with the matching route is processed: Once the appropriate controller method has been identified, any middleware that is associated with the matching route is executed. Middleware is a way to add functionality to the request and response lifecycle, such as authentication or validation. Middleware can reject the request if it fails to meet certain conditions, such as not being authenticated.
### Validation
3. If the request is not rejected by middleware, it is forwarded to the controller and validated by a custom form request class: If the request is not rejected by the middleware, it is forwarded to the controller method. Before the controller method is executed, the request is validated using a custom form request class. Form request classes provide a way to validate incoming data and reject the request if it fails validation, returning a 422 status response and appropriate validation error messages.
### Controller methods
4. Once the request has passed validation, it is passed to the controller method where it is processed. The controller method can perform various actions, such as querying a database or interacting with other services, to fulfill the request.
### Transforming resources
5. asdf
### Response
6. return a JSON response detailing the outcome of the request: After the controller method has processed the request, it returns a JSON response that details the outcome of the request. This response can include information such as the status of the request, any data that was returned, and any error messages that may have occurred.

<script setup>
import { onMounted } from 'vue';
import { initMermaid } from '../composables/useMermaid.ts';

import codeFlowDiagram from '/assets/mmd/backend-code-flow.mmd?raw';

onMounted(async () => {
  initMermaid()
});
</script>