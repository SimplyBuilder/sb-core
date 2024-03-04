'use strict';

import {describe, it} from "node:test";
import {deepEqual, equal, notEqual, ok} from "node:assert";
import {DomModule} from "#sb-core-dom-module";

import { createRequire } from "node:module";

import {JSDOM} from "jsdom";

const require = createRequire(import.meta.url);
const pkg = require("../package.json");

const testKeyElement = "test.element";

const dom = new JSDOM(`<!DOCTYPE html><html lang="en"><head><title>test</title></head><body></body></html>`);
global['window'] = dom.window;
global['document'] = dom.window.document;
global['HTMLElement'] = dom.window.HTMLElement;
global['SVGElement'] = dom.window.SVGElement;
const testElement = document.createElement("div");

describe("import and tests", () => {
    it("check object", () => {
        ok(typeof DomModule === "object");
        //
        deepEqual(Object.keys(DomModule), ['name', 'version',
            'domModuleExtends', 'createHTMLElement', 'createSVGElement',
            'addElementToStore', 'getElementFromStore', 'removeElementFromStore',
            'createFromStruct']);
        //
        ok(typeof DomModule.name === "string");
        ok(typeof DomModule.version === "string");
        ok(typeof DomModule.domModuleExtends === "function");
        ok(typeof DomModule.createHTMLElement === "function");
        ok(typeof DomModule.createSVGElement === "function");
        ok(typeof DomModule.addElementToStore === "function");
        ok(typeof DomModule.getElementFromStore === "function");
        ok(typeof DomModule.removeElementFromStore === "function");
        ok(typeof DomModule.createFromStruct === "function");
    });
    it("check name and version", () => {
        equal(DomModule.name, "DomModule");
        equal(DomModule.version, pkg.version);
    });
    it("addElementToStore, getElementFromStore and removeElementFromStore", () => {
        DomModule.addElementToStore({key: testKeyElement, value: testElement});
        equal(DomModule.getElementFromStore(testKeyElement), testElement);
        DomModule.removeElementFromStore(testKeyElement);
        notEqual(DomModule.getElementFromStore(testKeyElement), testElement);
    });
    it("domModuleExtends", () => {
        notEqual(DomModule.domModuleExtends({name: "EventModule", version: "0.0.1"}), true);
        equal(DomModule.domModuleExtends({name: "EventModule", version: "1"}), true);
        equal(DomModule.domModuleExtends({name: "EventModule", version: "1.0.1"}), true);
        notEqual(DomModule.domModuleExtends({name: "EventModule", version: "0.1.1"}), true);
    });
    it("createHTMLElement and createSVGElement", () => {
        //DomModule.createHTMLElement({parent: testElement, element});
        //DomModule.createSVGElement({parent: testElement, element, shadow});
    });
    it("createFromStruct", () => {
        const result = DomModule.createFromStruct({
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
        element.remove();
        equal(document.getElementById("test-create"), null);
    });
});