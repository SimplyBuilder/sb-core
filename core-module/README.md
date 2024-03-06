# @jamilservices/sb-core-module

The `@jamilservices/sb-core-module` integrates the functionalities of both `EventModule` and `DomModule`, providing a unified interface for managing DOM elements and event handling. This simplification streamlines the process of creating, manipulating, and managing DOM elements along with their associated events within applications.

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



### Contribution Guidelines

Interested in contributing? We welcome your contributions to enhance the backend capabilities of `@jamilservices/sb-core-module`. Please check our [Contribution Guidelines](CONTRIBUTING.md) for more details.

### License

`@jamilservices/sb-core-module` is available under the [MIT License](LICENSE) by [@jamilservicos](https://github.com/jamilservicos).

- You are free to modify and reuse the code.
- The original license must be included with copies of this software.
- We encourage linking back to this repository if you use a significant portion of the source code.