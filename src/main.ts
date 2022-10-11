import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

import 'normalize.css/normalize.css'
import '@/assets/styles/vars.scss'
import '@/assets/styles/main.scss'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
