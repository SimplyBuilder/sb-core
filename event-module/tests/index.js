'use strict';

import {describe, it} from "node:test";
import {deepEqual, equal, notEqual, ok} from "node:assert";
import {EventModule} from "#sb-core-event-module";

import { createRequire } from "node:module";
import {JSDOM} from "jsdom";
const require = createRequire(import.meta.url);
const pkg = require("../package.json");

const testKeyElement = "test.element";
const testFnElement = (e) => {
    if(e) return true;
};
const dom = new JSDOM(`<!DOCTYPE html><html lang="en"><head><title>test</title></head><body></body></html>`);
const document = dom.window.document;

describe("import and tests", () => {
    it("check object", () => {
        ok(typeof EventModule === "object");
        //
        deepEqual(Object.keys(EventModule), ['name', 'version',
            'eventRegister', 'eventUnregister', 'EventTypes', 'EventActions',
            'addEventToStore', 'removeAllEventsFromStore', 'removeEventIdFromStore']);
        //
        ok(typeof EventModule.name === "string");
        ok(typeof EventModule.version === "string");
        ok(typeof EventModule.EventTypes === "object");
        ok(typeof EventModule.EventActions === "object");
        ok(typeof EventModule.eventRegister === "function");
        ok(typeof EventModule.eventUnregister === "function");
        ok(typeof EventModule.addEventToStore === "function");
        ok(typeof EventModule.removeAllEventsFromStore === "function");
        ok(typeof EventModule.removeEventIdFromStore === "function");
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
        equal(EventModule.eventUnregister(testKeyElement), false);
        equal(EventModule.eventRegister(testKeyElement, testFnElement), true);
        equal(EventModule.eventRegister(testKeyElement, testFnElement), false);
        ok(Object.keys(EventTypes).length === 1);
        ok(Object.keys(EventActions).length === 1);
        equal(EventTypes[testKeyElement.toUpperCase()], testKeyElement);
        equal(EventActions[EventTypes[testKeyElement.toUpperCase()]], testFnElement);
        equal(EventModule.eventUnregister(testKeyElement), true);
        equal(EventModule.eventUnregister(testKeyElement), false);
        notEqual(EventTypes[testKeyElement.toUpperCase()], testKeyElement);
        notEqual(EventActions[EventTypes[testKeyElement.toUpperCase()]], testFnElement);
        ok(Object.keys(EventTypes).length === 0);
        ok(Object.keys(EventActions).length === 0);
    });
    it("ddEventToStore, removeEventIdFromStore and removeAllEventsFromStore", () => {
        const test = {type: 'click', handler: testFnElement};
        equal(EventModule.addEventToStore({
            element: document.getElementById("test"), ...test
        }), false);
        ok(document.body.childNodes.length === 0);
        //
        const testElement = document.createElement("div");
        testElement.setAttribute("id", "test");
        testElement.innerText = "test";
        document.body.appendChild(testElement);
        //
        ok(document.body.childNodes.length === 1);
        equal(EventModule.addEventToStore({
            element: document.getElementById("test"), ...test
        }), true);
        ok(document.getElementById("test").getAttribute('listener') === "true");
        equal(EventModule.removeAllEventsFromStore(document.getElementById("test")), true);
        equal(EventModule.removeAllEventsFromStore(document.getElementById("test")), false);
        ok(document.getElementById("test").getAttribute('listener') === null);
        equal(EventModule.addEventToStore({
            element: document.getElementById("test"), eventId: 'test1', ...test
        }), true);
        ok(document.getElementById("test").getAttribute('listener') === "true");
        equal(EventModule.addEventToStore({
            element: document.getElementById("test"), eventId: 'test2', ...test, type: 'change'
        }), true);
        ok(document.getElementById("test").getAttribute('listener') === "true");
        equal(EventModule.removeEventIdFromStore({
            element: document.getElementById("test"), eventId: 'test1'
        }), true);
        ok(document.getElementById("test").getAttribute('listener') === "true");
        equal(EventModule.removeEventIdFromStore({
            element: document.getElementById("test"), eventId: 'test1'
        }), false);
        ok(document.getElementById("test").getAttribute('listener') === "true");
        equal(EventModule.removeEventIdFromStore({
            element: document.getElementById("test"), eventId: 'test2'
        }), true);
        ok(document.getElementById("test").getAttribute('listener') === null);
        equal(EventModule.removeEventIdFromStore({
            element: document.getElementById("test"), eventId: 'test2'
        }), false);
        ok(document.getElementById("test").getAttribute('listener') === null);
        equal(EventModule.removeEventIdFromStore(), false);
    });
});