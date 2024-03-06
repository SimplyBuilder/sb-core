# SimplyBuilder Core JavaScript Modules

Welcome to SimplyBuilder's Core JavaScript Modules - a collection of three powerful modules designed to streamline web development by simplifying DOM manipulation, event handling, and integrating these functionalities into a cohesive system. These modules are `EventModule`, `DomModule`, and `CoreModule`.

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



### Contribution Guidelines

Interested in contributing? We welcome your contributions to enhance the backend capabilities of `sb-core`. Please check our [Contribution Guidelines](/CONTRIBUTING.md) for more details.

### License

`@jamilservices/sb-core-event-module` is available under the [MIT License](/LICENSE) by [@jamilservicos](https://github.com/jamilservicos).

- You are free to modify and reuse the code.
- The original license must be included with copies of this software.
- We encourage linking back to this repository if you use a significant portion of the source code.