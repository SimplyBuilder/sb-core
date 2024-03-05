/**
 * @exports EventModule
 */
export const EventModule: Readonly<{
    name: string;
    version: string;
    addEventToStore: (data: {
        element: HTMLElement;
        type: string;
        handler: Function;
        nodeId?: string;
        eventId?: string;
    }) => boolean;
    removeAllEventsFromStore: (element: HTMLElement) => boolean;
    removeEventIdFromStore: (data?: object) => boolean;
    eventRegister: (name: string, fn?: Function) => boolean;
    eventUnregister: (name: string) => boolean;
    EventTypes: object;
    EventActions: object;
}>;
