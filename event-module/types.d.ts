/**
 * @exports EventModule
 */
export const EventModule: Readonly<{
    addEventToStore: (data: {
        element: HTMLElement;
        type: string;
        handler: Function;
        nodeId?: string;
        eventId?: string;
    }) => boolean;
    removeAllEventsFromStore: (element: HTMLElement) => boolean;
    removeEventIdFromStore: (data?: any) => boolean;
    eventRegister: (name: string, fn?: Function) => boolean;
    eventUnregister: (name: string) => boolean;
    EventTypes: {};
    EventActions: {};
    name: any;
    version: any;
}>;
