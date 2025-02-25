import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { getAppRoute, getAppRouteName } from './appRoutes'

const routes = [
  {
    path: getAppRoute('main'),
    name: getAppRouteName('main'),
    component: () => import('../views/MainView.vue')
  },

  {
    path: getAppRoute('help'),
    name: getAppRouteName('help'),
    component: () => import('../views/MainView.vue')
  },
  {
    path: getAppRoute('test'),
    name: getAppRouteName('test'),
    component: () => import('../views/TestView.vue')
  },
  {
    path: getAppRoute('result'),
    name: getAppRouteName('result'),
    component: () => import('../views/ResultView.vue')
  },

  {
    path: '/:pathMatch(.*)*',
    redirect: getAppRoute('main')
  }
] as const satisfies readonly RouteRecordRaw[]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
