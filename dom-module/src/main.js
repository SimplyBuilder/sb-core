'use strict';
/**
 * @module DomStore
 */

import store from "./store.js";

/**
 * @ignore
 * @private
 * @memberof module:DomStore
 * @type {Object}
 */
const internalStore = {
   app: {
      name: 'DomStoreLibName',
      version: 'DomStoreLibVersion'
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
 * @ignore
 * @private
 * @function validVersionSupport
 * @memberof module:DomStore
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
 * @function domStoreExtends
 * @memberof module:DomStore
 * @param {Object} data - The object containing information about the dependency to register.
 * @returns boolean
 */
const domStoreExtends = (data) => {
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
 * @alias module:DomStore.addElement
 * @param {Object} element - The object containing the key and the DOM element to store.
 * @param {string} element.key - The unique key under which to store the DOM element.
 * @param {HTMLElement} element.value - The actual DOM element to be added to the store.
 */
const addElement = store.addElement;
/**
 * @alias module:DomStore.getElement
 * @param {string} key - The unique key associated with the DOM element to retrieve.
 * @returns {HTMLElement|undefined} - The DOM element associated with the provided key, or `undefined` if no element is found.
 */
const getElement = store.getElement;
/**
 * @function removeElement
 * @memberof module:DomStore
 * @param {string} key - The key of the element to remove.
 * @param {number} [mode=1] - The mode of operation. Mode 1 interacts with EventModule, while mode 2 does not.
 */
const removeElement = (key, mode = 1) => {
   const {EventModule} = internalStore.register;
   if(mode === 1 && EventModule) return store.removeElement({key, mode, EventModule});
   return store.removeElement({key, mode: 2});
};
/**
 * @exports DomStore
 */
export const DomStore = Object.freeze({
   name, version,
   domStoreExtends,
   addElement,
   getElement,
   removeElement
});