import AgcText from './components/AgcText'
import AgcImage from './components/AgcImage'
import type { App } from 'vue'

export {
  textDefaultProps,
  textStylePropNames,
  imageDefaultProps,
  imageStylePropsNames
} from './defaultProps'
export type { TextComponentProps, ImageComponentProps } from './defaultProps'

const components = [AgcText, AgcImage]

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export { AgcText, AgcImage, install }
export default {
  install
}
