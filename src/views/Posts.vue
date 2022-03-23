<script lang="ts" setup>

import { inject, ref, onMounted } from 'vue'

const axios: any  = inject('axios')  // inject axios


const posts = ref([])

const read_posts = async () => {
  const {data} = await axios.get('/posts')
  posts.value = data
}

onMounted( () => {
  read_posts()
})



</script>

<template>
  <h1>Posts</h1>

  <p class="toolbar">
    <router-link :to="{ name: 'create_post' }">
      Create post
    </router-link>
  </p>

  <table>
    <tr>
      <th>Title</th>
      <th>Author</th>
    </tr>
    <tr
      v-for="({title, author, _id}, i) in posts"
      :key="i">
      <td>
        <router-link :to="{ name: 'post', params: {_id} }">
          {{title}}
        </router-link>
      </td>
      <td>
        <router-link
          v-if="author"
          :to="{ name: 'author', params: {_id: author._id} }">
          {{author.name}}
        </router-link>
      </td>
    </tr>
  </table>

</template>

<style>
table {
  width: 100%;
  border-collapse: collapse;
}
tr {
  border-bottom: 1px solid #dddddd;
}

td {
  text-align: center;
}

th, td {
  padding: 0.25em;
}
</style>
