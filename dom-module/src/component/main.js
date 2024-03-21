'use strict';
/**
 * The DomComponentModule offers utility functions for creating and managing HTML and SVG elements
 * dynamically within a web application. This module simplifies the process of element creation,
 * attribute assignment, dataset management, and shadow DOM manipulation, providing a streamlined
 * way to generate and manage complex DOM structures programmatically.
 *
 * Contains methods for creating and managing HTML and SVG elements:
 * - `createHTMLElement`: Dynamically creates and appends an HTML element to the specified parent element.
 * - `createSVGElement`: Dynamically creates and appends an SVG element to the specified parent SVG or HTML element.
 * The module ensures that all created elements and their configurations are handled consistently, supporting a wide range of web development scenarios.
 *
 *
 * @module DomComponentModule
 * @private
 */

import {setAttr, setAttrNS} from "./attribute.js";
import {setData} from "./dataset.js";

/**
 * A unique symbol used as a key to store the original `attachShadow` method in a secure manner.
 * This symbol ensures that the reference is not accessible through direct property enumeration
 * or accidental overrides.
 *
 * @memberof module:DomComponentModule
 * @ignore
 * @private
 * @type {symbol}
 */
const SimplyBuilderAttachShadowSymbol = Symbol("Simply Builder AttachShadow Freeze");
/**
 * A temporary Frame element used to access a clean reference to `HTMLElement.prototype.attachShadow`.
 * The Frame is appended to the document's body, thus it creates an isolated environment
 * to obtain the original method untouched by any potential modifications in the main document context.
 * After obtaining the method, the Frame is removed to clean up the environment.
 *
 * @memberof module:DomComponentModule
 * @ignore
 * @private
 */
const temporaryFrame = document.createElement("Frame");
temporaryFrame.setAttribute('style', 'display:none!important');
document.body.appendChild(temporaryFrame);
/**
 * Stores the original `attachShadow` method retrieved from the Frame's content window.
 * This method is then frozen to prevent any modifications, ensuring its integrity.
 * The storage object uses the `SimplyBuilderAttachShadowSymbol` as a key for secure access.
 *
 * @memberof module:DomComponentModule
 * @ignore
 * @private
 */
const SimplyBuilderAttachShadowStore = {
    [SimplyBuilderAttachShadowSymbol]: temporaryFrame.contentWindow.HTMLElement.prototype.attachShadow
};
/**
 * Immediately freezes the `SimplyBuilderAttachShadowStore` object to ensure the stored
 * `attachShadow` method cannot be modified or deleted, providing an immutable reference
 * for the duration of the application lifecycle.
 */
Object.freeze(SimplyBuilderAttachShadowStore);
/**
 * Removes the temporary iframe from the DOM to clean up and prevent any memory leaks.
 * This step is crucial to ensure that the Frame does not persist in the DOM tree,
 * which could lead to unnecessary resource usage or potential security concerns.
 */
temporaryFrame.parentNode.removeChild(temporaryFrame);

/**
 * Builds an SVG element with the specified type and attributes. It applies both standard and namespace-specific attributes, as well as custom data attributes, facilitating the creation of SVG elements that are fully configured and ready for insertion into the DOM.
 *
 * @function buildElementNS
 * @memberof module:DomComponentModule
 * @param {Object} data - The configuration object for creating the SVG element.
 * @param {string} data.type - The tag name of the SVG element to be created (e.g., 'svg', 'circle').
 * @param {Array<Object>} [data.attr] - Optional array of attribute objects for standard attributes.
 * @param {Array<Object>} [data.attrNS] - Optional array of attribute objects for namespace-specific attributes.
 * @param {Array<Object>} [data.dataset] - Optional array of dataset objects to add custom data attributes.
 * @param {Object} data.DomStore - The DomStore module instance for managing element references.
 * @returns {undefined|SVGElement} - The newly created SVG element, or undefined if an error occurs.
 */
const buildElementNS = (data = {}) => {
    try {
        const {dataset, attrNS, attr, type, DomStore = {}} = data;
        const element = document.createElementNS("http://www.w3.org/2000/svg", type);
        if (attr?.length) setAttr({element, attrs: attr});
        if (attrNS?.length) setAttrNS({element, attrs: attrNS});
        if (dataset?.length) setData({element, dataset, DomStore});
        return element;
    } catch (err) {
        console.error(err);
    }
    return undefined;
};
/**
 * Builds a standard HTML element with the specified type and attributes. It sets attributes and data attributes, enabling the creation of customized HTML elements for dynamic content generation and manipulation.
 *
 * @function buildElement
 * @memberof module:DomComponentModule
 * @param {Object} data - The configuration object for creating the HTML element.
 * @param {string} data.type - The tag name of the HTML element to be created (e.g., 'div', 'span').
 * @param {Array<Object>} [data.attr] - Optional array of attribute objects.
 * @param {Array<Object>} [data.dataset] - Optional array of dataset objects for adding custom data attributes.
 * @param {Object} data.DomStore - The DomStore module instance for element reference management.
 * @returns {undefined|HTMLElement} - The newly created HTML element, or undefined if an error occurs.
 */
