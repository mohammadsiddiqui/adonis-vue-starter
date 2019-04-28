import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from '../views/Auth/Login';
import Register from '../views/Auth/Register';
import Home from '../views/Home';
import UI5 from '../views/UI5';

let router = new VueRouter({
    mode: "history",
    routes: [
        { path: '/login', component: Login, name: 'login', meta: { requiredAuth: false } },
        { path: '/register', component: Register, name: 'register', meta: { requiredAuth: false } },
        { path: '/home', component: Home, meta: { requiredAuth: true } },
        { path: '/', component: UI5, meta: { requiredAuth: false } },
    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiredAuth)) {
        if (Vue.auth.isAuthenticated()) next()
        else next({ path: '/login' })
    } else {
        next()
    }

})

export default router;