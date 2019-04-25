import Vue from 'vue';
import VueRouter from 'vue-router';

import Base from './Base.vue';
import VueAuth from './packages/auth';
import VueHttp from './packages/axios';
import router from './router';
import store from './store';


Vue.use(VueRouter)
Vue.use(VueAuth)
Vue.use(VueHttp)

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(Base)
})