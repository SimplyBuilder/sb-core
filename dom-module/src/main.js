'use strict';

/**
 * Provides functionalities for DOM manipulation, including creating, managing,
 * and removing HTML and SVG elements. It integrates with event management for enhanced interaction.
 *
 * @module DomModule
 */

if(typeof window === "object" && typeof window['SimplyBuilderAttachShadow'] === "undefined") {
   const SimplyBuilderAttachShadowSymbol = Symbol("Simply Builder AttachShadow Freeze");
   const SimplyBuilderAttachShadowStore = {
      [SimplyBuilderAttachShadowSymbol]: HTMLElement.prototype.attachShadow
   };
   Object.freeze(SimplyBuilderAttachShadowStore);
   Object.defineProperty(window, 'SimplyBuilderAttachShadow', {
      enumerable: false,
      configurable: false,
      writable: false,
      value:  function () {
         return SimplyBuilderAttachShadowStore[SimplyBuilderAttachShadowSymbol].apply(this, arguments);
      }
   });
   Object.freeze(window.SimplyBuilderAttachShadow);
   Object.defineProperty(Element.prototype, 'attachShadow', {
      enumerable: false,
      configurable: false,
      writable: false,
      value:  function () {
         return SimplyBuilderAttachShadowStore[SimplyBuilderAttachShadowSymbol].apply(this, arguments);
      }
   });
   Object.freeze(Element.prototype.attachShadow);
   Object.defineProperty(HTMLElement.prototype, 'attachShadow', {
      enumerable: false,
      configurable: false,
      writable: false,
      value:  function () {
         return SimplyBuilderAttachShadowStore[SimplyBuilderAttachShadowSymbol].apply(this, arguments);
      }
   });
   Object.freeze(HTMLElement.prototype.attachShadow);
}

import store from "./store.js";
import component from "./component/main.js";

/**
 * Extracts utility functions from the store module for adding and getting elements.
 *
 * @private
 * @ignore
 */
const {addElementToStore, getElementFromStore} = store;
/**
 * Holds the application's metadata and registers modules for version compatibility.
 *
 * @ignore
 * @private
 * @memberof module:DomModule
 * @type {Object}
 */
