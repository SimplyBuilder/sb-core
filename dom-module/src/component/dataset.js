'use strict';
/**
 * @private
 * @module DomDatasetComponentModule
 */

/**
 * @function setData
 * @memberof module:DomDatasetComponentModule
 * @param {Object} data
 * @param {HTMLElement|SVGElement} data.element - The DOM element to which the attributes should be added.
 * @param {Array} data.dataset - An array of dataset objects to set on the element. Each object should have 'name' and 'value' properties.
 */
export const setData = (data = {}) => {
    try {
        const {element, dataset = [], DomStore = {}} = data;
        for (let i = dataset.length - 1; i >= 0; i--) {
            try {
                const item = dataset[i];
                if (item?.name) {
                    if (item.name) element.dataset[item.name.toString()] = item.value.toString();
                    if (item.name === "state" && (typeof DomStore.addElementToStore === "function")) {
                        DomStore.addElementToStore({key: item.value.toString(), value: element});
                    }
                }
            } catch (err) {
                console.error(err);
            }
        }
    } catch (err) {
        console.log("Error when assigning dataset");
        console.error(err);
    }
};