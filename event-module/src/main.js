'use strict';
/**
 * @module EventModule
 */

import store from "./store.js";
import component from "./component.js";

/**
 * Represents the internal storage structure for the module. It includes registration for dependencies
 * and version constraints for allowed dependencies.
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
 * @private
 * @ignore
 */
const {name, version} = internalStore.app;

/**
 * @exports EventModule
 */
export const EventModule = Object.freeze({
    name, version,
    ...component,
    ...store
});