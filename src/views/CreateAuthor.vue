<script lang="ts" setup>

import { inject, ref} from 'vue'
import { useRouter } from 'vue-router'

const axios: any  = inject('axios')
const name = ref('')

const router = useRouter()

const api_url = `/authors`

const create_author = async () => {
  try {
    const body = {name: name.value}
    await axios.post('/authors', body)
    router.push({name: 'authors'})
  } catch (error) {
    console.log(error);

  }

}





</script>

<template>
  <h1>Create author</h1>
  <form @submit.prevent="create_author()">
    <input
      type="text"
      v-model="name"
      placeholder="Name"/>
    <input type="submit" />
  </form>


</template>

<style>

</style>
