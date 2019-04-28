# vue-project

A project to showcase how to merge Vue.js + prerendering + webpack + Docker, to exploit the benefits of deploying anywhere and building modular.

## Getting started

Install the dependencies:

```sh
npm install
```

Compiles and hot-reloads for development:

```sh
npm run serve
```

App running at:

    http://localhost:8080/ 

## Development

### Manage the Vue App

With a user interface in the browser:

```sh
vue ui
```

### Run your tests

```sh
npm run test
```

### Lints and fixes files

```sh
npm run lint
```

### Customize the configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

See [Using the New vue-cli 3 to Scaffold Vue.js Apps](https://alligator.io/vuejs/using-new-vue-cli-3/)

**TODO:** This package looks interesting for rendering Markdown:

    "@vuepress/markdown-loader": "^1.0.0-alpha.0"

### Ecosystem

For common components or ideas check out [Awesome Vue.js](https://github.com/vuejs/awesome-vue)


## Deployment

For a deployment together with an external backend framework (e.g. Flask, actix) see
[Deployment](https://cli.vuejs.org/guide/deployment.html)

### Compiles and minifies for production

```sh
npm run build
```

### Deployment with Docker

Make sure you have installed [`docker`](https://docs.docker.com/install/linux/docker-ce/ubuntu/) and
[`docker-compose`](https://docs.docker.com/compose/install/).

```sh
docker-compose up
```

**NOTE:** Building the docker image the first time can take a while.

**NOTE:** make sure to configure the Load Balancer/Web Server/Reverse Proxy correctly.
