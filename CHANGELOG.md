# Changelog


## v0.0.10

[compare changes](https://sp-core.github.com/SimplyBuilder/sb-core/compare/v0.0.9...v0.0.10)

### 🚀 Enhancements

- **dom-module:** Add SimplyBuilderAttachShadow function (b6f75c0)
- **dom-module:** Remove redundant code for attaching shadow roots (2f0e5bf)
- **core-module:** Remove unnecessary import (bcf11d1)

### 💅 Refactors

- **core-module:** Remove redundant code for attaching shadow roots (532d56f)
- Organize imports in index.js in dom-module/tests (63dc99f)

### ❤️ Contributors

- JamilServices <jamilservicos@gmail.com>

## v0.0.9

[compare changes](https://sp-core.github.com/SimplyBuilder/sb-core/compare/v0.0.8...v0.0.9)

## v0.0.8

[compare changes](https://sp-core.github.com/SimplyBuilder/sb-core/compare/v0.0.7...v0.0.8)

### 🚀 Enhancements

- Freeze attachShadow method to maintain compatibility with SimplyBuilderAttachShadow. (393f9fe)
- **dom-module:** Add SimplyBuilderAttachShadow functionality (77c96b4)
- **dom-module:** Add test for creating duplicate elements (e40babf)
- **core-module:** Add test for creating duplicate elements (bd40be1)

### 🩹 Fixes

- Adjust store to check for existing element refs before adding (55e94a0)
- **dom-module:** Fix error handling in dataset.js (587bbdf)
- Fix conditional statement in buildElement function (3e6dad2)

### 📦 Build

- Update CHANGELOG.md with version v1.0.5 enhancements and fixes (8d82990)

### ❤️ Contributors

- JamilServices <jamilservicos@gmail.com>

## v0.0.7

[compare changes](https://sp-core.github.com/SimplyBuilder/sb-core/compare/v0.0.5...v0.0.7)

### 💅 Refactors

- **dom-module:** Update createHTMLElement function to pass DomStore to buildElement function (66a64e9)
- **dom-module:** Update createHTMLElement function to pass DomStore (38051cd)
- **core-module:** Bump version to 1.0.4 and update createHTMLElement function to pass DomStore to buildElement function. (afa6b57)

### 🏡 Chore

- **dom-module:** Bump version to 1.0.4 (0ced09f)
- **core-module:** Bump version to 1.0.4 (e53ef97)

### ❤️ Contributors

- JamilServices <jamilservicos@gmail.com>

## v0.0.6

[compare changes](https://sp-core.github.com/SimplyBuilder/sb-core/compare/v0.0.5...v0.0.6)

### 💅 Refactors

- **dom-module:** Update createHTMLElement function to pass DomStore to buildElement function (66a64e9)

### ❤️ Contributors

- JamilServices <jamilservicos@gmail.com>

## v0.0.5

[compare changes](https://sp-core.github.com/SimplyBuilder/sb-core/compare/v0.0.4...v0.0.5)

### 🚀 Enhancements

- Update version to 0.0.5 in package.json and add event handling functions in core-module. (e3ca2d71)

### ❤️ Contributors

- JamilServices <jamilservicos@gmail.com>

## v0.0.4

[compare changes](https://sp-core.github.com/SimplyBuilder/sb-core/compare/v0.0.4...v0.0.4)

### 🚀 Enhancements

- **core-module:** Add event handling functions (b04ef10)
- **core-module:** Add eventRegister and eventUnregister methods (d1bd906)
- Add eventRegister and eventUnregister functions to CoreModule (2f476b0)

### 📖 Documentation

- Update CDN links in README files (41f74c9)

### ❤️ Contributors

- JamilServices <jamilservicos@gmail.com>

## v0.0.3

[compare changes](https://sp-core.github.com/SimplyBuilder/sb-core/compare/v0.0.2...v0.0.3)

### 💅 Refactors

- **README.md:** Update README.md with new contribution guidelines for Core, Dom, and Event Modules (e5f1485)
- **README.md:** Update README.md  for Core, Dom, and Event Modules (731f7d9)
- **README.md:** Update README.md  for Core, Dom, and Event Modules (b8d0625)

### ❤️ Contributors

- JamilServices <jamilservicos@gmail.com>

## v0.0.2

[compare changes](https://sp-core.github.com/SimplyBuilder/sb-core/compare/empty...v0.0.2)

### 🚀 Enhancements

- Add .gitignore for dom-module directory (a0b6b2f)
- Add new dom-module README.md file (4c52bcb)
- Add .npmignore to dom-module (de234f0)
- Add AUTHORS file to dom-module (a7769fc)
- Add CONTRIBUTING.md file (3a62f8e)
- Add GOVERNANCE.md file (d30e99a)
- Add MIT License to dom-module (2f8fa9c)
- **dom-module:** Add rollup configuration for building DomStore library (cf61438)
- Add tsconfig.json for dom-module (919dfa3)
- Add new type definition file for DomStore module (a03154e)
- Add dom-module package.json (3b7b4a8)
- **dom-module:** Add import for #sb-core-dom-module (da18c42)
- Add tests for DomStore functionalities (c34df73)
- **dom-module:** Add DomStore module for managing and interacting with DOM elements (21709c2)
- **event-module:** Add types definition file for event module (9cc9d82)
- Create event-module README.md (5b84f02)
- **event-module:** Add event module package.json configuration (f593273)
- Add event module maintainers list (40ee21d)
- Add MIT License to event-module (e9baa55)
- **event-module:** Add GOVERNANCE.md file (6f10ace)
- **event-module:** Add CONTRIBUTING.md (4e9213d)
- Add event-module AUTHORS file with Jamil Services contact emails (22bd701)
- **event-module:** Add initial .gitignore configuration (c561cf5)
- **event-module:** Add main.js file (6db39fe)
- Add EventComponent module to manage custom events and actions (050d69a)
- Add tests for EventModule in event-module/tests/index.js (d49ce37)
- Add optional eventId to event handling in store (89eb837)
- **event-module:** Add return statements to eventRegister and eventUnregister functions (58af781)
- **dom-module:** Update types in types.d.ts (97ff6de)
- **dom-module:** Refactor store.js (3b8192b)
- **dom-module:** Add new methods 'createHTMLElement', 'createSVGElement', 'createFromStruct' (c153011)
- Add main component creation functions (a27abb7)
- Add setData function to set dataset attributes to DOM elements (fdc0e90)
- **dom-module:** Add attribute component functions (e8878dc)
- **dom-module:** Add 'removeElement' method (5cb4241)
- **dom-module:** Add removeElement function (18d2d23)
- Add initial project structure and ignore files (56aa2d1)
- Add AUTHORS file (49d4330)
- Add CONTRIBUTING.md with guidelines for contributing to `sb-core` (e3df30d)
- Add GOVERNANCE.md file with project governance details (a1fd532)
- Add MIT License (9f18a8e)
- Add pnpm workspace configuration (8658a8a)
- Add package.json with initial project configuration (356eea2)
- **event-module:** Add EventModule type definition (5b7962a)
- **dom-module:** Add removeElement function to types.d.ts (ff60493)
- **dom-module:** Add EventModule import and create test elements (9d44cc8)
- Add security policy for reporting vulnerabilities (a6ee5ce)
- Add release changelog configuration (37b566c)
- Add funding model platforms to FUNDING.yml (b7c5d2b)
- Add GitHub Actions workflow for npm package publishing (fbaa524)
- **dom-module:** Update version comparison in tests (ec9da94)
- **event-module:** Add rollup config for EventModule (07f6a3e)
- **event-module:** Add new build script for core functionality (be0913d)
- Add rollup-core.config.js to .gitignore (041cdcc)
- Add rollup configuration for dom-module (6478734)
- Add build:core script to package.json (a8fdce1)
- Add rollup-core.config.js to .gitignore (49e3a3d)
- Add 'core-module' to pnpm-workspace.yaml (055d5e4)
- Add "core-module" to workspaces in package.json (94cd897)
- Add core-module/ to .gitignore (f22c5c1)
- Add CoreModule type definition (468e89d)
- **core-module:** Add tsconfig.json (992b3b7)
- **core-module:** Add rollup configuration for CoreModule (db3f6d0)
- Add README file for core-module (e955591)
- **core-module:** Add core module package.json configuration (25406f4)
- Add core-module MAINTAINERS.md file (8ee4cb0)
- Add MIT License to core-module/LICENSE (298abd9)
- **core-module:** Add GOVERNANCE.md file 📜 (162320a)
- **core-module:** Add CONTRIBUTING.md file (9399695)
- **core-module:** Add AUTHORS file with Jamil Services emails (6ff134b)
- Add .npmignore file 📦 (536bdc5)
- **core-module:** Add initial .gitignore configuration (60c68e0)
- **core-module/tests:** Add initial tests for CoreModule (8336662)
- **core-module:** Add main module file (3d45054)

### 🩹 Fixes

- Add missing method in EventModule tests (fa793d1)
- Fix missing newline at end of file in event-module/tests/index.js (491dad6)
- **event-module:** Add error handling in removeEventIdFromStore (3063d99)
- **dom-module:** Fix import path for EventModule in index test - Adjusted import path for EventModule in index test to correct src directory. (dd91387)

### 💅 Refactors

- **dom-module:** Update references to EventStore to EventModule in comments and function parameters. (44e80f4)
- **dom-module:** Remove unnecessary comments and descriptions (4f2e626)
- **store:** Improve event handling logic in store code (f173d9e)
- **event-module:** Clean up unnecessary code and comments (2bc7948)
- **store.js:** Rename registerEventStore to addEventToStore and removeEventStore to removeAllEventsFromStore (8c4846c)
- **event-module:** Refactor addEventToStore and removeAllEventsFromStore methods in EventModule (fbd809b)
- **event:** Remove unnecessary comments and descriptions in component.js (a171496)
- Update eventModule tests (961ff50)
- **store:** Improve event handling functions in store.js (36eb12c)
- **event-module:** Update event module test names (cda6f70)
- **event-module:** Improve error handling in removeEventIdFromStore function (2af89b3)
- Add src/component to .gitignore (06f9cf2)
- Add: create .npmignore file to ignore all files in npm package (3a5e2ac)
- Add MAINTAINERS.md file (740722c)
- **dom-module:** Refactor removeElement to use removeElementFromStoreOrEvents function (c1a1ddb)
- **types.d.ts:** Update types in EventModule (445cd09)

### 📦 Build

- Add GitHub Actions workflow for testing and publishing Node.js package (8c983b5)

### 🏡 Chore

- Re-order workspaces in package.json (09ce51a)
- Update npm publish script to publish:modules (89522b2)

### ❤️ Contributors

- JamilServices <jamilservicos@gmail.com>

