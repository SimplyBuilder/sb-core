'use strict';

/**
 * Stores the custom event types.
 *
 * This object is used to keep track of all registered custom event types within the application.
 *
 * @private
 * @module EventTypes
 * @memberof module:EventComponentModule
 */
const EventTypes = {};
/**
 * Stores the actions associated with custom event types.
 *
 * This object is used to store functions or actions that are triggered when custom events occur.
 *
 * @private
 * @module EventActions
 * @memberof module:EventComponentModule
 */
const EventActions = {};
/**
 * Registers a custom event type and its associated action.
 *
 * This function allows for the dynamic registration of custom event types and their corresponding actions.
 * If the event type does not already exist, it's added to EventTypes, and the action is stored in EventActions.
 *
 * @function eventRegister
 * @memberof module:EventComponentModule
 * @param {string} name - The name of the custom event type to register.
 * @param {function} [fn=undefined] - The function or action to associate with the event type.
 */
const eventRegister = (name, fn = undefined) => {
    try {
        if(name && fn) {
            if(typeof EventTypes[name.toString().toUpperCase()] === "undefined") {
                EventTypes[name.toString().toUpperCase()] = name.toString();
                EventActions[EventTypes[name.toString().toUpperCase()]] = fn;
            }
        }
    } catch (err) {
        console.error(err);
    }
};
/**
 * Unregisters a custom event type and its associated action.
 *
 * This function removes a previously registered custom event type and its action from EventTypes and EventActions.
 *
 * @function eventUnregister
 * @memberof module:EventComponentModule
 * @param {string} name - The name of the custom event type to unregister.
 */
const eventUnregister = (name) => {
    try {
        if(name) {
            const eventType = EventTypes[name.toString().toUpperCase()];
            if (eventType) {
                delete EventTypes[name.toString().toUpperCase()];
                if (EventActions[eventType]) delete EventActions[eventType];
            }
        }
    } catch (err) {
        console.error(err);
    }
};
/**
 * The EventComponent module provides functionality for managing custom events and actions.
 *
 * It includes methods for registering and unregistering custom event types and their associated actions.
 * This module is intended for internal use within the application or package.
 *
 * @private
 * @module EventComponentModule
 */
const EventComponentModule = Object.freeze({
    eventRegister,
    eventUnregister,
    EventTypes,
    EventActions
});

export default EventComponentModule;