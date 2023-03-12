import HomePage from './components/HomePage.vue';
import SignUp from './components/SingUp.vue';
import LoginPage from './components/LoginPage.vue';
import AddResturant from './components/AddResturant.vue'
import UpdateResturant from './components/UpdateResturant.vue'

import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        name: HomePage,
        component: HomePage,
        path: '/'
    },
    {
        name: SignUp,
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: LoginPage,
        component: LoginPage,
        path: '/login'
    },
    {
        name: AddResturant,
        component: AddResturant,
        path: '/add-restaurant'
    },
    {
        name: UpdateResturant,
        component: UpdateResturant,
        path: '/update-restaurant/:id'
    },
]
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router
