/**
 * Describes the structure and functionalities provided by the EventModule.
 * This module manages event handlers and custom events, allowing for efficient
 * event management in applications.
 *
 * @exports EventModule
 */
export const EventModule: Readonly<{
    /** The name of the EventModule. */
    name: string;
    /** The version of the EventModule. */
    version: string;
    /**
     * Adds an event listener to a DOM element and stores its reference for easy management.
     * @param data - An object containing details about the event to be registered.
     */
    addEventToStore: (data: {
        element: HTMLElement;
        type: string;
        handler: EventListenerOrEventListenerObject;
        nodeId?: string;
        eventId?: string;
    }) => boolean;
    /**
     * Removes all events associated with a specific DOM element.
     * @param element - The DOM element for which to remove all events.
     */
    removeAllEventsFromStore: (element: HTMLElement) => boolean;
    /**
     * Removes a specific event identified by an eventId from a DOM element.
     * @param data - An optional object containing the element and eventId to remove.
     */
    removeEventIdFromStore: (data?: {
        element: HTMLElement;
        eventId: string;
    }) => boolean;
    /**
     * Registers a custom event type with an associated handler function.
     * @param name - The name of the custom event type to register.
     * @param fn - The handler function associated with the event type.
     */
    eventRegister: (name: string, fn?: Function) => boolean;
    /**
     * Unregisters a custom event type and removes its associated handler.
     * @param name - The name of the custom event type to unregister.
     */
    eventUnregister: (name: string) => boolean;
    /** A record of registered custom event types. */
    EventTypes: Record<string, string>;
    /** A record of actions (functions) associated with registered custom event types. */
    EventActions: Record<string, Function>;
}>;
