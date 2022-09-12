import { AboutPage, HomePage, LoginPage, SignupPage } from '../pages'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    alias: '/home'
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignupPage
  }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router
