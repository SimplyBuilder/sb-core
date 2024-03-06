# @jamilservices/sb-core-dom-module

The `@jamilservices/sb-core-dom-module` is a JavaScript library designed to simplify DOM manipulation and enhance frontend development workflows. It offers a collection of utilities for creating, querying, and managing HTML and SVG elements, with support for shadow DOM operations.
# 
[![SimplyBuilder](https://img.shields.io/badge/Author-Gerv%C3%A1sio_J%C3%BAnior-brightgreen?style=flat-square&color=%23fedcba)](https://github.com/jamilservicos)
[![SimplyBuilder](https://img.shields.io/badge/SimplyBuilder-Module-brightgreen?style=flat-square&label=SimplyBuilder&color=%23fedcba)](https://simplybuilder.github.io)
[![SimplyBuilder - sb-core](https://img.shields.io/static/v1?label=SimplyBuilder&message=sb-core-dom-module&color=blue&logo=github)](https://github.com/SimplyBuilder/sb-core/dom-module)
[![GitHub License](https://img.shields.io/github/license/SimplyBuilder/sb-core)](LICENSE)

#         
### 🤖 Documented by Artificial Intelligence

This project takes a leap into the future of code documentation and maintenance. 🚀            
All text commits, Readme details and **[JSDoc](https://jsdoc.app/)** comments were created automatically by the advanced AI of **ChatGPT**, showcasing a seamless integration between human creativity and artificial intelligence.

By leveraging ChatGPT's capabilities, we've ensured that the documentation is not only comprehensive but also up-to-date with the latest standards. This collaboration marks a step forward in our pursuit of innovative solutions, making our codebase more accessible and easier to understand for developers worldwide.

Embrace the future of coding with us. 🌟

#
### Features

- Easy creation and management of HTML and SVG elements.
- Support for shadow DOM, allowing for encapsulated styling and markup.
- Efficient querying and manipulation of elements stored in an internal registry.
- Designed to work seamlessly with modern frontend frameworks and vanilla JavaScript projects.

### Installation

You can easily install the DOM module in your project using npm, pnpm or yarn:


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

Interested in contributing? We welcome your contributions to enhance the backend capabilities of `@jamilservices/sb-core-dom-module`. Please check our [Contribution Guidelines](CONTRIBUTING.md) for more details.

### License

`@jamilservices/sb-core-dom-module` is available under the [MIT License](LICENSE) by [@jamilservicos](https://github.com/jamilservicos).

- You are free to modify and reuse the code.
- The original license must be included with copies of this software.
- We encourage linking back to this repository if you use a significant portion of the source code.