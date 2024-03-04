'use strict';
/**
 * @module DomModule
 */

import store from "./store.js";
import component from "./component/main.js";
/**
 * @private
 * @ignore
 */
const {addElementToStore, getElementFromStore} = store;
/**
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
 * @private
 * @ignore
 */
const {name, version} = internalStore.app;

/**
 * @private
 * @function validVersionSupport
 * @memberof module:DomModule
 * @param {Object} data - The object containing the name and version of the dependency.
 * @param {string} data.name - The name of the dependency.
 * @param {string} data.version - The version string of the dependency.
 * @return {boolean} - Returns true if the version is supported, false otherwise.
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
 * @function domModuleExtends
 * @memberof module:DomModule
 * @param {Object} data - The object containing information about the dependency to register.
 * @returns boolean
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
 * @function removeElementFromStore
 * @memberof module:DomModule
 * @param {string} key - The key of the element to remove.
 * @param {number} [mode=1] - The mode of operation. Mode 1 interacts with EventModule, while mode 2 does not.
 */
const removeElementFromStore = (key, mode = 1) => {
   const {EventModule} = internalStore.register;
   if (mode === 1 && EventModule) return store.removeElementFromStore({key, mode, EventModule});
   return store.removeElementFromStore({key, mode: 2});
};
/**
 * @function createHTMLElement
 * @memberof module:DomModule
 * @param data
 * @returns {HTMLElement|undefined}
 */
const createHTMLElement = (data) => {
   return component.createHTMLElement({...data, DomStore: {addElementToStore, getElementFromStore}});
};
/**
 * @function createSVGElement
 * @memberof module:DomModule
 * @param data
 * @returns {SVGElement|undefined}
 */
const createSVGElement = (data) => {
   return component.createSVGElement({...data, DomStore: {addElementToStore, getElementFromStore}});
};
/**
* @private
* @function createChildren
* @memberof module:DomModule
* @param {Object} data
* @param {Object} data.struct
* @param {HTMLElement} data.element
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
* @private
* @function TypeSelect
* @memberof module:DomModule
* @param {string} type
* @returns {function|undefined}
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
* @private
* @function createEventElement
* @memberof module:DomModule
* @param {Object} data.struct
* @param {HTMLElement} data.element
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
* @function createFromStruct
* @memberof module:DomModule
* @param {Object} data
* @param {Object} data.struct
* @param {HTMLElement} [data.parent=document.body]
* @returns {boolean}
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
 * @exports DomModule
 */
export const DomModule = Object.freeze({
   name, version,
   domModuleExtends,
   createHTMLElement, createSVGElement,
   addElementToStore, getElementFromStore,
   removeElementFromStore,
   createFromStruct
});