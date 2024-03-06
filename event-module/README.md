# @jamilservices/sb-core-event-module

The `@jamilservices/sb-core-event-module` is a powerful and flexible library designed to simplify event management in your JavaScript applications. It provides functionalities to register, unregister, and manage custom events and their associated actions, making it an essential tool for developers looking to enhance event handling in their projects.

### Installation

To install the event module, run the following command in your project directory:

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

Interested in contributing? We welcome your contributions to enhance the backend capabilities of `@jamilservices/sb-core-event-module`. Please check our [Contribution Guidelines](/CONTRIBUTING.md) for more details.

### License

`@jamilservices/sb-core-event-module` is available under the [MIT License](/LICENSE) by [@jamilservicos](https://github.com/jamilservicos).

- You are free to modify and reuse the code.
- The original license must be included with copies of this software.
- We encourage linking back to this repository if you use a significant portion of the source code.
