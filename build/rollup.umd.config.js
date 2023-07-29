import basicConfig, { file } from './rollup.config.js'

/** @type {import('rollup').RollupOptions} */
const config = {
  ...basicConfig,
  output: {
    name: 'index',
    file: file('umd'),
    format: 'umd',
    exports: 'named',
    globals: {
      vue: 'Vue',
      'lodash-es': '_'
    }
  }
}

export default config
