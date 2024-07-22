import './assets/main.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Ocph from './views/Ocph.vue'



const route = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/ocph',
        name: 'ocph',
        component: Ocph,
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
