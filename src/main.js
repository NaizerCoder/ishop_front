import { createApp } from 'vue'
import Index from './Index.vue'
import router from './router/index.js'

const app = createApp({
    el: '#app',
    components:{
        'index': Index
    }
});

app.use(router)
app.mount('#app')
