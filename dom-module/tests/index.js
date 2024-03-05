'use strict';

import {describe, it} from "node:test";
import {deepEqual, equal, notEqual, ok} from "node:assert";
import {DomModule} from "#sb-core-dom-module";
import {EventModule} from "../../event-module/lib/main.js";

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
testElement.setAttribute("id", "div-test");
document.body.appendChild(testElement);

describe("import and tests", () => {
    it("check object", () => {
        ok(typeof DomModule === "object");
        //
        deepEqual(Object.keys(DomModule), ['name', 'version',
            'domModuleExtends', 'createHTMLElement', 'createSVGElement',
            'addElementToStore', 'getElementFromStore', 'removeElementFromStore',
            'createFromStruct', 'removeElement']);
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
        ok(typeof DomModule.removeElement === "function");
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
        equal(DomModule.domModuleExtends(EventModule), true);
    });
    it("createHTMLElement", () => {
        const parent = document.getElementById("div-test");
        const result = DomModule.createHTMLElement({
            parent,
            element: {
                "type": "section",
                "attr": [{"name": "id", "value": "test-create1"}],
                "attrNS": [],
                "dataset": [{"name": "state", "value": "simply-builder.main1"}]
            }
        });
        ok(result);
        const element = document.getElementById("test-create1");
        ok(typeof element === "object");
        ok(typeof element.dataset === "object");
        ok(element instanceof HTMLElement);
        equal(element.dataset.state, "simply-builder.main1");
        equal(element.tagName.toLowerCase(), "section");
        DomModule.removeElement(element);
        equal(document.getElementById("test-create1"), null);
    });
    it("createSVGElement", () => {
        const parent = document.getElementById("div-test");
        const result = DomModule.createSVGElement({
            parent,
            "element": {
                "type": "svg",
                "element": "path",
                "attr": [
                    {"name": "id", "value": "test-create2"},
                    {"name": "d", "value": "M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"}
                ],
                "attrNS": [{"name": "viewBox", "value": "0 0 24 24"}],
                "dataset": [{"name": "state", "value": "simply-builder.main2"}]
            }
        });
        ok(result);
        const element = document.getElementById("test-create2");
        ok(typeof element === "object");
        ok(typeof element.dataset === "object");
        ok(element instanceof SVGElement);
        equal(element.dataset.state, "simply-builder.main2");
        equal(element.tagName.toLowerCase(), "svg");
        DomModule.removeElement(element);
        equal(document.getElementById("test-create2"), null);
    });
    it("createFromStruct", () => {
        const result = DomModule.createFromStruct({
            struct: {
                "element": "section",
                "attr": {
                    "id": "test-create3",
                },
                "dataset": {
                    "state": "simply-builder.main3"
                },
            }
        });
        ok(result);
        const element = document.getElementById("test-create3");
        ok(typeof element === "object");
        ok(typeof element.dataset === "object");
        ok(element instanceof HTMLElement);
        equal(element.dataset.state, "simply-builder.main3");
        equal(element.tagName.toLowerCase(), "section");
        DomModule.removeElement(element);
        equal(document.getElementById("test-create3"), null);
    });
});