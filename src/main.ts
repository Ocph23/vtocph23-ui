import './assets/main.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'



const route = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...route,
    ]
})


const app = createApp(App)
app.use(router)
app.mount('#app')
