'use strict';
/**
 * Manages the storage and lifecycle of event listeners attached to DOM elements.
 * This module provides functionalities to add, clear, and remove event listeners
 * in a centralized manner, allowing for efficient event handling and cleanup.
 *
 * @module EventStoreModule
 */

/**
 * Stores references to DOM elements along with their associated event handlers.
 * This Map object serves as a registry for event listeners, facilitating the addition,
 * removal, and management of events for specific elements.
 *
 * @private
 * @typedef {Map<Element, Array>} EventStoreActionRef
 */
const ActionRefStore = new Map();

/**
 * Clears the event listeners associated with a given DOM element.
 * Optionally forces the removal of the element from the ActionRefStore
 * and removes the 'listener' attribute from the element.
 *
 * @function clearEvent
 * @memberof module:EventStoreModule
 * @param {HTMLElement} element - The DOM element from which to clear events.
 * @param {boolean} force - Whether to forcibly clear the event, ignoring the length check.
 * @returns {boolean} - Returns true upon successful removal of the event.
 */
const clearEvent = (element, force = false) => {
    if(force || (ActionRefStore.get(element).length === 0)) {
        ActionRefStore.delete(element);
        element.removeAttribute('listener');
    }
    return true;
};
/**
 * Registers an event listener for a specified DOM element and stores its reference.
 * Allows associating additional metadata, such as eventId or nodeId, with the event.
 *
 * @function addEventToStore
 * @memberof module:EventStoreModule
 * @param {Object} data - Object containing event registration details.
 * @returns {boolean} - Returns true if the event was successfully registered.
 */
const addEventToStore = (data) => {
    try {
        const {element, type, handler, eventId, nodeId} = data;
        if(element && type && handler) {
            if(!element.getAttribute('listener')) {
                element.setAttribute('listener', 'true');
            }
            if (!ActionRefStore.has(element)) ActionRefStore.set(element, []);
            const schema = {type, handler};
            if(nodeId) schema['nodeId'] = nodeId;
            if(eventId) schema['eventId'] = eventId;
            ActionRefStore.get(element).push(schema);
            element.addEventListener(type, handler, false);
            return true;
        }
    } catch(err) {
        console.log("Unable to register event:", data);
        console.error(err);
    }
    return false;
};

/**
 * Removes all event listeners associated with a given DOM element.
 * Utilizes the ActionRefStore to identify and remove each registered event listener,
 * then optionally clears the element from the store.
 *
 * @function removeAllEventsFromStore
 * @memberof module:EventStoreModule
 * @param {HTMLElement} element - The DOM element for which to remove all events.
 * @returns {boolean} - Returns true upon successful removal of all events.
 */
const removeAllEventsFromStore = (element) => {
    try {
        if (ActionRefStore.has(element)) {
            const eventList = ActionRefStore.get(element);
            if(eventList.length >= 1) {
                for(let i = (eventList.length - 1); i >=0; i--) {
                    const item = eventList[i];
                    if(item) {
                        element.removeEventListener(item.type, item.handler, false);
                    }
                    if(i === 0) return clearEvent(element, true);
                }
            }
        }
    } catch(err) {
        console.log("Unable to remove event from element:", element);
        console.error(err);
    }
    return false;
};
/**
 * Removes a specific event listener identified by its eventId from a DOM element.
 * If the eventId is found within the stored references, it is removed and the element
 * is optionally cleared from the ActionRefStore based on remaining event listeners.
 *
 * @function removeEventIdFromStore
 * @memberof module:EventStoreModule
 * @param {Object} data - Object containing the element and eventId to remove.
 * @returns {boolean} - Returns true if the event was successfully removed.
 */
const removeEventIdFromStore = (data = {}) => {
    const {element, eventId} = data;
    try {
        if((typeof element === "undefined") || (typeof eventId === "undefined")) {
            // noinspection ExceptionCaughtLocallyJS
            throw new Error("removeEventIdFromStore needs EventId and element.");
        }
        if (ActionRefStore.has(element)) {
            const eventList = ActionRefStore.get(element);
            if(eventList.length >= 1) {
                const indexToRemove = eventList.findIndex(item => item.eventId === eventId.toString());
                if (indexToRemove !== -1) {
                    eventList.splice(indexToRemove, 1);
                    clearEvent(element);
                    return true;
                } else console.info("Event Id: "+ eventId +", not exist to element.");
            } else clearEvent(element);
        } else console.info("No events found for the element. request eventId: "+ eventId);
    } catch(err) {
        console.log("Unable to remove event from element:", element);
        console.error(err);
    }
    return false;
};

/**
 * The EventStoreModule object, encapsulating functionalities for event listener management.
 * This module facilitates the centralized management of event listeners, allowing for
 * efficient addition, removal, and cleanup of events attached to DOM elements.
 *
 * @private
 * @type {Object}
 */
const EventStoreModule = Object.freeze({
    addEventToStore,
    removeAllEventsFromStore,
    removeEventIdFromStore
});
export default EventStoreModule;