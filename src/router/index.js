import { createRouter, createWebHistory } from 'vue-router'

import LandingView from '@/views/LandingView.vue'
import AppView from '@/views/AppView.vue'
import DaoView from '@/views/DaoView.vue'

import LandingPage from '@/pages/LandingPage.vue'
import AppExplorePage from '@/pages/AppExplorePage.vue'
import DaoDetailPage from '@/pages/DaoDetailPage.vue'
import DaoCreatePage from '@/pages/DaoCreatePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView,
      children: [{
        path: '/',
        name: 'landing',
        component: LandingPage
      }]
    },
    {
      path: '/app',
      name: 'app',
      component: AppView,
      children: [{
        path: '/app',
        name: 'app',
        component: AppExplorePage
      }]
    },
    {
      path: '/app/daos',
      name: 'daos',
      component: DaoView,
      children: [{
        path: '/app/daos/:id',
        name: 'app-daos-dao',
        component: DaoDetailPage
      }, {
        path: '/app/create',
        name: 'app-create',
        component: DaoCreatePage
      }]
    }
  ]
})

export default router
