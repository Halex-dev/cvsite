import { createRouter, createWebHistory } from 'vue-router'


//TODO Inserire tutti i titoli delle pagine 

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: { title: 'Home' },
        component: () => import('@/views/myHome.vue')
    },
    {
        path: '/projects',
        name: 'Projects',
        meta: { title: 'Projects' },
        component: () => import('@/views/myProjects.vue')
    },
    {
        path: '/home',
        redirect: '/',
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: () => import('@/views/pages/My404Page')
    }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router