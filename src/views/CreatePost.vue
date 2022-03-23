<script lang="ts" setup>

import { inject, ref} from 'vue'
import { useRouter } from 'vue-router'

const axios: any = inject('axios')
const title :string = ref('')

const router = useRouter()

const api_url = `http://172.16.98.151:7070/posts`

const create_post = async (): void => {
  const body = {title: title.value}
  await axios.post(api_url, body)
  router.push({name: 'posts'})
}





</script>

<template>
  <h1>Create post</h1>
  <form @submit.prevent="create_post()">
    <input 
      type="text" 
      v-model="title"
      placeholder="Title"/>
    <input type="submit" />
  </form>


</template>

<style>

</style>
