'use strict';

/**
 * @private
 * @typedef {Map<Element, Array>} EventStoreActionRef
 * @memberof module:EventStoreModule
 */
const ActionRefStore = new Map();
/**
 * @function addEventToStore
 * @memberof module:EventStoreModule
 * @param {Object} data - The object containing the necessary data to register the event.
 * @param {HTMLElement} data.element - The element to which the event listener will be added.
 * @param {string} data.type - The type of event to listen for.
 * @param {Function} data.handler - The handler function to execute when the event occurs.
 * @param {string} [data.nodeId] - An optional ID associated with the element.
 * @returns {boolean}
 */
const addEventToStore = (data) => {
    try {
        const {element, type, handler, nodeId} = data;
        if(element && type && handler) {
            if(!element.getAttribute('listener')) {
                element.setAttribute('listener', 'true');
            }
            if (!ActionRefStore.has(element)) ActionRefStore.set(element, []);
            const schema = {type, handler};
            if(nodeId) schema['nodeId'] = nodeId;
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
 * @function removeAllEventsFromStore
 * @memberof module:EventStoreModule
 * @param {HTMLElement} element - The element for which to remove all associated event handlers.
 */
const removeAllEventsFromStore = (element) => {
    try {
        if (ActionRefStore.has(element)) {
            const eventList = ActionRefStore.get(element);
            if(eventList.length >= 1) {
                for(let i = (eventList.length - 1); i >=0; i--) {
                    const item = eventList[i];
                    if(item) element.removeEventListener(item.type, item.handler, false);
                    if(i === 0) {
                        ActionRefStore.delete(element);
                        element.removeAttribute('listener');
                    }
                }
            }
        }
    } catch(err) {
        console.log("Unable to remove event from element:", element);
        console.error(err);
    }
};

/**
 * @private
 * @module EventStoreModule
 */
const EventStoreModule = Object.freeze({
    addEventToStore,
    removeAllEventsFromStore
});
export default EventStoreModule;