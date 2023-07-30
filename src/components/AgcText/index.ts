import AgcText from './AgcText.vue'
import type { App } from 'vue'

AgcText.install = (app: App) => {
  app.component(AgcText.name, AgcText)
}

export default AgcText