const buildElement = (data = {}) => {
    try {
        const {dataset, attr, type, DomStore = {}} = data;
        const element = document.createElement(type);
        if (attr?.length) setAttr({element, attrs: attr});
        if (dataset?.length) if(typeof setData({element, dataset, DomStore}) === "object") return undefined;
        return element;
    } catch (err) {
        console.error(err);
    }
    return undefined;
};
/**
 * Provides a secure wrapper around the original `attachShadow` method, allowing elements
 * to create shadow DOM trees using the unmodified, original method. This function takes
 * an element and an optional mode ('open' or 'closed') and applies the `attachShadow` method
 * to it using the stored reference.
 *
 * @function SimplyBuilderAttachShadow
 * @memberof module:DomComponentModule
 * @param {Object} data - The data object containing parameters for shadow DOM attachment.
 * @param {HTMLElement} data.element - The DOM element to attach the shadow root to.
 * @param {string} [data.mode='closed'] - The mode for the shadow DOM ('open' or 'closed'). Default is 'closed'.
 * @returns {ShadowRoot} The newly created shadow root attached to the specified element.
 * @private
 */
const SimplyBuilderAttachShadow = (data) => {
    const {element, mode = 'closed'} = data;
    return SimplyBuilderAttachShadowStore[SimplyBuilderAttachShadowSymbol].call(element, {mode});
};
/**
 * Dynamically creates a shadow root for a specified HTML element, using a simple mode string.
 * This function attaches a shadow DOM to the provided `shadowRootElement` with the shadow DOM
 * mode specified by the `shadow` parameter. The mode determines the encapsulation level for the shadow DOM,
 * controlling its isolation from the main document.
 *
 * @function createShadowElementFromString
 * @memberof module:DomComponentModule
 * @param {Object} data - The data object containing parameters for creating the shadow root.
 * @param {HTMLElement} data.shadowRootElement - The HTML element to which the shadow root will be attached.
 * @param {string} data.shadow - The mode of the shadow DOM. Valid values are `"open"` or `"closed"`.
 * @returns {ShadowRoot|undefined} The created shadow root if successful, or `undefined` if an error occurs.
 * @private
 */
const createShadowElementFromString = (data = {}) => {
    const {shadowRootElement, shadow} = data;
    return SimplyBuilderAttachShadow({
        element: shadowRootElement,
        mode: shadow
    });
};
/**
 * Creates a shadow root for a specified HTML element and applies custom styles.
 * This function takes an object specifying both the mode and styles for the shadow DOM.
 * The `shadow` parameter must include a `mode` field ("open" or "closed") and can optionally
 * include a `styles` field containing CSS styles. If `styles` is provided, it uses `CSSStyleSheet`
 * to apply these styles to the shadow root, allowing for encapsulated styling of the shadow DOM content.
 *
 * @function createShadowElementFromObject
 * @memberof module:DomComponentModule
 * @param {Object} data - The data object containing parameters for creating the shadow root with styles.
 * @param {HTMLElement} data.shadowRootElement - The HTML element to which the shadow root and styles will be attached.
 * @param {Object} data.shadow - An object specifying the shadow DOM's mode and styles. The `mode` field is required, and the `styles` field is optional.
 * @returns {ShadowRoot|undefined} The created shadow root if successful, or `undefined` if an error occurs.
 * @private
 */
const createShadowElementFromObject = (data = {}) => {
    const {shadowRootElement, shadow} = data;
    const {mode, styles} = shadow;
    if (mode) {
        const shadowRoot = SimplyBuilderAttachShadow({
            mode,
            element: shadowRootElement
        });
        if (styles) {
            const styleSheet = new CSSStyleSheet();
            styleSheet.replaceSync(styles);
            shadowRoot.adoptedStyleSheets = [styleSheet];
        }
        return shadowRoot;
    }
    return undefined;
};
/**
 * Holds functions to create shadow elements based on the type of the `shadow` parameter.
 * If `shadow` is a string, it uses `createShadowElementFromString` to create the shadow root.
 * If `shadow` is an object, it uses `createShadowElementFromObject` to create the shadow root
 * and optionally apply styles. This object allows for flexible shadow DOM creation by automatically
 * selecting the appropriate creation function based on the parameter type provided.
 *
 * @name chooseCreateShadow
 * @type {Object}
 * @memberof module:DomComponentModule
 * @property {Function} string - A function that takes an object with `shadowRootElement` and `shadow` (string) parameters and returns a shadow root.
 * @property {Function} object - A function that takes an object with `shadowRootElement` and `shadow` (object) parameters and returns a shadow root, possibly with styles applied.
 * @private
 */
