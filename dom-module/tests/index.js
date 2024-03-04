'use strict';

import {describe, it} from "node:test";
import {deepEqual, equal, notEqual, ok} from "node:assert";
import {DomModule} from "#sb-core-dom-module";

import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const pkg = require("../package.json");

const testElement = "<div></div>";
const testKeyElement = "test.element";
describe("import and tests", () => {
    it("check object", () => {
        ok(typeof DomModule === "object");
        //
        deepEqual(Object.keys(DomModule), ['name', 'version',
            'domStoreExtends', 'addElementToStore',
            'getElementFromStore', 'removeElementFromStore']);
        //
        ok(typeof DomModule.name === "string");
        ok(typeof DomModule.version === "string");
        ok(typeof DomModule.domStoreExtends === "function");
        ok(typeof DomModule.addElementToStore === "function");
        ok(typeof DomModule.getElementFromStore === "function");
        ok(typeof DomModule.removeElementFromStore === "function");
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
    it("domStoreExtends", () => {
        notEqual(DomModule.domStoreExtends({name: "EventModule", version: "0.0.1"}), true);
        equal(DomModule.domStoreExtends({name: "EventModule", version: "1"}), true);
        equal(DomModule.domStoreExtends({name: "EventModule", version: "1.0.1"}), true);
        notEqual(DomModule.domStoreExtends({name: "EventModule", version: "0.1.1"}), true);
    });
});