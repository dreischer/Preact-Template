# Preact template
Create preact apps

Inspired by [`preact-cli`](https://github.com/developit/preact-cli) and [`create-react-app`](https://github.com/facebookincubator/create-react-app/).  [Preact](https://github.com/developit/preact) is a lightweight (**3kb**) alternative to React.

## Overview
`preact-template` contains everything you need to get started. No configuration is required and your environment will have everything you need:
- React, JSX, ES6 syntax support
- Express backend (optional)
- Dev server with hot reloading
- Less compiler
- [standard.js](https://github.com/standard/standard) linting
- Build script to bundle CSS and JS (with sourcemaps)

The aim isn't a complete feature set. `preact-template` allows you to get started quickly and add in whatever you need.

## Getting started
### Install
```sh
git clone https://github.com/dreischer/Preact-Template.git
cd Preact-Template
make bootstrap
```

### Development
Starting the develoment server
```sh
make dev
```
Visit `localhost:4000`

### Production
Bundling all the scripts and starting express server
```sh
make start
```
Visit `localhost:4000`

### Build
Bundling all the scripts
```sh
make build
```

## Folder structure
```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── app
│   └── components
│   |   └── Header
│   |   |    └── Header.js
│   |   |    └── Header.less
│   |   |    └── index.js
│   └── styles
│   |   └── index.less
│   └── views
│   |   └── Feed
│   |   |    └── Feed.js
│   |   |    └── Feed.less
│   |   |    └── index.js
│   |   └── Home
│   |   |    └── Home.js
│   |   |    └── Home.less
│   |   |    └── index.js
│   |   └── NotFound
│   |        └── NotFound.js
│   |        └── NotFound.less
│   |        └── index.js
│   └── app.js
│   └── index.js
├── config
│   └── default.yml
├── public
│   └── index.html
└── server
    └── index.js
```
## What's inside
- [webpack](https://webpack.js.org/) with [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware), [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware) and [style-loader](https://github.com/webpack/style-loader)
- [Buble](https://gitlab.com/Rich-Harris/buble) (ES6, JSX, object spread)
- [standard.js](https://github.com/standard/standard)
- [es6-promise](https://github.com/stefanpenner/es6-promise)
- and others

## What's not included
- Any deployment scripts/configs
- Any unit testing setup
