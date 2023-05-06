import { createRouter, createWebHistory } from 'vue-router'

import LandingView from '@/views/LandingView.vue'
import AppView from '@/views/AppView.vue'
import DaoView from '@/views/DaoView.vue'

import LandingPage from '@/pages/LandingPage.vue'
import AppExplorePage from '@/pages/AppExplorePage.vue'
import DaoDetailPage from '@/pages/DaoDetailPage.vue'
import DaoCreatePage from '@/pages/DaoCreatePage.vue'
import ProposalCreatePage from '@/pages/ProposalCreatePage.vue'
import DaoMemberPage from '@/pages/DaoMemberPage.vue'
import DaoGovernancePage from '@/pages/DaoGovernancePage.vue'
import DaoMemberAddPage from '@/pages/DaoMemberAddPage.vue'
import DaoMemberFundPage from '@/pages/DaoMemberFundPage.vue'
import ProposalDetailPage from '@/pages/ProposalDetailPage.vue'
import DaoTreasurePage from '@/pages/DaoTreasurePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
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
      }, {
        path: '/app/create',
        name: 'app-create',
        component: DaoCreatePage
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
        path: '/app/daos/:id/governance',
        name: 'app-daos-dao-governance',
        component: DaoGovernancePage
      }, {
        path: '/app/daos/:id/treasure',
        name: 'app-daos-dao-treasure',
        component: DaoTreasurePage
      }, {
        path: '/app/daos/:id/governance/:pid',
        name: 'app-daos-dao-governance-proposal',
        component: ProposalDetailPage
      }, {
        path: '/app/daos/:id/governance/create',
        name: 'app-daos-dao-governance-create',
        component: ProposalCreatePage
      }, {
        path: '/app/daos/:id/members',
        name: 'app-daos-dao-members',
        component: DaoMemberPage
      }, {
        path: '/app/daos/:id/members/add',
        name: 'app-daos-dao-members-add',
        component: DaoMemberAddPage
      }, {
        path: '/app/daos/:id/treasure/fund',
        name: 'app-daos-dao-treasure-fund',
        component: DaoMemberFundPage
      }]
    }
  ]
})

export default router
