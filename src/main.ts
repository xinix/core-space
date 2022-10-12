import 'normalize.css/normalize.css'
import '@/assets/styles/vars.scss'
import '@/assets/styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import i18n from '@/i18n'
import { createPinia } from 'pinia'
import { loadGlobalComponents } from '@/components'

const pinia = createPinia()
const app = createApp(App)

loadGlobalComponents(app)

app.use(i18n)
app.use(pinia)
app.mount('#app')
