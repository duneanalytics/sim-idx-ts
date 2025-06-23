import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['src/index.ts'],
    splitting: false,
    sourcemap: true,
    dts: true,
    platform: 'node',
    clean: true,
    format: ['cjs', 'esm'],
    outExtension({ format }) {
        return {
            js: format === 'esm' ? '.mjs' : '.js',
        }
    },
})