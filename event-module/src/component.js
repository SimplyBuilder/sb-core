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
 * @returns {boolean}
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
                return true;
            }
        }
    } catch (err) {
        console.error(err);
    }
    return false;
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