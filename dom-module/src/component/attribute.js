'use strict';
/**
 * @private
 * @module DomAttributeComponentModule
 */

/**
 * @function setAttr
 * @memberof module:DomAttributeComponentModule
 * @param {Object} data
 * @param {HTMLElement|SVGElement} data.element - The DOM element to which the attributes should be added.
 * @param {Array} data.attrs - An array of attribute objects to set on the element. Each object should have 'name' and 'value' properties.
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
 * @function setAttrNS
 * @memberof module:DomAttributeComponentModule
 * @param {Object} data
 * @param {HTMLElement|SVGElement} data.element - The DOM element to which the attributes should be added.
 * @param {Array} data.attrs - An array of attribute objects to set on the element. Each object should have 'name' and 'value' properties.
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
