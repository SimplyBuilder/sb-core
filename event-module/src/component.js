'use strict';

/**
 * @private
 * @module EventTypes
 * @memberof module:EventComponentModule
 */
const EventTypes = {};
/**
 * @private
 * @module EventActions
 * @memberof module:EventComponentModule
 */
const EventActions = {};
/**
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