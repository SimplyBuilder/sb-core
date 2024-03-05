'use strict';

import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';

import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const pkg = require("./package.json");

const libName = 'CoreModule';
const {version} = pkg;

const outputDefault = {
    name: libName,
    format: 'module',
    strict: true,
    generatedCode: {
        preset: 'es5',
        arrowFunctions: true,
        constBindings: true,
        objectShorthand: true,
        symbols: true,
    },
    extend: true,
    validate: true,
    compact: true,
    banner: '/*! ' + libName + ' version ' + version + ' */',
    footer: '/*! https://github.com/SimplyBuilder */'
};
export default {
    input: 'src/main.js',
    output: [
        {
            file: 'lib/main.js',
            ...outputDefault
        },
        {
            file: 'lib/main.min.js',
            plugins: [
                terser({
                    module: true,
                    ecma: 5,
                    keep_classnames: true,
                    keep_fnames: true,
                })
            ],
            ...outputDefault
        }
    ],
    plugins: [
        replace({
            preventAssignment:true,
            'CoreModuleLibName': libName,
            'CoreModuleLibVersion': version
        })
    ]
};