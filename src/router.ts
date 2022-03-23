import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './views/Home.vue'
import Authors from './views/Authors.vue'
import Author from './views/Author.vue'
import CreateAuthor from './views/CreateAuthor.vue'

import Posts from './views/Posts.vue'
import Post from './views/Post.vue'
import CreatePost from './views/CreatePost.vue'

const routes : any[] = [
  {path: '/', name: 'home', component: Home},
  {path: '/authors', name: 'authors', component: Authors},
  {path: '/authors/new', name: 'create_author', component: CreateAuthor},
  {path: '/authors/:_id', name: 'author', component: Author},
  {path: '/posts', name: 'posts', component: Posts},
  {path: '/posts/new', name: 'create_post', component: CreatePost},
  {path: '/posts/:_id', name: 'post', component: Post},
]



const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

export default router
