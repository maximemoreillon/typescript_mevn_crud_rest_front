<script lang="ts" setup>

import { inject, ref} from 'vue'

const axios: any = inject('axios')  // inject axios


const posts :any[] = ref([])

const create_post = async (): void => {
  const url = 'http://172.16.98.151:7070/posts'
  await axios.post(url)
}

const read_posts = async (): void => {
  const url = 'http://172.16.98.151:7070/posts'
  const {data} = await axios.get(url)
  posts.value.splice(0,posts.value.length)
  data.forEach(post => { posts.value.push(post) })
  
}



</script>

<template>
  <h1>Posts</h1>
  <div class="toolbar">
    <button @click="read_posts()">GET posts</button>
    <button @click="create_post()">POST post</button>
  </div>

  <ul>
    <li v-for="({title, _id}, i) in posts" :key="i">
      <router-link :to="{ name: 'post', params: {_id} }">{{title}}</router-link>
      
    </li>
  </ul>
</template>

<style>

</style>
