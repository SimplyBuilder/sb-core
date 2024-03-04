'use strict';
/**
 * @module DomModule
 */

import store from "./store.js";
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
 * @ignore
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
 * @memberof module:DomModule
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
 * @function removeElementFromStore
 * @memberof module:DomModule
 * @param {string} key - The key of the element to remove.
 * @param {number} [mode=1] - The mode of operation. Mode 1 interacts with EventModule, while mode 2 does not.
 */
const removeElementFromStore = (key, mode = 1) => {
   const {EventModule} = internalStore.register;
   if(mode === 1 && EventModule) return store.removeElementFromStore({key, mode, EventModule});
   return store.removeElementFromStore({key, mode: 2});
};
/**
 * @exports DomModule
 */
export const DomModule = Object.freeze({
   name, version,
   domStoreExtends,
   addElementToStore, getElementFromStore,
   removeElementFromStore
});