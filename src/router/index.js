import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views'
import Iceland from '../views/Iceland'
import Canada from '../views/Canada'
import Japan from '../views/Japan'
import Tokyo from '../views/Japan/Tokyo'
import Kyoto from '../views/Japan/Kyoto'
import Nara from '../views/Japan/Nara'
import Osaka from '../views/Japan/Osaka'
import UnitedStates from '../views/UnitedStates'
import Asheville from '../views/UnitedStates/Asheville'
import Nashville from '../views/UnitedStates/Nashville'
import Nola from '../views/UnitedStates/NewOrleans'

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
    path: '/tokyo',
    name: 'Tokyo',
    component: Tokyo
  },
  {
    path: '/kyoto',
    name: 'Kyoto',
    component: Kyoto
  },
  {
    path: '/nara',
    name: 'Nara',
    component: Nara
  },
  {
    path: '/osaka',
    name: 'Osaka',
    component: Osaka
  },
  {
    path: '/unitedstates',
    name: 'UnitedStates',
    component: UnitedStates
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
    name: 'NewOrleans',
    component: Nola
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router
