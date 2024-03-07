### SimplyBuilderCore - Main Modules  [![Node.js Package](https://github.com/SimplyBuilder/sb-core/actions/workflows/npm-publish.yml/badge.svg?event=workflow_dispatch)](https://github.com/SimplyBuilder/sb-core/actions/workflows/npm-publish.yml) [![Test With Node.js](https://github.com/SimplyBuilder/sb-core/actions/workflows/npm-test-publish.yml/badge.svg?event=workflow_dispatch)](https://github.com/SimplyBuilder/sb-core/actions/workflows/npm-test-publish.yml)

Welcome to SimplyBuilder's Core JavaScript Modules - a collection of three powerful modules designed to streamline web development by simplifying DOM manipulation, event handling, and integrating these functionalities into a cohesive system. These modules are `EventModule`, `DomModule`, and `CoreModule`.


[![SimplyBuilder](https://img.shields.io/badge/Author-Gerv%C3%A1sio_J%C3%BAnior-brightgreen?style=flat-square&color=%23fedcba)](https://github.com/jamilservicos)
[![SimplyBuilder](https://img.shields.io/badge/SimplyBuilder-Module-brightgreen?style=flat-square&label=SimplyBuilder&color=%23fedcba)](https://simplybuilder.github.io)
![Maintained](https://img.shields.io/badge/Maintained%3F-yes-green.svg)
[![SimplyBuilder - sb-core](https://img.shields.io/static/v1?label=SimplyBuilder&message=sb-core&color=blue&logo=github)](https://github.com/SimplyBuilder/sb-core)
[![GitHub License](https://img.shields.io/github/license/SimplyBuilder/sb-core)](https://github.com/SimplyBuilder/sb-core/blob/main/LICENSE)

[![GitHub package.json sb-core-module](https://img.shields.io/github/package-json/v/SimplyBuilder/sb-core?filename=core-module%2Fpackage.json&label=core%20module)](https://github.com/SimplyBuilder/sb-core/blob/main/core-module/package.json#L5)
[![GitHub package.json sb-dom-module](https://img.shields.io/github/package-json/v/SimplyBuilder/sb-core?filename=dom-module%2Fpackage.json&label=dom%20module)](https://github.com/SimplyBuilder/sb-core/blob/main/dom-module/package.json#L5)
[![GitHub package.json sb-event-module](https://img.shields.io/github/package-json/v/SimplyBuilder/sb-core?filename=event-module%2Fpackage.json&label=event%20module)](https://github.com/SimplyBuilder/sb-core/blob/main/event-module/package.json#L5)
[![GitHub Release](https://img.shields.io/github/v/release/SimplyBuilder/sb-core)](https://github.com/SimplyBuilder/sb-core/releases)
[![Test with Node.js](https://img.shields.io/badge/Node.js->=20_10-blue?logo=node.js&logoColor=white)](https://nodejs.org)
![GitHub top language](https://img.shields.io/github/languages/top/SimplyBuilder/sb-core)

[![npm - @jamilservices/sb-core-module](https://img.shields.io/badge/npm-%40jamilservices%2Fsb--core--module-blue?logo=npm&logoColor=white)](https://www.npmjs.com/package/@jamilservices/sb-core-module)
[![yarn - @jamilservices/sb-core-module](https://img.shields.io/badge/yarn-%40jamilservices%2Fsb--core--module-blue?logo=npm&logoColor=white)](https://yarnpkg.com/package/@jamilservices/sb-core-module)

[![npm - @jamilservices/sb-core-dom-module](https://img.shields.io/badge/npm-%40jamilservices%2Fsb--core--dom--module-blue?logo=npm&logoColor=white)](https://www.npmjs.com/package/@jamilservices/sb-core-dom-module)
[![yarn - @jamilservices/sb-core-dom-module](https://img.shields.io/badge/yarn-%40jamilservices%2Fsb--core--dom--module-blue?logo=npm&logoColor=white)](https://yarnpkg.com/package/@jamilservices/sb-core-dom-module)

[![npm - @jamilservices/sb-core-event-module](https://img.shields.io/badge/npm-%40jamilservices%2Fsb--core--event--module-blue?logo=npm&logoColor=white)](https://www.npmjs.com/package/@jamilservices/sb-core-event-module)
[![yarn - @jamilservices/sb-core-event-module](https://img.shields.io/badge/yarn-%40jamilservices%2Fsb--core--event--module-blue?logo=npm&logoColor=white)](https://yarnpkg.com/package/@jamilservices/sb-core-event-module)


![IDE](https://img.shields.io/badge/WebStorm-000000?logo=WebStorm&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-100000?logo=github&logoColor=white)

![Linux](https://img.shields.io/badge/Ubuntu-E95420?logo=ubuntu&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white)

![MarkDown](https://img.shields.io/badge/Markdown-000000?logo=markdown&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?logo=javascript&logoColor=F7DF1E)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)

![Brave](https://img.shields.io/badge/Brave-FF1B2D?logo=Brave&logoColor=white)
![Chrome](https://img.shields.io/badge/Chrome-4285F4?logo=Google-chrome&logoColor=white)
![Firefox](https://img.shields.io/badge/Firefox-FF7139?logo=Firefox-Browser&logoColor=white)
![Vivaldi](https://img.shields.io/badge/Vivaldi-EF3939?logo=Vivaldi&logoColor=white)
![Safari](https://img.shields.io/badge/Safari-FF1B2D?logo=Safari&logoColor=white)
![Opera](https://img.shields.io/badge/Opera-FF1B2D?logo=Opera&logoColor=white)

#         
### 🤖 Documented by Artificial Intelligence

This project takes a leap into the future of code documentation and maintenance. 🚀            
All text commits, Readme details and **[JSDoc](https://jsdoc.app/)** comments were created automatically by the advanced AI of **ChatGPT**, showcasing a seamless integration between human creativity and artificial intelligence.

By leveraging ChatGPT's capabilities, we've ensured that the documentation is not only comprehensive but also up-to-date with the latest standards. This collaboration marks a step forward in our pursuit of innovative solutions, making our codebase more accessible and easier to understand for developers worldwide.

Embrace the future of coding with us. 🌟

#
## Modules Overview


### 1. [EventModule](/event-module)

The `EventModule` provides an intuitive API for event management. It allows you to register, unregister, and handle custom events efficiently, making your application's event handling cleaner and more manageable.

**Key Features:**

- Register and unregister custom events.
- Simplified event listener management.
- Supports custom event actions.


### 2. [DomModule](/dom-module)

The `DomModule` focuses on DOM manipulation, offering functionalities to create, query, and manage HTML and SVG elements seamlessly. It's designed to work with both vanilla JavaScript and modern frontend frameworks.

**Key Features:**

- Efficient creation and management of HTML and SVG elements.
- Support for shadow DOM operations.
- Internal registry for querying and managing elements.


### 3. [CoreModule](/core-module)

The `CoreModule` combines the `EventModule` and `DomModule`, providing a unified interface for managing both DOM elements and their events. This module streamlines the process of creating interactive web applications by integrating element creation and event handling into a single, coherent API.

**Key Features:**

- Unified API for DOM manipulation and event handling.
- Simplifies the process of creating and managing interactive elements.
- Leverages the capabilities of both `EventModule` and `DomModule`.


## Installation

These modules are designed to be modular, allowing you to use them independently or together based on your project's needs. You can install each module using npm, pnpm, or yarn.



**For EventModule:**

```bash
npm install @jamilservices/sb-core-event-module
```

**For DomModule:**

```bash
npm install @jamilservices/sb-core-dom-module
```

**For CoreModule (includes both EventModule and DomModule):**

```bash
npm install @jamilservices/sb-core-module
```

### ESM Import Module

#### CDN:
You can use the following CDN links to include the module:

**For EventModule:**

~~~text
https://cdn.skypack.dev/@jamilservices/sb-core-event-module@latest/lib/main.min.js

https://cdn.jsdelivr.net/npm/@jamilservices/sb-core-event-module@latest/lib/main.min.js

https://unpkg.com/@jamilservices/sb-core-event-module@latest/lib/main.min.js
~~~  


**For DomModule:**

~~~text
https://cdn.skypack.dev/@jamilservices/sb-core-dom-module@latest/lib/main.min.js

https://cdn.jsdelivr.net/npm/@jamilservices/sb-core-dom-module@latest/lib/main.min.js

https://unpkg.com/@jamilservices/sb-core-dom-module@latest/lib/main.min.js
~~~  

**For CoreModule (includes both EventModule and DomModule):**

~~~text
https://cdn.skypack.dev/@jamilservices/sb-core-module@latest/lib/main.min.js

https://cdn.jsdelivr.net/npm/@jamilservices/sb-core-module@latest/lib/main.min.js

https://unpkg.com/@jamilservices/sb-core-module@latest/lib/main.min.js
~~~  


### Contribution Guidelines

Interested in contributing? We value your contributions and would love to see your input. Please follow our guidelines for contributing to ensure a smooth collaboration process.
     
- For contributing to Core Module, please see the [Core Module Guidelines](/core-module/CONTRIBUTING.md).
- For contributing to Dom Module, please see the [Dom Module Guidelines](/dom-module/CONTRIBUTING.md).
- For contributing to Event Module, please see the [Event Module Guidelines](/event-module/CONTRIBUTING.md).

### License

`SimplyBuilderCore` is available under the [MIT License](/LICENSE) by [@jamilservicos](https://github.com/jamilservicos).

- You are free to modify and reuse the code.
- The original license must be included with copies of this software.
- We encourage linking back to this repository if you use a significant portion of the source code.