/**
 * The DomStore module, providing an interface to manage DOM elements and integrate version-supported dependencies.
 * It exposes methods for extending the store, adding, retrieving, and removing DOM elements.
 *
 * @exports DomStore
 */
export const DomStore: Readonly<{
    name: string;
    version: string;
    domStoreExtends: (data: object) => boolean;
    addElement: (element: {
        key: string;
        value: HTMLElement;
    }) => void;
    getElement: (key: string) => HTMLElement;
    removeElement: (key: string, mode?: number) => void;
}>;
