import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import livereload from 'rollup-plugin-livereload';
import builtins from 'rollup-plugin-node-builtins';
import { terser } from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve';
import svg from 'rollup-plugin-svg-import';

// eslint-disable-next-line no-undef
const production = !process.env.ROLLUP_WATCH;

console.log(production);

export default {
    input: 'src/index.js',
    output: {
        sourcemap: !production,
        format: 'iife',
        name: 'app',
        file: 'dist/bundle.js',
    },
    plugins: [
        svg({
            stringify: true,
        }),
        svelte({
            compilerOptions: {
                dev: !production,
            },
            emitCss: false,
        }),
        resolve({
            preferBuiltins: false,
            browser: true,
        }),
        commonjs(),
        json(),
        serve('dist'),
        builtins(),
        babel({
            runtimeHelpers: true,
            extensions: ['.js', '.mjs', '.html', '.svelte'],
        }),
        !production && livereload('dist/'),
        production && terser(),
    ],
    watch: {
        clearScreen: false,
    },
};
