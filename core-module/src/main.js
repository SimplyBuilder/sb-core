'use strict';
/**
 * @module CoreModule
 */

import {EventModule} from "../../event-module/lib/main.min.js";
import {DomModule} from "../../dom-module/lib/main.min.js";

/**
 * @private
 * @ignore
 */
const {getElementFromStore, createFromStruct, removeElement, domModuleExtends} = DomModule;
/**
 * @private
 * @ignore
 */
domModuleExtends(EventModule);

/**
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
 * @private
 * @ignore
 */
const {name, version} = internalStore.app;

/**
 * @exports CoreModule
 */
export const CoreModule = Object.freeze({
    name, version,
    getElementFromStore, createFromStruct, removeElement
});