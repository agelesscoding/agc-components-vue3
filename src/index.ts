import AgcText from './components/AgcText'
import type { App } from 'vue'

export { textDefaultProps, textStylePropNames, imageDefaultProps, imageStylePropsNames } from './defaultProps'
export type { TextComponentProps, ImageComponentProps } from './defaultProps'

const components = [
  AgcText,
]

const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export {
  AgcText,
  install
}
export default {
  install
}