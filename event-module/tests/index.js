'use strict';

import {describe, it} from "node:test";
import {deepEqual, equal, notEqual, ok} from "node:assert";
import {EventModule} from "#sb-core-event-module";

import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const pkg = require("../package.json");

const testElement = "<div></div>";
const testKeyElement = "test.element";
const testFnElement = (e) => {
    console.log("testFnElement", e);
    if(e) return true;
};

describe("import and tests", () => {
    it("check object", () => {
        ok(typeof EventModule === "object");
        //
        deepEqual(Object.keys(EventModule), ['name', 'version', 'eventModuleExtends',
            'eventRegister', 'eventUnregister', 'EventTypes', 'EventActions',
            'registerEventStore', 'removeEventStore']);
        //
        ok(typeof EventModule.name === "string");
        ok(typeof EventModule.version === "string");
        ok(typeof EventModule.EventTypes === "object");
        ok(typeof EventModule.EventActions === "object");
        ok(typeof EventModule.eventModuleExtends === "function");
        ok(typeof EventModule.eventRegister === "function");
        ok(typeof EventModule.eventUnregister === "function");
        ok(typeof EventModule.registerEventStore === "function");
        ok(typeof EventModule.removeEventStore === "function");
    });
    it("check name and version", () => {
        equal(EventModule.name, "EventModule");
        equal(EventModule.version, pkg.version);
    });
    //
    it("eventRegister, EventTypes, EventActions and eventUnregister", () => {
        const {EventTypes, EventActions} = EventModule;
        ok(Object.keys(EventTypes).length === 0);
        ok(Object.keys(EventActions).length === 0);
        EventModule.eventRegister(testKeyElement, testFnElement);
        ok(Object.keys(EventTypes).length === 1);
        ok(Object.keys(EventActions).length === 1);
        equal(EventTypes[testKeyElement.toUpperCase()], testKeyElement);
        equal(EventActions[EventTypes[testKeyElement.toUpperCase()]], testFnElement);
        EventModule.eventUnregister(testKeyElement);
        notEqual(EventTypes[testKeyElement.toUpperCase()], testKeyElement);
        notEqual(EventActions[EventTypes[testKeyElement.toUpperCase()]], testFnElement);
        ok(Object.keys(EventTypes).length === 0);
        ok(Object.keys(EventActions).length === 0);
    });
    //
    it("eventStoreExtends", () => {
        notEqual(EventModule.eventModuleExtends({name: "DomStore", version: "0.0.1"}), true);
        equal(EventModule.eventModuleExtends({name: "DomStore", version: "1"}), true);
        equal(EventModule.eventModuleExtends({name: "DomStore", version: "1.0.1"}), true);
        notEqual(EventModule.eventModuleExtends({name: "DomStore", version: "0.1.1"}), true);
    });
});