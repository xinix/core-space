import { createApp } from 'vue'
import App from './App.vue'

import 'normalize.css/normalize.css'
import '@/assets/styles/vars.scss'
import '@/assets/styles/main.scss'

import router from '@/router'

createApp(App).use(router).mount('#app')
