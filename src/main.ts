import { createApp } from 'vue'
import App from './App.vue'
import router from './router.ts'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)

// I don't like this
app.use(router)
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)  // provide 'axios'
app.mount('#app')
