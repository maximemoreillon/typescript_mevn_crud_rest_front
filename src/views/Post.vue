<script lang="ts" setup>

import { inject, ref, onMounted} from 'vue'
import { useRouter, useRoute } from 'vue-router'

const axios: any  = inject('axios')  // inject axios
const post = ref(null)
const authors = ref([])

const router = useRouter()
const route = useRoute()
const post_id = route.params._id



const get_post = async () => {
  const {data} = await axios.get(`/posts/${post_id}`)
  post.value = data
}

const get_authors = async () => {
  const {data} = await axios.get('/authors')
  authors.value = data
}

const update_post = async () => {
  try {
    const body = {...post.value, author: post.value.author._id}
    await axios.patch(`/posts/${post_id}`, body)
    alert('OK')
  }
  catch (error) {
    console.error(error)
    alert(error)
  }

}

const delete_post = async () => {
  if(!confirm(`Delete post?`)) return
  await axios.delete(`/posts/${post_id}`)
  router.push({name: 'posts'})
}

onMounted(() => {
  get_post()
  get_authors()
})



</script>

<template>

  <template v-if="post">
    <h1>{{post['title']}}</h1>

    <p class="toolbar">
      <button @click="delete_post()">Delete post</button>
      <button @click="update_post()">Update post</button>
    </p>

    <p>
      <label>Author: </label>
      <select v-model="post.author">
        <option
          v-for="(author) in authors"
          :key="author._id"
          :value="author">
          {{author.name}}
        </option>
      </select>
      <router-link
        v-if="post.author"
        :to="{ name: 'author', params: {_id: post.author._id} }">
        See author
      </router-link>
    </p>

    <p>
      <textarea name="name" rows="8" v-model="post.content" />
    </p>


  </template>

</template>

<style>

</style>
