<script lang="ts" setup>

import { inject, ref, onMounted} from 'vue'
import { useRouter, useRoute } from 'vue-router'

const axios: any  = inject('axios')  // inject axios
const author = ref(null)

const router = useRouter()
const route = useRoute()
const author_id = route.params._id


const delete_post = async () => {
  await axios.delete(`/authors/${author_id}`)
  router.push({name: 'posts'})
}

const get_post = async () => {
  const {data} = await axios.get(`/authors/${author_id}`)
  author.value = data
}

onMounted(() => {
  get_post()
})



</script>

<template>

  <template v-if="author">
    <h1>{{author['name']}}</h1>
    <div class="toolbar">
      <button @click="delete_post()">DELETE author</button>
    </div>
  </template>

</template>

<style>

</style>
