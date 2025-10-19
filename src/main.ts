import './assets/main.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import route from './router/route'



const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...route,
    ]
})


const app = createApp(App)
app.use(router)
app.mount('#app')
