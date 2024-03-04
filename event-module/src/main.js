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
    },
    register: {},
    allow: {
        DomStore: {
            major: 1
        }
    }
};
/**
 * @private
 * @ignore
 */
const {name, version} = internalStore.app;
/**
 * Validates if a dependency meets the version constraints specified in the internal store.
 * It checks major, minor, and patch versions to ensure compatibility.
 *
 * @ignore
 * @private
 * @function validVersionSupport
 * @memberof module:EventModule
 * @param {Object} data - The object containing the name and version of the dependency.
 * @param {string} data.name - The name of the dependency.
 * @param {string} data.version - The version string of the dependency.
 * @return {boolean} - Returns true if the version is supported, false otherwise.
 */
const validVersionSupport = (data) => {
    const {name, version} = data;
    if(internalStore.allow[name.toString()] && version) {
        const {major, minor, patch} = internalStore.allow[name.toString()];
        const arrVersion = version.split(".");
        if(arrVersion.length >= 1) {
            return !(((major && arrVersion[0]) && (major > Number(arrVersion[0])))
                || ((minor && arrVersion[1]) && (minor > Number(arrVersion[1])))
                || ((patch && arrVersion[2]) && (patch > Number(arrVersion[2]))));

        }
    }
    return false;
};
/**
 * Extends the EventModule with additional functionality by registering a dependency if it meets the version constraints.
 * This allows integrating external modules or plugins into the EventModule environment.
 *
 * @function eventModuleExtends
 * @memberof module:EventModule
 * @param {Object} data - The object containing information about the dependency to register.
 * @returns boolean
 */
const eventModuleExtends = (data) => {
    try {
        const {name} = data;
        if(validVersionSupport(data)) {
            internalStore.register[name.toString()] = data;
            return true;
        }
    } catch (err) {
        console.log("Unable to register dependency");
        console.error(err);
    }
    return false;
};
/**
 * @alias module:EventModule.registerEventStore
 */
const registerEventStore = store.registerEventStore;
/**
 * Removes all event handlers associated with a given element from the EventModule and then removes the element from the DOM.
 *
 * This function removes all event listeners that were previously registered for the element
 * and deletes its reference from the ActionRefStore. It also removes the element from the DOM.
 *
 * @function removeEventStore
 * @memberof module:EventModule
 * @param {HTMLElement} element - The element for which to remove all associated event handlers.
 */
const removeEventStore = (element) => {
    const {DomStore} = internalStore.register;
    if(DomStore) return store.removeEventStore(element, DomStore);
    return store.removeEventStore(element);
};
/**
 * @exports EventModule
 */
export const EventModule = Object.freeze({
    name, version,
    eventModuleExtends,
    ...component,
    registerEventStore, removeEventStore
});