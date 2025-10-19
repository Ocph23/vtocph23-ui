
const route = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/HomeView.vue')
    },
    {
        path: '/button',
        name: 'button',
        component: () => import('../views/ButtonView.vue')
    },
    {
        path: '/input',
        name: 'input',
        component: () => import('../views/InputView.vue')
    }, {
        path: '/table',
        name: 'table',
        component: () => import('../views/TableView.vue')
    }, {
        path: '/test',
        name: 'test',
        component: () => import('../views/TestPage.vue'),
    },

]


export default route;