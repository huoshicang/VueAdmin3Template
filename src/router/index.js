import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "about" */ '@/views/IndexView.vue')
  },
  {
    path: '/one',
    name: 'one',
    component: () => import(/* webpackChunkName: "about" */ '@/page/OnePage.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
