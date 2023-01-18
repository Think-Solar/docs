---
layout: doc
---

# Code

Guidelines to follow when working on the codebase.

## Flow

<pre class="mermaid">
graph TD
  request[Browser request] --> api[Laravel API]
  api -->|Call requested route| authenticate[Authenticate]
  authenticate -->|Check cookies| controller[Controller]
  controller -->|Call route CRUD method| validate[Validate]
  validate -->|Validate input| action[Action]
  action -->|Handle CRUD logic| database[Database]
  database -->|Return JSON resource| response[Response]
</pre>

## Explanation

This flowchart shows the basic flow of the API. The API starts with the request, which goes through authentication, validation, it is passed to the controller and then to an action.

- At first, an API route is called and the request is received by the API, protected routes will go through the authentication process where it checks the recieved cookie to make sure that the request is coming from an authenticated user.
- The request is passed to the controller where the method that was bound to the route is called.
- Next, it goes through the validation process where it validates the input received in the request to make sure that the data is in the correct format and contains all the necessary fields.

  `FormRequest` should be used to validate the data.

  ::: details View snippet
  ```php
  namespace App\Http\Requests;

  use Illuminate\Foundation\Http\FormRequest;

  class ApiRequest extends FormRequest
  {
      /**
      * Determine if the user is authorized to make this request.
      *
      * @return bool
      */
      public function authorize()
      {
          return true;
      }

      /**
      * Get the validation rules that apply to the request.
      *
      * @return array
      */
      public function rules()
      {
          return [
              //
          ];
      }
  }
  ```
  :::

  However we extend from this base class to allow for any global form validation.

    ::: details View snippet
  ```php
  namespace App\Http\Requests\Tasks;

  use App\Http\Requests\ApiRequest;

  class CreateTask extends ApiRequest
  {
      /**
      * Get data to be validated from the request.
      *
      * @return array
      */
      public function validationData()
      {
          return $this->get('task') ?: [];
      }

      /**
      * Get the validation rules that apply to the request.
      *
      * @return array
      */
      public function rules()
      {
          return [
              'assigned_to.id' => 'nullable|exists:users,id'
          ];
      }

      /**
      * Get the error messages for the defined validation rules.
      *
      * @return array
      */
      public function messages()
      {
          return [
              'assigned_to.id.exists' => 'Assigned user does not exist'
          ];
      }
  }
  ```
  :::

- After that, data is passed to an action class where logic will be called to process the data and interact with the database.
- Once CRUD operations have been completed, the controller returns a response containing the requested data or the status of request.

  The response should always JSON format returning either a `JsonResource` or `ResourceCollection`.

<script setup>
import { onMounted, ref } from 'vue'
import { initMermaid } from '../composables/useMermaid.ts'

onMounted(async () => {
  initMermaid()
});
</script>