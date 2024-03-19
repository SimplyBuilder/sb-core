'use strict';

import {describe, it} from "node:test";
import {deepEqual, equal, notEqual, ok} from "node:assert";
import {CoreModule} from "#sb-core-module";

import { createRequire } from "node:module";

import {JSDOM} from "jsdom";

const require = createRequire(import.meta.url);
const pkg = require("../package.json");

const dom = new JSDOM(`<!DOCTYPE html><html lang="en"><head><title>test</title></head><body></body></html>`);
global['window'] = dom.window;
global['document'] = dom.window.document;
global['HTMLElement'] = dom.window.HTMLElement;
global['SVGElement'] = dom.window.SVGElement;
const testElement = document.createElement("div");
testElement.setAttribute("id", "div-test");
document.body.appendChild(testElement);

describe("import and tests", () => {
    it("check object", () => {
        ok(typeof CoreModule === "object");
        //
        deepEqual(Object.keys(CoreModule), ['name', 'version',
            'getElementFromStore', 'createFromStruct', 'removeElement',
            'eventRegister', 'eventUnregister']);
        //
        ok(typeof CoreModule.name === "string");
        ok(typeof CoreModule.version === "string");
        ok(typeof CoreModule.getElementFromStore === "function");
        ok(typeof CoreModule.createFromStruct === "function");
        ok(typeof CoreModule.removeElement === "function");
        ok(typeof CoreModule.eventRegister === "function");
        ok(typeof CoreModule.eventUnregister === "function");
    });
    it("check name and version", () => {
        equal(CoreModule.name, "CoreModule");
        equal(CoreModule.version, pkg.version);
    });
    it("createFromStruct, getElementFromStore and removeElement", () => {
        const result = CoreModule.createFromStruct({
            struct: {
                "element": "section",
                "attr": {
                    "id": "test-create",
                },
                "dataset": {
                    "state": "simply-builder.main"
                },
            }
        });
        ok(result);
        const element = document.getElementById("test-create");
        ok(typeof element === "object");
        ok(typeof element.dataset === "object");
        ok(element instanceof HTMLElement);
        equal(element.dataset.state, "simply-builder.main");
        equal(element.tagName.toLowerCase(), "section");
        //
        CoreModule.createFromStruct({
            struct: {
                "element": "section",
                "attr": {
                    "id": "test-create-duplicate",
                },
                "dataset": {
                    "state": "simply-builder.main"
                },
            }
        });
        equal(document.getElementById("test-create-duplicate"), null);
        //
        CoreModule.removeElement(element);
        equal(document.getElementById("test-create"), null);
    });
    it("eventRegister and eventUnregister", () => {
        const testKeyElement = "simply-builder.testEvent";
        const testFnElement = (e) => {
            if(e) return true;
        };
        equal(CoreModule.eventUnregister(testKeyElement), false);
        equal(CoreModule.eventRegister(testKeyElement, testFnElement), true);
        equal(CoreModule.eventRegister(testKeyElement, testFnElement), false);
        equal(CoreModule.eventUnregister(testKeyElement), true);
        equal(CoreModule.eventUnregister(testKeyElement), false);
    });
});