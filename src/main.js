import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// S'indica a l'aplicació que farem servir el router
app.use(router)

app.mount('#app')