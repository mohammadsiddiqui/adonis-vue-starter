import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from '../views/Auth/Login';
import Register from '../views/Auth/Register';
import Home from '../views/Home';

let router = new VueRouter({
    mode: "history",
    routes: [
        { path: '/login', component: Login, name: 'login', meta: { requiredAuth: false } },
        { path: '/register', component: Register, name: 'register', meta: { requiredAuth: false } },
        { path: '/', component: Home, meta: { requiredAuth: true } },
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