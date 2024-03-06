'use strict';

/**
 * The CoreModule serves as the central piece integrating both the EventModule and DomModule.
 * It provides a streamlined interface to work with DOM elements and events,
 * simplifying the process of creating, managing, and manipulating DOM elements within applications.
 *
 * @module CoreModule
 * @private
 */

import {EventModule} from "../../event-module/lib/main.min.js";
import {DomModule} from "../../dom-module/lib/main.min.js";

/**
 * Destructures and imports utility functions from the DomModule. These functions include
 * getElementFromStore, createFromStruct, and removeElement, which are essential for DOM manipulation.
 *
 * @private
 * @ignore
 */
const {getElementFromStore, createFromStruct, removeElement, domModuleExtends} = DomModule;
/**
 * Extends the DomModule with the EventModule, linking event handling capabilities directly
 * with DOM manipulation functionalities. This integration enables the CoreModule to offer
 * a cohesive API for managing both elements and their events.
 *
 * @private
 * @ignore
 */
domModuleExtends(EventModule);

/**
 * Defines the internal state of the CoreModule, including metadata like the module's name and version.
 * This internal state is not exposed as part of the public API but is crucial for the module's functioning.
 *
 * @ignore
 * @private
 * @memberof module:CoreModule
 * @type {Object}
 */
const internalStore = {
    app: {
        name: 'CoreModuleLibName',
        version: 'CoreModuleLibVersion'
    }
};

/**
 * Destructures the name and version from the internal store to be used within the module.
 * These values might be used for logging, debugging, or within the module's public API.
 *
 * @private
 * @ignore
 */
const {name, version} = internalStore.app;

/**
 * Freezes the module object to prevent further modifications, ensuring its integrity.
 *
 * @exports DomModule
 */
export const CoreModule = Object.freeze({
    name, version,
    getElementFromStore, createFromStruct, removeElement
});