'use strict';
/**
 * Defines a module that encapsulates event handling functionalities, integrating components and stores for comprehensive event management.
 * This module serves as a centralized point for managing events within an application, leveraging specific store and component functionalities.
 *
 * @module EventModule
 */

import store from "./store.js";
import component from "./component.js";

/**
 * Internal configuration for the EventModule, specifying the library's name and version.
 * This object is not exposed outside the module, serving only for internal reference and configuration purposes.
 *
 * @ignore
 * @private
 * @memberof module:EventModule
 * @type {Object}
 */
const internalStore = {
    app: {
        name: 'EventModuleLibName',
        version: 'EventModuleLibVersion'
    }
};
/**
 * Destructures the name and version from the internalStore object for use in the module's public API.
 * These properties identify the module and its version, potentially useful for debugging or module identification purposes.
 *
 * @private
 * @ignore
 */
const {name, version} = internalStore.app;

/**
 * Combines and exports functionalities from both `store` and `component`, alongside the module's metadata (name and version).
 * By freezing the EventModule object, it ensures that its properties cannot be modified at runtime, providing a stable API.
 *
 * The EventModule essentially serves as a facade, abstracting away the complexities of individual components and stores,
 * and presenting a unified interface for event management.
 *
 * @exports EventModule
 * @type {Object}
 */
export const EventModule = Object.freeze({
    name, version,
    ...component,
    ...store
});