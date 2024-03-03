'use strict';

/**
 * Represents a simple object for storing references to DOM elements.
 * This internal storage mechanism allows for efficient tracking and management
 * of DOM elements by associating them with unique keys.
 *
 * @private
 * @typedef {Object} DomStoreElementRef
 * @memberof module:DomStoreModule
 */
const ElementRefStore = {};
/**
 * Adds a DOM element to the ElementRefStore with the specified key.
 * This function allows for the association of a DOM element with a unique key
 * within the store, facilitating later retrieval or manipulation of the element.
 *
 * @function addElement
 * @memberof module:DomStoreModule
 * @param {Object} element - The object containing the key and the DOM element to store.
 * @param {string} element.key - The key under which to store the element.
 * @param {HTMLElement} element.value - The DOM element to be stored.
 */
const addElement = (element) => {
   try {
      const {key, value} = element;
      if(key && value) ElementRefStore[key.toString()] = value;
   } catch (err) {
      console.log("Unable to add element:", element);
      console.error(err);
   }
};
/**
 * Retrieves a DOM element from the ElementRefStore using the specified key.
 * This function provides access to a previously stored DOM element by using its associated key,
 * enabling easy manipulation or examination of the element.
 *
 * @function getElement
 * @memberof module:DomStoreModule
 * @param {string} key - The key of the element to retrieve.
 * @returns {HTMLElement|undefined} - The retrieved DOM element or undefined if not found or on error.
 */
const getElement = (key) => {
   try {
      if(key) return ElementRefStore[key];
   } catch (err) {
      console.log("Unable to get element from key:", key);
      console.error(err);
   }
   return undefined;
};
/**
 * Removes a DOM element from the ElementRefStore and optionally removes associated events.
 * This function facilitates the removal of a DOM element from the store based on its key.
 * It also supports the removal of any events associated with the element if specified.
 *
 * @function removeElement
 * @memberof module:DomStoreModule
 * @param {Object} data - The data object containing parameters for element removal.
 * @param {string} data.key - The key of the element to be removed.
 * @param {number} [data.mode=1] - The mode of removal, determining if associated events should also be removed.
 * @param {Object} data.EventStore - The event store object for managing associated event listeners.
 */
const removeElement = (data = {}) => {
   const{key, mode = 1, EventStore} = data;
   try {
      const modeTypes = {
         1: (key) => EventStore['removeEventStore'](ElementRefStore[key]),
         2: (key) => delete ElementRefStore[key]
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
 * The DomStore module provides functionality for managing references to DOM elements.
 * It includes methods for adding, retrieving, and removing elements from an internal store,
 * facilitating efficient DOM manipulation and event management. This module is intended for
 * internal use within applications or packages that require direct DOM manipulation and event handling.
 *
 * @private
 * @module DomStoreModule
 */
const DomStoreModule = Object.freeze({
   name: 'DomStoreLibName',
   version: 'DomStoreLibVersion',
   addElement,
   getElement,
   removeElement
});
export default DomStoreModule;