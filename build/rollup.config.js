import vue from '@vitejs/plugin-vue'
import css from 'rollup-plugin-css-only'
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import pkg from '../package.json' assert { type: 'json' }

const file = (type) => `dist/${pkg.name}.${type}.js`

/** @type {import('rollup').RollupOptions} */
const config = {
  input: 'src/components/AgcText/AgcText.vue',
  output: {
    file: file('esm'),
    format: 'es'
  },
  plugins: [
    vue(),
    nodeResolve(),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
          paths: {
            '@/*': ['./src/*']
          }
        }
      }
    }),
    css({ output: 'bundle.css' })
  ],
  external: ['vue', 'lodash-es']
}

export default config
