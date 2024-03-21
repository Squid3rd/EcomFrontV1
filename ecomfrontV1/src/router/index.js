import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../views/Home.vue';
import ProductView from '../components/Page/Product.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/product', component: ProductView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})