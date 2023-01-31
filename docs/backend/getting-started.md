---
layout: doc
---

# Getting Started with the Suite backend

## Cloning the project

To get started working on the backend, you will first need to clone the project from the ThinkSolar GitHub.

```
git clone https://github.com/Think-Solar/api.thinksolar.co.nz-v3.git
```

::: warning
The repository is private, so you will need to be added to the ThinkSolar GitHub organisation to access it.
Contact software@thinksolar.co.nz for details.
:::

Once you have cloned the project, navigate to the project root and run `composer install` to install all the necessary dependencies.

## Laravel Sail & Docker

We're using Laravel Sail & Docker to package the app, its dependencies and its configuration into a single container. This makes it easy to run and deploy the app on any machine that has Docker installed, and ensures that it will run consistently across different environments; this eliminates the "works on my machine" problem.

::: warning
1. You will need to have Docker installed on your machine in order to bring up the container.
Check the latest Laravel documentation for more information and instructions for installing Sail and Docker
https://laravel.com/docs/9.x/sail

2. Laravel Sail refers to the `.env` file at the root of the project in order to set up the container. You should copy the `.env.local` file and rename it to `.env` **before** bringing up the container for the first time.
3. By default, our setup maps local ports 80, 3306 and 6379 to the container. If you are already using any of these ports on your machine, you can change the port mappings in the `.env` file. Do **NOT** commit these changes to the repository.
:::

With Docker installed and the correct `.env` file in place, you can bring up the container by running the following command in the project root:

`./vendor/bin/sail up`

::: info
This can be shortened to simply `sail up` by setting up a shell alias.

https://laravel.com/docs/9.x/sail#configuring-a-shell-aliase
:::

## Database setup
::: danger
WIP
:::
Once the container is up and running, you can run the database migrations and seed the database with some test data by running the following commands:

## Local hostnames

By default, our frontend project makes requests to `http://api.thinksolar.local:80`. You can change this locally if you want to, otherwise, remember to add the following hostnames to your local hosts file:

```
127.0.0.1 api.thinksolar.local
```

At this stage the app should be available at http://api.thinksolar.local