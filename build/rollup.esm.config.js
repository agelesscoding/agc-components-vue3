import basicConfig, { file } from './rollup.config.js'

/** @type {import('rollup').RollupOptions} */
const config = {
  ...basicConfig,
  output: {
    name: 'index',
    file: file('esm'),
    format: 'es'
  }
}

export default config