import { createApp } from 'vue'
import Index from './Index.vue'
import router from './router/index.js'
import axios from 'axios'

const app = createApp(Index)

app.use(router)
app.config.globalProperties.axios = axios
app.mount('#app')
