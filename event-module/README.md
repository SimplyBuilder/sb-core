# @jamilservices/sb-core-event-module

The `@jamilservices/sb-core-event-module` is a powerful and flexible library designed to simplify event management in your JavaScript applications. It provides functionalities to register, unregister, and manage custom events and their associated actions, making it an essential tool for developers looking to enhance event handling in their projects.
# 
[![SimplyBuilder](https://img.shields.io/badge/Author-Gerv%C3%A1sio_J%C3%BAnior-brightgreen?style=flat-square&color=%23fedcba)](https://github.com/jamilservicos)
[![SimplyBuilder](https://img.shields.io/badge/SimplyBuilder-Module-brightgreen?style=flat-square&label=SimplyBuilder&color=%23fedcba)](https://simplybuilder.github.io)
[![SimplyBuilder - Event Module](https://img.shields.io/static/v1?label=SimplyBuilder&message=sb-core-event-module&color=blue&logo=github)](https://github.com/SimplyBuilder/sb-core/event-module)
[![GitHub License](https://img.shields.io/github/license/SimplyBuilder/sb-core)](LICENSE)


#         
### 🤖 Documented by Artificial Intelligence

This project takes a leap into the future of code documentation and maintenance. 🚀            
All text commits, Readme details and **[JSDoc](https://jsdoc.app/)** comments were created automatically by the advanced AI of **ChatGPT**, showcasing a seamless integration between human creativity and artificial intelligence.

By leveraging ChatGPT's capabilities, we've ensured that the documentation is not only comprehensive but also up-to-date with the latest standards. This collaboration marks a step forward in our pursuit of innovative solutions, making our codebase more accessible and easier to understand for developers worldwide.

Embrace the future of coding with us. 🌟

#

### Installation

You can easily install the Event module in your project using npm, pnpm or yarn:

#### Using npm

```bash
npm install @jamilservices/sb-core-event-module
```

#### Using pnpm

```bash
pnpm add @jamilservices/sb-core-event-module
```

#### Using yarn

```bash
yarn add @jamilservices/sb-core-event-module
```


### Usage

Here's how to use the `@jamilservices/sb-core-event-module` in your application:

#### Importing the Module

```javascript
import { EventModule } from '@jamilservices/sb-core-event-module';
```

#### Registering a Custom Event

```javascript
EventModule.eventRegister('CUSTOM_ALERT', () => {
    alert('Custom alert triggered!');
});
```

#### Triggering a Custom Event

```javascript
// Assuming you have a mechanism to trigger the event
triggerCustomEvent('CUSTOM_ALERT');
```

#### Unregistering a Custom Event

```javascript
EventModule.eventUnregister('CUSTOM_ALERT');
```

### API Documentation

The `EventModule` provides several key methods:

- `addEventToStore(data)`: Registers an event listener and stores its reference.
- `removeAllEventsFromStore(element)`: Removes all event listeners associated with the given element.
- `removeEventIdFromStore(data)`: Removes a specific event listener identified by its event ID.
- `eventRegister(name, fn)`: Registers a custom event type and its associated action.
- `eventUnregister(name)`: Unregisters a custom event type and removes its associated action.


### Contribution Guidelines

Interested in contributing? We welcome your contributions to enhance the backend capabilities of `@jamilservices/sb-core-event-module`. Please check our [Contribution Guidelines](CONTRIBUTING.md) for more details.

### License

`@jamilservices/sb-core-event-module` is available under the [MIT License](LICENSE) by [@jamilservicos](https://github.com/jamilservicos).

- You are free to modify and reuse the code.
- The original license must be included with copies of this software.
- We encourage linking back to this repository if you use a significant portion of the source code.
