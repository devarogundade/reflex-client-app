import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Utils from './plugins/Utils'

import './assets/main.css'
import store from './store/store';

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const app = createApp(App)

app.use(Utils)
app.use(store)
app.use(router)

app.component('VueDatePicker', VueDatePicker)

app.mount('#app')
