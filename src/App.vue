<script setup lang="ts">
import Header from './components/Header.vue'
</script>

<template>
  <Header />
  <main class="main">
    <RouterView />
  </main>
</template>

<style scoped>
.main {
  display: flex;
  flex-grow: 1;
  max-width: 1280px;
  margin: 46px auto 0 auto;
  width: 100%;
  background-color: white;
  max-width: 1000px;
}
</style>
