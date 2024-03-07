# @jamilservices/sb-core-module

The `@jamilservices/sb-core-module` integrates the functionalities of both `EventModule` and `DomModule`, providing a unified interface for managing DOM elements and event handling. This simplification streamlines the process of creating, manipulating, and managing DOM elements along with their associated events within applications.
# 
[![SimplyBuilder](https://img.shields.io/badge/Author-Gerv%C3%A1sio_J%C3%BAnior-brightgreen?style=flat-square&color=%23fedcba)](https://github.com/jamilservicos)
[![SimplyBuilder](https://img.shields.io/badge/SimplyBuilder-Module-brightgreen?style=flat-square&label=SimplyBuilder&color=%23fedcba)](https://simplybuilder.github.io)
[![SimplyBuilder - sb-core](https://img.shields.io/static/v1?label=SimplyBuilder&message=sb-core-module&color=blue&logo=github)](https://github.com/SimplyBuilder/sb-core/tree/main/core-module)
[![GitHub License](https://img.shields.io/github/license/SimplyBuilder/sb-core)](https://github.com/SimplyBuilder/sb-core/tree/main/core-module/LICENSE)

#         
### 🤖 Documented by Artificial Intelligence

This project takes a leap into the future of code documentation and maintenance. 🚀            
All text commits, Readme details and **[JSDoc](https://jsdoc.app/)** comments were created automatically by the advanced AI of **ChatGPT**, showcasing a seamless integration between human creativity and artificial intelligence.

By leveraging ChatGPT's capabilities, we've ensured that the documentation is not only comprehensive but also up-to-date with the latest standards. This collaboration marks a step forward in our pursuit of innovative solutions, making our codebase more accessible and easier to understand for developers worldwide.

Embrace the future of coding with us. 🌟

# 
### Features

- Unified interface for event handling through the `EventModule`.
- Robust DOM manipulation utilities provided by the `DomModule`.
- Seamless integration between event handling and DOM operations.
- Supports creating, modifying, and managing both HTML and SVG elements.
- Enhanced support for shadow DOM components, enabling encapsulated styles and behaviors.

### Installation

You can easily install the Core module in your project using npm, pnpm or yarn:

#### Using npm

```bash
npm install @jamilservices/sb-core-module
```

#### Using pnpm

```bash
pnpm add @jamilservices/sb-core-module
```

#### Using yarn

```bash
yarn add @jamilservices/sb-core-module
```         

> [!NOTE]
> This will add the `@jamilservices/sb-core-module` as a development dependency in your project.

### ESM Import Module

#### CDN:
You can use the following CDN links to include the module:
~~~text
https://cdn.skypack.dev/@jamilservices/sb-core-module@latest/lib/main.min.js

https://cdn.jsdelivr.net/npm/@jamilservices/sb-core-module@latest/lib/main.min.js

https://unpkg.com/@jamilservices/sb-core-module@latest/lib/main.min.js
~~~  


### Usage

Here's how to use the `@jamilservices/sb-core-module` in your application:

#### Importing the Module

```javascript
import { CoreModule } from '@jamilservices/sb-core-module';
```

### Usage Examples

Here's how to use the `@jamilservices/sb-core-module` in your application:

#### Creating an Element

Create an HTML element with attributes and append it to the document body:

```javascript
import { CoreModule } from '@jamilservices/sb-core-module';

// Structure for creating a new element
const elementStruct = {
    element: 'div',
    attr: { class: 'example-class' },
    text: 'This is a dynamic element.'
};

// Create and append the element to the document body
const created = CoreModule.createFromStruct({
    struct: elementStruct,
    parent: document.body
});

if (created) {
    console.log('Element created and appended successfully.');
}
```

#### Retrieving and Removing an Element

Retrieve a stored element by its key and then remove it:

```javascript
// Assuming 'exampleKey' is the key of an element stored in the DomModule's store
const storedElement = CoreModule.getElementFromStore('exampleKey');

if (storedElement) {
    console.log('Retrieved stored element:', storedElement);

    // Remove the retrieved element from the document
    CoreModule.removeElement(storedElement);
    console.log('Element removed successfully.');
}
```


### API Documentation

`CoreModule` exposes the following methods for direct use in your projects:

- **`getElementFromStore(key: string): HTMLElement | SVGElement | undefined`**
    - Retrieves a DOM element previously stored by its unique key.
    - **Parameters:**
        - `key`: A string identifier used to store the DOM element.
    - **Returns:** The DOM element if found; otherwise, `undefined`.

- **`createFromStruct(data: object): boolean`**
    - Creates DOM elements based on a provided structure, which includes specifications for the element's type, attributes, children, and event listeners.
    - **Parameters:**
        - `data`: An object containing the structure for creating DOM elements.
    - **Returns:** `true` if the elements were successfully created; otherwise, `false`.

- **`removeElement(element: HTMLElement | SVGElement): void`**
    - Removes the specified DOM element from the document.
    - **Parameters:**
        - `element`: The DOM element to be removed.

- **`eventRegister(name: string, fn: function): void`**
    - Registers a custom event type and its associated action.
    - **Parameters:**
        - `name`: A string identifier used to relate the function to the event.
        - `fn`: Function that will be called in the event.

- **`eventUnregister(name: string): void`**
    - Unregisters a custom event type and removes its associated action.
    - **Parameters:**
        - `name`: The same string identifier used to relate the function to the event.



### Contribution Guidelines

Interested in contributing? We welcome your contributions to enhance the backend capabilities of `@jamilservices/sb-core-module`. Please check our [Contribution Guidelines](https://github.com/SimplyBuilder/sb-core/tree/main/core-module/CONTRIBUTING.md) for more details.

### License

`@jamilservices/sb-core-module` is available under the [MIT License](https://github.com/SimplyBuilder/sb-core/tree/main/core-module/LICENSE) by [@jamilservicos](https://github.com/jamilservicos).

- You are free to modify and reuse the code.
- The original license must be included with copies of this software.
- We encourage linking back to this repository if you use a significant portion of the source code.