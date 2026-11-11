import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.css'

const app = createApp(App)

// S'indica que s'utilitza el router
app.use(router)

app.mount('#app')