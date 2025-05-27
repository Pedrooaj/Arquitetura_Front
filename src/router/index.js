// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Produtos from '../views/Produtos.vue'
import Adicionar from '../views/Adicionar.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/produtos', name: 'Produtos', component: Produtos },
  { path: '/adicionar', name: "Adicionar", component: Adicionar }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
