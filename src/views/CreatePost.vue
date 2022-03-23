<script lang="ts" setup>

import { inject, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const axios: any  = inject('axios')

const title = ref('')
const author = ref(null)
const authors = ref([])

const get_authors = async () => {
  const {data} = await axios.get('/authors')
  authors.value = data
}

onMounted( () => {
  get_authors()
})


const router = useRouter()

const create_post = async () => {
  const body = {
    title: title.value,
    author: author.value,
  }
  await axios.post('/posts', body)
  router.push({name: 'posts'})
}





</script>

<template>
  <h1>Create post</h1>
  <form @submit.prevent="create_post()">
    <select v-model="author">
      <option
        v-for="(author, i) in authors"
        :value="author['_id']">
        {{author['name']}}
      </option>
    </select>
    <input
      type="text"
      v-model="title"
      placeholder="Title"/>
    <input type="submit" />
  </form>


</template>

<style>

</style>
