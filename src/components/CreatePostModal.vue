<script setup lang="ts">

import { inject, ref } from 'vue'
import { useRouter } from 'vue-router'

const axios: any  = inject('axios')

const show = ref(false)
const post = ref({
  title: ''
})

const router = useRouter()

const create_post = async () => {
  try {
    const route = '/posts'
    const body = post.value
    const {data: {_id}} = await axios.post(route, body)
    router.push({name: 'post', params: {_id}})
  }
  catch (error) {
    alert(error)
    console.error(error)
  }

}

</script>

<template>

<button
  type="button"
  @click="show = true">
  Create post
</button>

<div
  class="modal"
  v-if="show"
  @click.self="show = false">

  <div class="modal_content">
    <h2>Create post</h2>
    <form @submit.prevent="create_post()">
      <input
        type="text"
        v-model="post.title"
        placeholder="Title"/>
      <input type="submit" />
    </form>
  </div>

</div>

</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  index: 5;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal_content {
  background-color: white;
  padding: 1em;
}
</style>
