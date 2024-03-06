/**
 * The DomModule provides a comprehensive interface for interacting with the DOM in a structured and efficient manner.
 * It encapsulates functionality for creating, manipulating, and managing HTML and SVG elements, including support for shadow DOM operations.
 * This module is designed to streamline the process of DOM element creation, retrieval, and manipulation with an emphasis on ease of use
 * and integration within larger web applications or libraries. The DomModule serves as a foundational building block for web development,
 * offering a robust set of tools for developers to craft dynamic and responsive user interfaces.
 *
 * @exports DomModule
 */
export const DomModule: Readonly<{
    /** The name of the EventModule. */
    name: string;
    /** The version of the EventModule. */
    version: string;
    /**
     * Registers or extends functionality based on provided data.
     * @param data An object containing extension or configuration data.
     */
    domModuleExtends: (data: object) => boolean;
    /**
     * Creates an HTML element based on provided specifications.
     * @param data An object defining the element to create and its properties.
     */
    createHTMLElement: (data: {
        parent?: HTMLElement | ShadowRoot;
        element: {
            type: string;
            attr?: Array<{name: string; value: string}>;
            dataset?: Array<{name: string; value: string}>;
            shadow?: string | object;
        };
    }) => HTMLElement | undefined;
    /**
     * Creates an SVG element based on provided specifications.
     * @param data An object defining the SVG element to create and its properties.
     */
    createSVGElement: (data: {
        parent?: HTMLElement | SVGElement;
        element: {
            type: string;
            attr?: Array<{name: string; value: string}>;
            attrNS?: Array<{name: string; value: string}>;
            dataset?: Array<{name: string; value: string}>;
        };
    }) => SVGElement | undefined;
    /**
     * Adds an element to the internal store with the specified key.
     * @param data An object containing the key and the DOM element to store.
     */
    addElementToStore: (data: {
        key: string;
        value: HTMLElement | SVGElement;
    }) => void;
    /**
     * Retrieves a DOM element from the internal store using the specified key.
     * @param key The key of the element to retrieve.
     */
    getElementFromStore: (key: string) => HTMLElement | SVGElement | undefined;
    /**
     * Removes a DOM element from the internal store and optionally from the DOM.
     * @param key The key of the element to remove.
     * @param mode Optional mode parameter to define removal behavior.
     */
    removeElementFromStore: (data: {
        key: string;
        mode?: number;
    }) => void;
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
    removeElement: (element: HTMLElement | SVGElement) => void;
}>;
