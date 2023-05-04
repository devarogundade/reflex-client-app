import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Utils from './plugins/Utils'

import './assets/main.css'
import store from './store/store';

const app = createApp(App)

app.use(Utils)
app.use(store)
app.use(router)

app.mount('#app')
