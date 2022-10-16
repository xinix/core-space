import '@/assets/styles/main.scss'

import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import i18n from '@/i18n'
import { createPinia } from 'pinia'
import { setupRouter } from '@/router'
import components from '@/components'

const pinia = createPinia()
const app = createApp(App)
const router = setupRouter()

// *** Load global components: THE ICONS */
Object.entries(components).forEach(([name, component]) =>
    app.component(name, defineAsyncComponent(component))
)

app.use(i18n)
app.use(pinia)
app.use(router)
app.mount('#app')
