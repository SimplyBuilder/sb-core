/**
 * @exports DomModule
 */
export const DomModule: Readonly<{
    name: any;
    version: any;
    domStoreExtends: (data: any) => boolean;
    addElementToStore: (data: {
        key: string;
        value: HTMLElement;
    }) => void;
    getElementFromStore: (key: string) => HTMLElement;
    removeElementFromStore: (key: string, mode?: number) => void;
}>;
