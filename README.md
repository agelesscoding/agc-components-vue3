# AGC Project Component Library

Vue3 Writing and Packaging AGC Project Component Library.

## Quick Start

Install the business component library to the project:

```sh
$ npm install @agelesscoding/agc-components-vue3
```

or

```sh
$ yarn add @agelesscoding/agc-components-vue3
```

Use in the project:

```ts
// src/main.ts
import agcComponentsVue3 from '@agelesscoding/agc-components-vue3'
import { createApp } from 'vue'
import App from './App.vue'
import '@agelesscoding/agc-components-vue3/dist/bundle.css'

const app = createApp(App)
app.use(agcComponentsVue3)
app.mount('#app')
```

## Features

- Vue3
- TypeScript
- [ ] Unit test
- [ ] Validate before submitting release
- [ ] Travis implements automatic release
