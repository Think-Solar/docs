---
layout: doc
---

# Deployment

## Git workflow

The Suite uses a Git-based workflow for deployment. 

- Developers work on the `dev` branch locally or, if they are working on large features, they should check out a dedicated `feature` branch. 
- Once they have finished their work locally, they should make sure they add appropriate tests to ensure their changes haven't broken anything. They should run their tests locally and make sure everything passes before moving to the next step.

To run tests locally, developers should make sure the app container is up and running and then run the command:

```
sail artisan test
```
::: warning
Running tests outside the container (eg. `php artisan test`) may result in errors. For example, PHPUnit requires the mbstring PHP extension to be installed, which may not be installed on your local machine. 
:::

This command runs all the tests. All tests should pass before moving to the next step.

See the [Testing](/backend/testing) page for more information on testing.

## Pull requests

The next step is to submit a pull request to the `master` branch. It is important to submit a PR, and not to merge to the `master` branch directly. This is to ensure that the code is reviewed and tested by our CI/CD pipeline before it is deployed to production. 

## CI/CD Pipeline

Our CI/CD pipeline will run a series of tests and checks to ensure that the code is ready for deployment. These include:

- Code formatting (Laravel Pint)
- Static analysis (Psalm)
- Unit/feature tests (PHPUnit)

![An image](/assets/images/backend/pr.png)

When submitting a PR, it's very helpful to include at least the following:

- A descriptive title that clearly summarizes the changes made in the PR. "fixes" and "updates" are not descriptive titles.
- Test cases that produce passing results and demonstrate that the code in the PR does not introduce any new bugs or regressions.

If the CI/CD steps have successfully completed, developers can merge their own pull requests with the `master` branch. After the code has been merged, a webhook is sent to our server management tool, Laravel Forge.

## Laravel Forge

Laravel Forge is a server management tool that allows us to easily manage our servers. The webhook triggered by merging to `master` will in turn trigger a deployment script on the production server, which pulls the latest code, builds the application and deploys it.
