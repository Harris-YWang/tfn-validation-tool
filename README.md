# Australian Tax File Number(TFN) Validation Tool

## Overview

A web-based Australian TFN validator with technologies (React, Node.js, Bootstrap 4, and Jest)

### Github Repository

https://github.com/Harris-YWang/tfn-validation-tool

### Technique Slack

- **Front-End**
  Create-React-App, React, React Hooks, TypeScript, Bootstrap 4, Jest and Enzyme, TSlint, prettier
- **Back-End**
  Node.js, Express, JavaScript, memory-cache, Jest, ESlint, prettier

### Task Completed
- **Functional Requirements**
   Basic and additional tasks are completed.
   For additional tasks, [memory-cache](https://www.npmjs.com/package/memory-cache) library is used as a timer and data store.  
- **UI Design**
  Refer to Bootstrap 4, sample [Album](https://getbootstrap.com/docs/4.0/examples/album/) Layout, and component [Alerts](https://getbootstrap.com/docs/4.4/components/alerts/).

### Unit Testing
  In either *client* or *server* folder, run unit tests `npm run test`

#### Scope
- **Front-End**
  All UI Components: App, ErrorMessage, Footer, Header, Layout, Loader, and Result
- **Back-End**
  All functional utils: inputCleaner, inputValidator, linkedValidator, tfnValidator, and timeCounter



## Getting Started

#### Prerequisites

- Git
- Node(& npm): any 10.x version starting with 10.13.0 or greater

### TFN Validator Server

- `cd server` to open the *server* folder.

#### Installation

- `npm i` to install the website's npm dependencies

#### Running locally

- `npm run start:dev` to start the hot-reloading development server
- when *Server started at http://localhost:5000* shown on the terminal, the server starts successfully

#### Running the tests

- please make sure you're still working on the *server* folder
- `npm run test` to run test cases.

### TFN Validator Client

- please make sure the server has been started following above steps
- `cd ..` to return the root folder (tfn-validation-tool) if needed
- `cd client` to open the *client* folder

#### Installation

- `npm i` to install the website's npm dependencies

#### Running locally

1. `npm run start` to start the hot-reloading development server
2. open http://localhost:3000 to open the site in your favorite browser


#### Running the tests

1. please make sure you're still working on the *client* folder
2. `npm run test` to run test cases.


## Lint

TSLint/ESLint, check syntax, find problems, and enforce code style.

- Tool: TSLint/ESLint, prettier


## Deploy

### Demo

Demo are deployed with [Heroku](https://dashboard.heroku.com/):

- [TFN Validator Client](https://tfn-validator-client.herokuapp.com/)
- [TFN Validator Server](https://tfn-validator-server.herokuapp.com/)

## Authors

- Yonghui Wang (Harris), harris.ywang@outlook.com