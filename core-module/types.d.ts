/**
 * Type declaration for CoreModule, providing a comprehensive API for managing DOM elements.
 * It encapsulates functionalities for retrieving elements from a store, creating elements based on a structured definition,
 * and removing elements from the DOM. This module integrates with the EventModule and DomModule for extended functionalities.
 *
 * @exports CoreModule
 */
export const CoreModule: Readonly<{
    /** The name of the EventModule. */
    name: string;
    /** The version of the EventModule. */
    version: string;
    /**
     * Retrieves a DOM element from the internal store using the specified key.
     * @param key The key of the element to retrieve.
     */
    getElementFromStore: (key: string) => HTMLElement | SVGElement | undefined;
    /**
     * Creates and appends DOM elements based on a provided structure.
     * @param data An object defining the structure to create elements from and the parent element.
     */
    createFromStruct: (data: {
        struct: {
            element: string;
            attr?: Record<string, string>;
            children?: Array<object>;
            text?: string;
            html?: string;
            dataset?: Record<string, string>;
            shadow?: string | { mode: string; styles?: string };
        };
        parent?: HTMLElement | SVGElement;
    }) => boolean;
    /**
     * Removes an element from the DOM, including its children and associated events.
     * @param element The DOM element to remove.
     */
    removeElement: (element: HTMLElement | SVGAElement) => void;
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
}>;
