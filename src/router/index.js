import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Iceland from '../views/Iceland'
import Canada from '../views/Canada'
import Japan from '../views/Japan'
import Asheville from '../views/Asheville'
import Nashville from '../views/Nashville'
import Nola from '../views/Nola'

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
  },
  {
    path: '/canada',
    name: 'Canada',
    component: Canada
  },
  {
    path: '/japan',
    name: 'Japan',
    component: Japan
  },
  {
    path: '/asheville',
    name: 'Asheville',
    component: Asheville
  },
  {
    path: '/nashville',
    name: 'Nashville',
    component: Nashville
  },
  {
    path: '/neworleans',
    name: 'New Orleans',
    component: Nola
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router
