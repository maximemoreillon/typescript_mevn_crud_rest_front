<script lang="ts" setup>

import { inject, ref, onMounted} from 'vue'
import { useRouter, useRoute } from 'vue-router'

const axios: any = inject('axios')  // inject axios
const post :any = ref(null)

const router = useRouter()
const route = useRoute()
const post_id : string = route.params._id

const api_url = `http://172.16.98.151:7070/posts/${post_id}`

const delete_post = async (): void => {
  await axios.delete(api_url)
  router.push({name: 'posts'})
}

const get_post = async (): void => {
  const {data} = await axios.get(api_url)
  post.value = data
}

onMounted(() => {
  get_post()
})



</script>

<template>
  <h1>Post</h1>
  <div class="toolbar">
    <button @click="delete_post()">DELETE post</button>
  </div>
  <template v-if="post">
    <h2>{{post.title}}</h2>
    <p>Author: {{post.author}}</p>
    <p>
      {{post.content}}
    </p>
  </template>

</template>

<style>

</style>
