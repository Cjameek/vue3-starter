import { createApp } from 'vue'
import App from './App.vue'
import { plugin, defaultConfig } from '@formkit/vue'

import './assets/main.css'

createApp(App).use(plugin, defaultConfig).mount('#app')
// remember, each Vue plugin needs its own .use()
// .use(router).use(plugin2)