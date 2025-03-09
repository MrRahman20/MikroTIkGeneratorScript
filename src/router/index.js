import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import GeneratorPage from '../pages/GeneratorPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/generator',
    name: 'Generator',
    component: GeneratorPage
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
