/**
 * @exports DomModule
 */
export const DomModule: Readonly<{
    name: any;
    version: any;
    domModuleExtends: (data: any) => boolean;
    createHTMLElement: (data: any) => HTMLElement | undefined;
    createSVGElement: (data: any) => SVGElement | undefined;
    addElementToStore: (data: {
        key: string;
        value: HTMLElement;
    }) => void;
    getElementFromStore: (key: string) => HTMLElement;
    removeElementFromStore: (key: string, mode?: number) => void;
    createFromStruct: (data: {
        struct: any;
        parent?: HTMLElement;
    }) => boolean;
}>;
