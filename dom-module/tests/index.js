'use strict';

import {describe, it} from "node:test";
import {deepEqual, equal, notEqual, ok} from "node:assert";
import {DomStore} from "#sb-core-dom-module";

import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const pkg = require("../package.json");

const testElement = "<div></div>";
const testKeyElement = "test.element";
describe("import and tests", () => {
    it("check object", () => {
        ok(typeof DomStore === "object");
        //
        deepEqual(Object.keys(DomStore), ['name', 'version', 'domStoreExtends', 'addElement',
            'getElement', 'removeElement']);
        //
        ok(typeof DomStore.name === "string");
        ok(typeof DomStore.version === "string");
        ok(typeof DomStore.domStoreExtends === "function");
        ok(typeof DomStore.addElement === "function");
        ok(typeof DomStore.getElement === "function");
        ok(typeof DomStore.removeElement === "function");
    });
    it("check name and version", () => {
        equal(DomStore.name, "DomStore");
        equal(DomStore.version, pkg.version);
    });
    it("addElement, getElement and removeElement", () => {
        DomStore.addElement({key: testKeyElement, value: testElement});
        equal(DomStore.getElement(testKeyElement), testElement);
        DomStore.removeElement(testKeyElement);
        notEqual(DomStore.getElement(testKeyElement), testElement);
    });
    it("domStoreExtends", () => {
        notEqual(DomStore.domStoreExtends({name: "EventStore", version: "0.0.1"}), true);
        equal(DomStore.domStoreExtends({name: "EventStore", version: "1"}), true);
        equal(DomStore.domStoreExtends({name: "EventStore", version: "1.0.1"}), true);
        notEqual(DomStore.domStoreExtends({name: "EventStore", version: "0.1.1"}), true);
    });
});