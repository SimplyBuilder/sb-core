'use strict';

/**
 * @private
 * @typedef {Object} DomStoreElementRef
 * @memberof module:DomStoreModule
 */
const ElementRefStore = {};
/**
 * @function addElementToStore
 * @memberof module:DomStoreModule
 * @param {Object} data - The object containing the key and the DOM element to store.
 * @param {string} data.key - The key under which to store the element.
 * @param {HTMLElement} data.value - The DOM element to be stored.
 */
const addElementToStore = (data) => {
   try {
      const {key, value} = data;
      if(key && value) ElementRefStore[key.toString()] = value;
   } catch (err) {
      console.log("Unable to add element:", data);
      console.error(err);
   }
};
/**
 * @function getElementFromStore
 * @memberof module:DomStoreModule
 * @param {string} key - The key of the element to retrieve.
 * @returns {HTMLElement|undefined} - The retrieved DOM element or undefined if not found or on error.
 */
const getElementFromStore = (key) => {
   try {
      if(key) return ElementRefStore[key];
   } catch (err) {
      console.log("Unable to get element from key:", key);
      console.error(err);
   }
   return undefined;
};
/**
 * @function removeElementFromStore
 * @memberof module:DomStoreModule
 * @param {Object} data - The data object containing parameters for element removal.
 * @param {string} data.key - The key of the element to be removed.
 * @param {number} [data.mode=1] - The mode of removal, determining if associated events should also be removed.
 * @param {Object} data.EventModule - The event store object for managing associated event listeners.
 */
const removeElementFromStore = (data = {}) => {
   const{key, mode = 1, EventModule= {}} = data;
   try {
      const modeTypes = {
         1: (key) => {
            if(typeof EventModule.removeAllEventsFromStore === "function") EventModule.removeAllEventsFromStore(ElementRefStore[key]);
            delete ElementRefStore[key];
         },
         2: (key) => {
            delete ElementRefStore[key]
         }
      };
      if(key && Number(mode) >= 1 && modeTypes[Number(mode)]) {
         modeTypes[Number(mode)](key);
      }
   } catch (err) {
      console.log("Unable to remove element from key:", key);
      console.error(err);
   }
};

/**
 * @private
 * @module DomStoreModule
 */
const DomStoreModule = Object.freeze({
   addElementToStore,
   getElementFromStore,
   removeElementFromStore
});
export default DomStoreModule;