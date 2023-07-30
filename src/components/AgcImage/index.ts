import AgcImage from './AgcImage.vue'
import type { App } from 'vue'

AgcImage.install = (app: App) => {
  app.component(AgcImage.name, AgcImage)
}

export default AgcImage
