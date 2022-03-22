import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './views/Home.vue'
import Authors from './views/Authors.vue'
import Posts from './views/Posts.vue'

const routes : any[] = [
  {path: '/', name: 'home', component: Home},
  {path: '/authors', name: 'authors', component: Authors},
  {path: '/posts', name: 'posts', component: Posts},

]



const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

export { router }
