import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/home.vue'
import About from '@/views/about'
import AdminEbook from "@/views/admin/admin-ebook";
import AdminCategory from "@/views/admin/admin-category";
import AdminDoc from "@/views/admin/admin-doc";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/admin/ebook',
        name: 'AdminEbook',
        component: AdminEbook
    },
    {
        path: '/admin/category',
        name: 'AdminCategory',
        component: AdminCategory
    },
    {
        path: '/admin/doc',
        name: 'AdminDoc',
        component: AdminDoc
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
