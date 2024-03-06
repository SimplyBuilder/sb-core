'use strict';
/**
 *
 * The DomStoreModule is a utility module designed for efficient management of DOM elements within JavaScript applications.
 * By providing a simple yet powerful interface for adding, retrieving, and removing elements from a centralized store,
 * it facilitates better organization and manipulation of DOM elements, especially in dynamic and complex web applications.
 * The module internally maintains a key-value store, where each key is a unique identifier associated with a specific DOM element,
 * allowing for quick access and operations on these elements.
 *
 * Primary functionalities include:
 * - `addElementToStore`: Registers a DOM element with a unique key within the store.
 * - `getElementFromStore`: Retrieves a DOM element based on its unique key.
 * - `removeElementFromStore`: Removes a DOM element from the store using its key. Depending on the operation mode,
 *   it can also manage the removal of associated event listeners, leveraging integration with an EventModule for comprehensive event management.
 *
 * This module plays a crucial role in enhancing code modularity, reusability, and maintainability by abstracting direct DOM manipulations
 * behind a consistent and intuitive API. It's designed to be used in conjunction with other modules like EventModule to provide a complete
 * solution for DOM and event management in web applications.
 *
 * @module DomStoreModule
 * @private
 */

/**
 * Represents a simple key-value store for DOM elements.
 * This allows elements to be referenced by a unique key,
 * facilitating easy retrieval and management within the application.
 *
 * @private
 * @typedef {Object.<string, HTMLElement>} DomStoreElementRef
 * @memberof module:DomStoreModule
 */
const ElementRefStore = {};
/**
 * Adds a DOM element to the store under a specified key.
 * If the key already exists, the new value will overwrite the existing one.
 *
 * @function addElementToStore
 * @memberof module:DomStoreModule
 * @param {Object} data - Contains the key-value pair to be added to the store.
 * @param {string} data.key - The unique identifier for the DOM element.
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
 * Retrieves a DOM element from the store by its key.
 *
 * @function getElementFromStore
 * @memberof module:DomStoreModule
 * @param {string} key - The unique identifier for the DOM element.
 * @returns {HTMLElement|undefined} - The DOM element associated with the key, or undefined if not found.
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
 * Removes a DOM element from the store by its key.
 * If mode is set to 1 and an EventModule is provided, this function will also remove all associated event listeners.
 *
 * @function removeElementFromStore
 * @memberof module:DomStoreModule
 * @param {Object} data - Contains parameters for the removal operation.
 * @param {string} data.key - The key of the element to be removed.
 * @param {number} [data.mode=1] - The removal mode. If set to 1, associated events will also be removed.
 * @param {Object} [data.EventModule] - An optional module for managing event listeners on the element.
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
 * Freezes the DomStoreModule to prevent further modifications,
 * ensuring the integrity and reliability of the element storage mechanism.
 *
 * @private
 * @type {Object}
 */
const DomStoreModule = Object.freeze({
   addElementToStore,
   getElementFromStore,
   removeElementFromStore
});
export default DomStoreModule;