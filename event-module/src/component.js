'use strict';
/**
 * This module is designed to manage custom event types and their associated actions within the application.
 * It allows for the registration and unregistration of event types and actions, providing a centralized way
 * to handle custom events.
 *
 * @module EventComponentModule
 */

/**
 * A dictionary object for storing custom event types. Event types are stored as keys in uppercase
 * to ensure case-insensitive matching.
 *
 * @private
 * @type {Object}
 */
const EventTypes = {};
/**
 * A dictionary object for storing actions associated with custom event types. Actions are functions
 * that are executed when the corresponding event type is triggered.
 *
 * @private
 * @type {Object}
 */
const EventActions = {};
/**
 * Registers a custom event type and associates an action (function) with it. If the event type already exists,
 * it logs an error and prevents duplication.
 *
 * @function eventRegister
 * @memberof module:EventComponentModule
 * @param {string} name - The name of the custom event type to register.
 * @param {Function} [fn=undefined] - The function or action to associate with the event type.
 * @returns {boolean} - Returns `true` if the event type and action were successfully registered, otherwise logs an error.
 */
const eventRegister = (name, fn = undefined) => {
    try {
        if(name && fn) {
            if(typeof EventTypes[name.toString().toUpperCase()] === "undefined") {
                EventTypes[name.toString().toUpperCase()] = name.toString();
                EventActions[EventTypes[name.toString().toUpperCase()]] = fn;
                return true;
            } else console.error("Event: "+ name +" already exists registered!");
        }
    } catch (err) {
        console.error(err);
    }
    return false;
};
/**
 * Unregisters a custom event type and its associated action. If the event type exists, it is removed
 * from the EventTypes dictionary and its associated action is removed from the EventActions dictionary.
 *
 * @function eventUnregister
 * @memberof module:EventComponentModule
 * @param {string} name - The name of the custom event type to unregister.
 * @returns {boolean} - Returns `true` if the event type was successfully unregistered, otherwise logs an error.
 */
const eventUnregister = (name) => {
    try {
        if(name) {
            const eventType = EventTypes[name.toString().toUpperCase()];
            if (eventType) {
                delete EventTypes[name.toString().toUpperCase()];
                if (EventActions[eventType]) delete EventActions[eventType];
                return true;
            }
        }
    } catch (err) {
        console.error(err);
    }
    return false;
};
/**
 * The EventComponentModule object, encapsulating functionalities for managing custom event types and actions.
 * This module provides a structured way to handle custom events, allowing for easy registration, execution,
 * and removal of event-related logic.
 *
 * @type {Object}
 */
const EventComponentModule = Object.freeze({
    eventRegister,
    eventUnregister,
    EventTypes,
    EventActions
});

export default EventComponentModule;