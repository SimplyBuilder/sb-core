/**
 * @exports DomModule
 */
export const DomModule: Readonly<{
    name: string;
    version: string;
    domModuleExtends: (data: object) => boolean;
    createHTMLElement: (data: object) => HTMLElement | undefined;
    createSVGElement: (data: object) => SVGElement | undefined;
    addElementToStore: (data: {
        key: string;
        value: HTMLElement;
    }) => void;
    getElementFromStore: (key: string) => HTMLElement;
    removeElementFromStore: (key: string, mode?: number) => void;
    createFromStruct: (data: {
        struct: object;
        parent?: HTMLElement;
    }) => boolean;
    removeElement: (element: HTMLElement | SVGAElement) => void;
}>;
