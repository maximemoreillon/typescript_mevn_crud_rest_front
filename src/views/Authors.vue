<script lang="ts" setup>

import { inject, ref, onMounted } from 'vue'
import CreateAuthorModal from '../components/CreateAuthorModal.vue'

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
  <p class="toolbar">
    <CreateAuthorModal />
  </p>

  <table>
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
    <tr
      v-for="({name, age, _id}, i) in authors"
      :key="i">
      <td>
        <router-link :to="{ name: 'author', params: {_id} }">
          {{name || 'Unnnamed'}}
        </router-link>
      </td>
      <td>
        {{age || 'Unknown'}}
      </td>
    </tr>
  </table>

</template>

<style>

</style>
