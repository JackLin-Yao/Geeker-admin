import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'normalize.css'
import 'element-plus/dist/index.css'
import 'nprogress/nprogress.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// import SvgIcon from './components/svg/SvgIcon.vue'
import 'virtual:svg-icons-register'

const app = createApp(App)
// app.component('svg-icon', SvgIcon)

app.use(createPinia())
app.use(router)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
