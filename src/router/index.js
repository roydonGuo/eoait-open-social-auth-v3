import {createRouter, createWebHistory} from 'vue-router'
import Index from '@/views/index.vue'

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index,
        children: [
            {
                path: "/", name: "index", component: () => import("@/views/index/Index.vue"), meta: {
                    keepAlive: true
                }
            },
            {
                path: "auth", name: "auth", component: () => import("@/views/auth/Index.vue"), meta: {
                    keepAlive: true
                }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
