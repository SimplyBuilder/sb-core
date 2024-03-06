# @jamilservices/sb-core-dom-module

The `@jamilservices/sb-core-dom-module` is a JavaScript library designed to simplify DOM manipulation and enhance frontend development workflows. It offers a collection of utilities for creating, querying, and managing HTML and SVG elements, with support for shadow DOM operations.

### Features

- Easy creation and management of HTML and SVG elements.
- Support for shadow DOM, allowing for encapsulated styling and markup.
- Efficient querying and manipulation of elements stored in an internal registry.
- Designed to work seamlessly with modern frontend frameworks and vanilla JavaScript projects.

### Installation

You can install the DOM module using npm or yarn as follows:

#### Using npm

```bash
npm install @jamilservices/sb-core-dom-module
```

#### Using pnpm

```bash
pnpm add @jamilservices/sb-core-dom-module
```

#### Using yarn

```bash
yarn add @jamilservices/sb-core-dom-module
```

### Usage

Here's how to use the `@jamilservices/sb-core-dom-module` in your application:

#### Importing the Module

```javascript
import { DomModule } from '@jamilservices/sb-core-dom-module';
```

### Usage Examples

After installing the `@jamilservices/sb-core-dom-module`, you can use it to create, manipulate, and manage DOM elements efficiently. Here are a few examples:

#### Creating an HTML Element

Create a simple `div` element with text content and append it to the body.

```javascript
import { DomModule } from '@jamilservices/sb-core-dom-module';

const myDiv = DomModule.createHTMLElement({
  element: {
    type: 'div',
    attr: { class: 'my-class' },
    text: 'This is a dynamic div'
  }
});

document.body.appendChild(myDiv);
```

#### Creating an SVG Element

Create an SVG circle and append it to an SVG root element.

```javascript
import { DomModule } from '@jamilservices/sb-core-dom-module';

const svgRoot = DomModule.createSVGElement({
  element: {
    type: 'svg',
    attr: {
      width: '100',
      height: '100',
      xmlns: 'http://www.w3.org/2000/svg'
    }
  }
});

const circle = DomModule.createSVGElement({
  element: {
    type: 'circle',
    attr: {
      cx: '50',
      cy: '50',
      r: '40',
      stroke: 'green',
      'stroke-width': '4',
      fill: 'yellow'
    }
  },
  parent: svgRoot
});

document.body.appendChild(svgRoot);
```

### API Documentation

The `@jamilservices/sb-core-dom-module` offers several functions to work with the DOM. Here's a brief overview of the main functions:

- **createHTMLElement**: Creates an HTML element based on the provided specifications (type, attributes, text content, etc.).
- **createSVGElement**: Similar to `createHTMLElement` but specifically for creating SVG elements.
- **addElementToStore**: Stores a reference to an element by a specified key for easy retrieval.
- **getElementFromStore**: Retrieves an element reference from the store using its key.
- **removeElementFromStore**: Removes an element's reference from the store and optionally its associated events.
- **createFromStruct**: Creates DOM elements based on a structured object, supporting nested children and event binding.
- **removeElement**: Removes a specified element from the DOM and optionally from the internal store and unbinds its events.


### Contribution Guidelines

Interested in contributing? We welcome your contributions to enhance the backend capabilities of `@jamilservices/sb-core-dom-module`. Please check our [Contribution Guidelines](/CONTRIBUTING.md) for more details.

### License

`@jamilservices/sb-core-dom-module` is available under the [MIT License](/LICENSE) by [@jamilservicos](https://github.com/jamilservicos).

- You are free to modify and reuse the code.
- The original license must be included with copies of this software.
- We encourage linking back to this repository if you use a significant portion of the source code.