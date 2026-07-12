import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';

export default {
    input: 'index.js',
    output: {
        file: 'index.pack.js',
        format: 'iife',
        name: 'app',
        sourcemap: true
    },
    plugins: [
        svelte({
            emitCss: false,
            compilerOptions: {
                dev: true
            }
        }),
        resolve({
            browser: true,
            dedupe: ['svelte']
        })
    ]
};