const chooseCreateShadow = {
    "string": (data = {}) => createShadowElementFromString(data),
    "object": (data = {}) => createShadowElementFromObject(data)
};
/**
 * Dynamically creates a shadow DOM root for a specified element, applying styles if provided. This function supports both string and object configurations for the shadow root, offering flexibility in shadow DOM creation and styling.
 *
 * @function createShadowElement
 * @memberof module:DomComponentModule
 * @param {Object} data - The configuration object for creating the shadow root.
 * @param {string} data.state - The state key used to identify the shadow host element in DomStore.
 * @param {string|Object} [data.shadow] - The shadow DOM configuration, either as a mode string ('open' or 'closed') or as an object with 'mode' and optional 'styles'.
 * @param {Object} data.DomStore - The DomStore module instance for element reference management.
 * @returns {HTMLElement|ShadowRoot|undefined} - The shadow root, or undefined if an error occurs.
 */
const createShadowElement = (data = {}) => {
    const {state, shadow, DomStore = {}} = data;
    let shadowRoot;
    const shadowRootElement = DomStore.getElementFromStore(state);
    if (shadowRootElement) {
        const shadowType = (typeof shadow).toString();
        if (chooseCreateShadow[shadowType]) {
            shadowRoot = chooseCreateShadow[shadowType]({shadowRootElement, shadow});
        }
    }
    return shadowRoot;
};
/**
 * Creates and appends an HTML element to a specified parent element or the document body by default. This function integrates the buildElement utility with additional functionality for shadow DOM creation, allowing for comprehensive element creation and enhancement.
 *
 * @function createHTMLElement
 * @memberof module:DomComponentModule
 * @param {Object} data - The configuration object for creating and appending the HTML element.
 * @param {Object|HTMLElement} data.parent - The parent element for the new element, defaulting to document.body.
 * @param {Object} data.element - The structure defining the new element.
 * @param {string|Object} [data.shadow] - Optional shadow DOM configuration.
 * @param {Object} data.DomStore - The DomStore module instance for managing element references.
 * @returns {undefined|HTMLElement} - The created and appended HTML element, or undefined if an error occurs.
 */
const createHTMLElement = (data = {}) => {
    try {
        const {parent, element, shadow, DomStore = {}} = data;
        // noinspection JSCheckFunctionSignatures
        let childElement = buildElement({...element, DomStore});
        if (parent instanceof HTMLElement || parent instanceof SVGElement || parent instanceof ShadowRoot) {
            parent.appendChild(childElement);
        } else if (typeof parent === "object") {
            // noinspection JSCheckFunctionSignatures
            const parentElement = buildElement({...parent, DomStore});
            parentElement.appendChild(childElement);
        } else document.body.appendChild(childElement);
        if (shadow && childElement.dataset?.state) {
            const state = childElement.dataset.state.toString();
            if (typeof shadow === "object" || typeof shadow === "string") {
                const shadowRootElement = createShadowElement({state, shadow, DomStore});
                if (shadowRootElement) childElement = shadowRootElement;
            }
        }
        return childElement;
    } catch (err) {
        console.error(err);
        return undefined;
    }
};
/**
 * Creates and appends an SVG element to a specified parent SVG or HTML element, or the document body by default. It leverages buildElementNS to ensure proper namespacing and attribute handling for SVG element creation.
 *
 * @function createSVGElement
 * @memberof module:DomComponentModule
 * @param {Object} data - The configuration object for creating and appending the SVG element.
 * @param {Object|SVGElement} data.parent - The parent element for the new SVG element, defaulting to document.body.
 * @param {Object} data.element - The structure defining the new SVG element.
 * @param {Object} data.DomStore - The DomStore module instance for managing element references.
 * @returns {undefined|SVGElement} - The created and appended SVG element, or undefined if an error occurs.
 */
const createSVGElement = (data = {}) => {
    try {
        const {parent, element, DomStore = {}} = data;
        const childElement = buildElementNS(element);
        if (parent) {
            if (parent instanceof HTMLElement || parent instanceof SVGElement) {
                parent.appendChild(childElement);
            } else if (typeof parent === "object") {
                // noinspection JSCheckFunctionSignatures
                const parentElement = buildElementNS({...parent, DomStore});
                parentElement.appendChild(childElement);
            }
        }
        return childElement;
    } catch (err) {
        console.error(err);
        return undefined;
    }
};

/**
 * The DomComponentModule object, encapsulates functionalities for creating HTML and SVG elements dynamically
 * within web applications. It streamlines the process of constructing, configuring, and appending elements
 * to the DOM, offering a comprehensive API for programmatic manipulation of the document structure.
 *
 * @private
 * @type {Object}
 */
const DomComponentModule = Object.freeze({
    createHTMLElement,
    createSVGElement
});

// noinspection JSUnusedGlobalSymbols
export default DomComponentModule;