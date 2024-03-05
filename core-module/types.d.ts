/**
 * @exports CoreModule
 */
export const CoreModule: Readonly<{
    name: string;
    version: string;
    getElementFromStore: (key: string) => HTMLElement;
    createFromStruct: (data: {
        struct: object;
        parent?: HTMLElement;
    }) => boolean;
    removeElement: (element: HTMLElement | SVGAElement) => void;
}>;
