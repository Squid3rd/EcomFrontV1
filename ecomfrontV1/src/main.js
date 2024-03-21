import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import './style.css'
import App from './App.vue'

// Page
import HomeView from './views/HomeView.vue'
import ProductView from './views/ProductView.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/products', component: ProductView },
  ]

  const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })

createApp(App).use(router).mount('#app')
