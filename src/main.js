import './index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './firebase/init'

createApp(App).use(router).mount('#app')
