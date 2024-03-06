'use strict';
/**
 * The DomAttributeComponentModule provides utility functions for dynamically managing DOM element attributes,
 * allowing for the flexible manipulation of HTML and SVG elements within web applications. This module includes
 * functions for setting standard attributes (`setAttr`) as well as namespace-specific attributes (`setAttrNS`),
 * enabling developers to apply attributes across a wide range of elements and use cases.
 *
 * @module DomAttributeComponentModule
 * @private
 */

/**
 * Sets attributes on a specified DOM element. It iterates through an array of attribute objects,
 * applying each `name` and `value` pair to the element's attributes. This method supports both
 * HTML and SVG elements, making it a versatile utility for dynamic content creation and manipulation.
 *
 * @private
 * @function setAttr
 * @memberof module:DomAttributeComponentModule
 * @param {Object} data - Configuration object containing the target element and attributes to apply.
 * @param {HTMLElement|SVGElement} data.element - The DOM element to which the attributes should be applied.
 * @param {Array<Object>} data.attrs - An array of objects, where each object represents an attribute entry with `name` and `value` properties.
 * @example
 * setAttr({
 *   element: document.getElementById('example'),
 *   attrs: [
 *     {name: 'class', value: 'highlight'},
 *     {name: 'id', value: 'user'}
 *   ]
 * });
 */
export const setAttr = (data = {}) => {
    const {element, attrs = []} = data;
    if(attrs.length >= 1) {
        for (let i = attrs.length - 1; i >= 0; i--) {
            try {
                const item = attrs[i];
                if (item?.name) {
                    element.setAttribute(item.name.toString(), item.value.toString());
                }
            } catch (err) {
                console.error(err);
            }
        }
    }
};
/**
 * Sets namespace-specific attributes on a specified DOM element. Similar to `setAttr`,
 * it iterates through an array of attribute objects to apply each `name` and `value` pair
 * to the element, but with support for namespace definitions. This method is particularly
 * useful for SVG elements or when working with XML namespaces.
 *
 * @private
 * @function setAttrNS
 * @memberof module:DomAttributeComponentModule
 * @param {Object} data - Configuration object containing the target element, namespace, and attributes to apply.
 * @param {HTMLElement|SVGElement} data.element - The DOM element to which the namespace-specific attributes should be applied.
 * @param {Array<Object>} data.attrs - An array of objects, each representing a namespace-specific attribute entry with `name` and `value` properties.
 * @example
 * setAttrNS({
 *   element: document.querySelector('svg'),
 *   attrs: [
 *     {name: 'xlink:href', value: 'http://www.w3.org/1999/xlink' }
 *   ]
 * });
 */
export const setAttrNS = (data = {}) => {
    const {element, attrs = []} = data;
    if(attrs.length >= 1) {
        for (let i = attrs.length - 1; i >= 0; i--) {
            try {
                const item = attrs[i];
                if (item?.name) {
                    element.setAttributeNS(null, item.name.toString(), item.value.toString());
                }
            } catch (err) {
                console.error(err);
            }
        }
    }
};
