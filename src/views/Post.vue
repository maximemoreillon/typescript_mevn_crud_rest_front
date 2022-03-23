<script lang="ts" setup>

import { inject, ref} from 'vue'

const axios: any = inject('axios')  // inject axios
const post :any = ref(null)
const post_id : string = '1'

const api_url = `http://172.16.98.151:7070/posts/${post_id}`

const delete_post = async (): void => {
  await axios.delete(url)
}

const read_post = async (): void => {
  const {data} = await axios.get(api_url)
  posts.value.splice(0,posts.value.length)
  data.forEach(post => { posts.value.push(post) })
  
}



</script>

<template>
  <h1>Post</h1>
  <div class="toolbar">
    <button @click="read_post()">GET post</button>
    <button @click="delete_post()">DELETE post</button>
  </div>

</template>

<style>

</style>
