import { AboutPage, HomePage, LoginPage, SignupPage } from '../pages'
import { createRouter, createWebHistory } from 'vue-router'

import { getCurrentUser } from '../pages/Auth/utils'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    alias: '/home',
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/signin',
    name: 'Login',
    component: LoginPage,
    alias: '/signout'
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignupPage
  }
]

const router = createRouter({ history: createWebHistory(), routes })
router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser() != null) {
      next()
    } else {
      console.log('You dont have access!')
      next('/signin')
    }
  } else {
    next()
  }
})
export default router
