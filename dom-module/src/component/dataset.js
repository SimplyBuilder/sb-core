'use strict';
/**
 * The DomDatasetComponentModule provides utility functions for managing DOM element datasets,
 * enhancing element identification and state management capabilities across web applications.
 * By offering a simple interface to set custom data attributes (`dataset`) on elements,
 * it facilitates data-driven interactions and state management directly within the DOM,
 * promoting cleaner, more readable, and maintainable code.
 *
 * @module DomDatasetComponentModule
 * @private
 */

/**
 * Sets custom data attributes (datasets) on a specified DOM element.
 * It iterates through an array of dataset objects, applying each `name` and `value` pair
 * to the element's dataset. If a 'state' dataset is specified, the element is also registered
 * in the DomStore, allowing for more structured and accessible state management within the application.
 * This method seamlessly integrates with the DomStore module to ensure consistent element tracking and retrieval.
 *
 * @private
 * @function setData
 * @memberof module:DomDatasetComponentModule
 * @param {Object} data - Configuration object containing the target element and datasets to apply.
 * @param {HTMLElement|SVGElement} data.element - The DOM element to which the datasets should be applied.
 * @param {Array<Object>} data.dataset - An array of objects, where each object represents a dataset entry with `name` and `value` properties.
 * @param {Object} [data.DomStore] - An optional reference to the DomStore module for registering elements with a 'state' dataset.
 * @example
 * setData({
 *   element: document.getElementById('example'),
 *   dataset: [
 *     {name: 'controller', value: 'userProfile'},
 *     {name: 'state', value: 'active'}
 *   ],
 *   DomStore: window.DomStore // Assuming DomStore is globally accessible for example purposes only
 * });
 */
export const setData = (data = {}) => {
    try {
        const {element, dataset = [], DomStore = {}} = data;
        for (let i = dataset.length - 1; i >= 0; i--) {
            try {
                const item = dataset[i];
                if (item?.name) {
                    element.dataset[item.name.toString()] = item.value.toString();
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