'use strict';

import {setAttr, setAttrNS} from "./attribute.js";
import {setData} from "./dataset.js";

/**
 * @private
 * @function buildElementNS
 * @memberof module:DomComponentModule
 * @param {Object} data
 * @param {string} data.type - The type of the element to create (e.g., 'div', 'span').
 * @param {Array} [data.attr]
 * @param {Array} [data.attrNS]
 * @param {Array} [data.dataset]
 * @param {Object} data.DomStore
 * @returns {undefined|SVGElement} - The created namespaced element, or undefined if an error occurs.
 */
const buildElementNS = (data = {}) => {
    try {
        const { dataset, attrNS, attr, type, DomStore = {} } = data;
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
 * @private
 * @function buildElement
 * @memberof module:DomComponentModule
 * @param {Object} data
 * @param {string} data.type - The type of the element to create (e.g., 'div', 'span').
 * @param {Array} [data.attr]
 * @param {Array} [data.dataset]
 * @param {Object} data.DomStore
 * @returns {undefined|HTMLElement} - The created HTML element, or undefined if an error occurs.
 */
const buildElement = (data = {}) => {
    try {
        const {dataset, attr, type, DomStore = {}} = data;
        const element = document.createElement(type);
        if (attr?.length) setAttr({element, attrs: attr});
        if (dataset?.length) setData({element, dataset, DomStore});
        return element;
    } catch (err) {
        console.error(err);
    }
    return undefined;
};
/**
 * @private
 * @function createShadowElementFromString
 * @memberof module:DomComponentModule
 * @param {Object} data
 * @param {HTMLElement} data.shadowRootElement
 * @param {string} data.shadow
 * @returns {ShadowRoot|undefined}
 */
const createShadowElementFromString = (data = {}) => {
    const {shadowRootElement, shadow} = data;
    return shadowRootElement.attachShadow({
        mode: shadow
    });
};
/**
 * @private
 * @function createShadowElementFromObject
 * @memberof module:DomComponentModule
 * @param {Object} data
 * @param {HTMLElement} data.shadowRootElement
 * @param {Object} data.shadow
 * @returns {ShadowRoot|undefined}
 */
const createShadowElementFromObject = (data = {}) => {
    const {shadowRootElement, shadow} = data;
    const {mode, styles} = shadow;
    if (mode) {
        const shadowRoot = shadowRootElement.attachShadow({mode});
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
 * @private
 * @name chooseCreateShadow
 * @type {Object}
 * @memberof module:DomComponentModule
 */
const chooseCreateShadow = {
    "string": ({shadowRootElement, shadow}) => createShadowElementFromString({shadowRootElement, shadow}),
    "object": ({shadowRootElement, shadow}) => createShadowElementFromObject({shadowRootElement, shadow})
};
/**
 * @private
 * @function createShadowElement
 * @memberof module:DomComponentModule
 * @param {Object} data
 * @param {string} data.state
 * @param {string|Object} [data.shadow]
 * @param {Object} data.DomStore
 * @returns {HTMLElement|ShadowRoot|undefined}
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
 * @function createHTMLElement
 * @memberof module:DomComponentModule
 * @param {Object} data
 * @param {Object|HTMLElement} data.parent - The parent element to append the new element to. If not provided or invalid, defaults to document.body.
 * @param {Object} data.element - The structure defining the new element to be created.
 * @param {string|Object} [data.shadow]
 * @param {Object} data.DomStore
 * @returns {undefined|HTMLElement} - The created and appended HTML element, or undefined if an error occurs.
 */
const createHTMLElement = (data = {}) => {
    try {
        const {parent, element, shadow, DomStore = {}} = data;
        let childElement = buildElement(element);
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
 * @function createSVGElement
 * @memberof module:DomComponentModule
 * @param {Object} data
 * @param {Object|SVGElement} data.parent - The parent element or structured definition to append the new SVG element to.
 * @param {Object} data.element - The structure defining the new SVG element to be created.
 * @param {Object} data.DomStore
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
 * @private
 * @module DomComponentModule
 */
const DomComponentModule = Object.freeze({
    createHTMLElement,
    createSVGElement
});

// noinspection JSUnusedGlobalSymbols
export default DomComponentModule;