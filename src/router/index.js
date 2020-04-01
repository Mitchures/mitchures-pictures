import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Iceland from '../views/Iceland'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/iceland',
    name: 'Iceland',
    component: Iceland
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router
