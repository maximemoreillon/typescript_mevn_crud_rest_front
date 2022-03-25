<script lang="ts" setup>

import { inject, ref, onMounted} from 'vue'
import { useRouter, useRoute } from 'vue-router'

const axios: any  = inject('axios')  // inject axios
const author = ref(null)

const router = useRouter()
const route = useRoute()
const author_id = route.params._id

const get_author = async () => {
  const {data} = await axios.get(`/authors/${author_id}`)
  author.value = data
}

const update_author = async () => {
  try {
    await axios.patch(`/authors/${author_id}`, author.value)
    alert('OK')
  }
  catch (error) {
    console.error(error)
    alert(error)
  }

}

const delete_author = async () => {
  await axios.delete(`/authors/${author_id}`)
  router.push({name: 'authors'})
}



onMounted(() => {
  get_author()
})



</script>

<template>

  <template v-if="author">
    <h1>{{author['name']}}</h1>
    <p class="toolbar">
      <button @click="delete_author()">Delete author</button>
      <button @click="update_author()">Update author</button>
    </p>
    <p class="">
      <label>Name: </label>
      <input type="text" v-model="author.name">
    </p>
    <p class="">
      <label>Age: </label>
      <input type="number" v-model="author.age">
    </p>
  </template>

</template>

<style>

</style>
