import Home from "../views/Home.vue";
import ButtonView from "../views/ButtonView.vue";
import Ocph from "../views/Ocph.vue";
import InputView from "../views/InputView.vue";
import TableView from "../views/TableView.vue";
import TestPage from "../views/TestPage.vue";


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
    {
        path: '/button',
        name: 'button',
        component: ButtonView,
    },
    {
        path: '/input',
        name: 'input',
        component: InputView,
    }, {
        path: '/table',
        name: 'table',
        component: TableView,
    }, {
        path: '/test',
        name: 'test',
        component: TestPage,
    },

]


export default route;