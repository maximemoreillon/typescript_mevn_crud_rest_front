<script lang="ts" setup>

import { inject, ref, onMounted } from 'vue'

const axios: any = inject('axios')  // inject axios


const posts :any[] = ref([])

const read_posts = async (): void => {
  const url = 'http://172.16.98.151:7070/posts'
  const {data} = await axios.get(url)
  posts.value = data 
}

onMounted( () => {
  read_posts()
})



</script>

<template>
  <h1>Posts</h1>
  <div class="toolbar">
    <router-link :to="{ name: 'create_post' }">Create post</router-link>
  </div>

  <ul>
    <li v-for="({title, _id}, i) in posts" :key="i">
      <router-link :to="{ name: 'post', params: {_id} }">{{title}}</router-link>
      
    </li>
  </ul>
</template>

<style>

</style>