const internalStore = {
   app: {
      name: 'DomModuleLibName',
      version: 'DomModuleLibVersion'
   },
   register: {},
   allow: {
      EventModule: {
         major: 1
      }
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
 * Verifies if a module's version is supported by checking against specified version constraints.
 *
 * @function validVersionSupport
 * @memberof module:DomModule
 * @param {Object} data - Contains the name and version of the module.
 * @returns {boolean} - True if the version is supported, otherwise false.
 */
const validVersionSupport = (data) => {
   const {name, version} = data;
   if (internalStore.allow[name.toString()] && version) {
      const {major, minor, patch} = internalStore.allow[name.toString()];
      const arrVersion = version.split(".");
      if (arrVersion.length >= 1) {
         return !(((major && arrVersion[0]) && (major > Number(arrVersion[0])))
             || ((minor && arrVersion[1]) && (minor > Number(arrVersion[1])))
             || ((patch && arrVersion[2]) && (patch > Number(arrVersion[2]))));

      }
   }
   return false;
};
/**
 * Registers a module with the DomModule, allowing for extended functionality, after verifying version compatibility.
 *
 * @function domModuleExtends
 * @memberof module:DomModule
 * @param {Object} data - Contains information for the module to be registered.
 * @returns {boolean} - True if registration is successful, otherwise false.
 */
const domModuleExtends = (data) => {
   try {
      const {name} = data;
      if (validVersionSupport(data)) {
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
 * Removes an element from storage, with optional interaction with the EventModule.
 *
 * @function removeElementFromStore
 * @memberof module:DomModule
 * @param {string} key - Unique identifier for the element.
 * @param {number} [mode=1] - Operation mode; interacts with EventModule if mode is 1.
 */
const removeElementFromStore = (key, mode = 1) => {
   const {EventModule} = internalStore.register;
   if (mode === 1 && EventModule) return store.removeElementFromStore({key, mode, EventModule});
   return store.removeElementFromStore({key, mode: 2});
};
/**
 * Creates an HTML element based on specified data, including attributes and event listeners.
 *
 * @function createHTMLElement
 * @memberof module:DomModule
 * @param {Object} data - Data needed to create the HTML element.
 * @returns {HTMLElement|undefined} - The created HTML element, or undefined on failure.
 */
const createHTMLElement = (data = {}) => {
   // noinspection JSCheckFunctionSignatures
   return component.createHTMLElement({
      ...data,
      DomStore: {addElementToStore, getElementFromStore}
   });
};
/**
 * Creates an SVG element based on specified data, including attributes and event listeners.
 *
 * @function createSVGElement
 * @memberof module:DomModule
 * @param {Object} data - Data needed to create the SVG element.
 * @returns {SVGElement|undefined} - The created SVG element, or undefined on failure.
 */
const createSVGElement = (data = {}) => {
   // noinspection JSCheckFunctionSignatures
   return component.createSVGElement({
      ...data,
      DomStore: {addElementToStore, getElementFromStore}
   });
};
/**
 * Dynamically creates child elements for a given parent element, based on a structural definition.
 *
 * @function createChildren
 * @memberof module:DomModule
 * @param {Object} data - Contains the parent element and structure definition for children.
 */
const createChildren = (data) => {
   const {struct, element} = data;
   if (struct.children) {
      const startFromLast = struct.children.toReversed();
      for (let i = (startFromLast.length - 1); i >= 0; i--) {
         const childItem = startFromLast[i];
         if (childItem) createFromStruct({struct: childItem, parent: element});
      }
   }
};
/**
 * Selects the appropriate function for element creation based on the specified type.
 *
 * @function TypeSelect
 * @memberof module:DomModule
 * @param {string} type - The type of element to create ('html' or 'svg').
 * @returns {function|undefined} - The function to create the element, or undefined on error.
 */
const TypeSelect = (type) => {
   try {
      if (type && type === "svg") return createSVGElement;
      return createHTMLElement;
   } catch (err) {
      console.error(err);
      return undefined;
   }
};
/**
 * Associates event listeners with a newly created element, if specified in its structure.
 *
 * @function createEventElement
 * @memberof module:DomModule
 * @param {Object} data - Contains the element's structure and the element itself.
 */
const createEventElement = (data) => {
   const {struct = {}, element} = data;
   const {EventModule} = internalStore.register;
   if ((struct.event?.action && struct.event?.type)
       && EventModule?.EventActions[struct.event.action.toString()]) {
      const eventStoreSchema = {
         element,
         type: struct.event.type.toString(),
         handler: EventModule?.EventActions[struct.event.action.toString()]
      };
      if (struct.event.node) eventStoreSchema['nodeId'] = struct.event.node;
      EventModule?.addEventToStore(eventStoreSchema);
   }
};
/**
 * Constructs an element (and optionally its children) based on a structured definition.
 *
 * @function createFromStruct
 * @memberof module:DomModule
 * @param {Object} data - Contains the structure definition and the parent element.
 * @returns {boolean} - True on success, false on failure.
 */
const createFromStruct = (data) => {
   try {
      if (typeof data === "object") {
         const {struct, parent = document.body} = data;
         if (!struct?.element) return false;
         let typeStruct = "html";
         if (struct.type && struct.type.toString().trim().length >= 1) typeStruct = struct.type.toString().trim();
         const el = TypeSelect(typeStruct.toLowerCase())({
            parent,
            shadow: struct['shadow'],
            element: {
               type: struct.element,
               attr: Object.entries(struct.attr || {}).map(([name, value]) => ({name, value})),
               attrNS: Object.entries(struct.attrNS || {}).map(([name, value]) => ({name, value})),
               dataset: Object.entries(struct.dataset || {}).map(([name, value]) => ({name, value}))
            }
         });

         if (struct["text"]) el.textContent = struct["text"];
         if (struct["html"]) el.innerHTML = struct["html"];
         createEventElement({struct, element: el});
         createChildren({struct, element: el});
         return true;
      }
   } catch (err) {
      console.error(err);
   }
   return false;
};
/**
 * Attempts to remove a DOM element from storage or to detach all associated event listeners.
 * This function checks if the provided element has a dataset indicating it is stored in the DOM store.
 * If so, it attempts to remove the element from the store. If the element does not have a stored dataset state
 * but is registered with event listeners via the EventModule, it attempts to remove all associated event listeners.
 * This function is primarily intended for internal use to ensure proper cleanup of elements and their event listeners.
 *
 * @function removeElementFromStoreOrEvents
 * @memberof module:DomModule
 * @param {HTMLElement|SVGAElement} element - The element to be removed from the store or to have its events detached.
 * @returns {boolean} - Returns true if the element is successfully removed from the store or if all associated
 * event listeners are detached; otherwise, returns false.
 * @private
 */
const removeElementFromStoreOrEvents = (element) => {
   try {
      const {EventModule = {}} = internalStore.register;
      if(element.dataset?.state) {
         removeElementFromStore(element.dataset.state);
         return true;
      }
      if (typeof EventModule.removeAllEventsFromStore === "function") {
         EventModule.removeAllEventsFromStore(element);
         return true;
      }
   } catch {}
   return false;
};
/**
 * Removes an element and its associated events from storage or the DOM.
 *
 * @function removeElement
 * @memberof module:DomModule
 * @param {HTMLElement|SVGAElement} element - The element to remove.
 */
const removeElement = (element) => {
   removeElementFromStoreOrEvents(element);
   const elements = element.querySelectorAll('[listener="true"]');
   if (elements.length >= 1) {
      for (let i = (elements.length - 1); i >= 0; i--) {
         const item = elements[i];
         if (item) removeElementFromStoreOrEvents(item);
      }
   }
   element.remove();
};
/**
 * Freezes the module object to prevent further modifications, ensuring its integrity.
 *
 * @exports DomModule
 */
export const DomModule = Object.freeze({
   name, version,
   domModuleExtends,
   createHTMLElement, createSVGElement,
   addElementToStore, getElementFromStore,
   removeElementFromStore,
   createFromStruct, removeElement
});