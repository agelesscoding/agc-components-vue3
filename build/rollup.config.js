import vue from '@vitejs/plugin-vue'
import css from 'rollup-plugin-css-only'
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import pkg from '../package.json' assert { type: 'json' }

const file = (type) => `dist/index.${type}.js`
const tsconfigOverride = {
  include: ['src/shims-vue.d.ts'],
  compilerOptions: {
    declaration: true,
    paths: {
      '@/*': ['./src/*']
    }
  }
}

/** @type {import('rollup').RollupOptions} */
const config = {
  input: 'src/index.ts',
  output: {
    file: file('esm'),
    format: 'es'
  },
  plugins: [vue(), nodeResolve(), typescript({ tsconfigOverride }), css({ output: 'bundle.css' })],
  external: ['vue', 'lodash-es']
}

export default config
export { pkg, file }
