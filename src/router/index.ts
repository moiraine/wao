import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/castle',
      name: 'castle',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CastleView.vue'),
    },
    {
      path: '/packs',
      name: 'packs',
      component: () => import('../views/PacksView.vue'),
    },
    {
      path: '/data/titan',
      name: 'titanData',
      component: () => import('../views/data/TitanDataView.vue'),
    },
    {
      path: '/data/jewels',
      name: 'jewelsData',
      component: () => import('../views/data/JewelsDataView.vue'),
    },
    {
      path: '/events/ponies',
      name: 'ponies',
      component: () => import('../views/events/PoniesView.vue'),
    },
    {
      path: '/events/marbles',
      name: 'marbles',
      component: () => import('../views/events/MarblesView.vue'),
    },
  ],
})

export default router
