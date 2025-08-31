import { createRouter, createWebHistory } from 'vue-router'

import { HomeView, DestinationView, CrewView, TechnologyView } from '@/views'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/destination',
      name: 'destination',
      component: DestinationView,
    },
    {
      path: '/crew',
      name: 'crew',
      component: CrewView,
    },
    {
      path: '/technology',
      name: 'technology',
      component: TechnologyView,
    },
  ],
})

export default router
