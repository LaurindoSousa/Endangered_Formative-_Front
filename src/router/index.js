import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/animals',
      name: 'app.vue',
      component: () => import('../App.vue')
    }
    
  ]
});

export default router
