import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeRoute',
    component: () => import(/* webpackChunkName: "homeview" */ '../views/HomeView.vue')
  },
  {
    path: '/product/:id',
    name: 'ProductDetailRoute',
    component: () => import(/* webpackChunkName: "productdetailview" */ '../views/ProductDetailView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  // base: process.env.BASE_URL,
  routes
})

export default router
