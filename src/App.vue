<script setup lang="ts">

</script>

<template>
  <header>
    TypeScript MEVN CRUD REST
  </header>
  <nav>
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'authors' }">Authors</router-link>
    <router-link :to="{ name: 'posts' }">Posts</router-link>
  </nav>
  <main>
    <router-view />
  </main>
</template>

<style>

body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

#app {
  height: 100vh;
  display: grid;

  grid-template-areas:
    'header header'
    'nav main';

  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr;
}

nav {
  grid-area: nav;

  display: flex;
  flex-direction: column;
  border-right: 1px solid #dddddd;
}

nav a {
  padding: 0.5em;
  text-align: center;
  text-decoration: none;
  color: inherit;
}

header {
  grid-area: header;
  background-color: #444444;
  color: white;
  font-size: 150%;
  padding: 0.5em;
}

main {
  grid-area: main;
  margin: 0.5em;
}





</style>
