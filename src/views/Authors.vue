<script lang="ts" setup>

import { inject, ref, onMounted } from 'vue'

const axios: any  = inject('axios')  // inject axios

const authors = ref([])

const get_authors = async () => {
  const {data} = await axios.get('/authors')
  authors.value = data
}

onMounted( () => {
  get_authors()
})



</script>

<template>
  <h1>Authors</h1>
  <div class="toolbar">
    <router-link :to="{ name: 'create_author' }">Create author</router-link>
  </div>

  <ul>
    <li v-for="({name, _id}, i) in authors" :key="i">
      <router-link :to="{ name: 'author', params: {_id} }">{{name}}</router-link>

    </li>
  </ul>
</template>

<style>

</style>
