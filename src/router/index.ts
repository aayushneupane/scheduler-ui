import { AboutPage, HomePage } from '../pages'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {

  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router
