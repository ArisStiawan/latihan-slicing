import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import BlogView from '@/views/BlogView.vue'
import ContactView from '@/views/ContactView.vue'
import PrivacyView from '@/views/PrivacyView.vue'
import BlogPostView from '@/views/BlogPostView.vue'
import CategoryView from '@/views/CategoryView.vue'
import AuthorView from '@/views/AuthorView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/About',
      name: 'About',
      component: AboutView,
    },
    {
      path: '/Blog',
      name: 'Blog',
      component: BlogView,
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: ContactView,
    },
    {
      path: '/Privacy',
      name: 'Privacy',
      component: PrivacyView,
    },
    {
      path: '/BlogPost',
      name: 'BlogPost',
      component: BlogPostView,
    },
    {
      path: '/Category',
      name: 'Category',
      component: CategoryView,
    },
    {
      path: '/AuthorView',
      name: 'AuthorView',
      component: AuthorView,
    },
  ],
})

export default router
