<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <ul class="nav">
    <li class="nav-item">
        <RouterLink class="nav-link active" to="/">Home</RouterLink>
    </li>
    <li class="nav-item">
        <RouterLink class="nav-link" to="/castle">Castle</RouterLink>
    </li>
    <li class="nav-item">
        <RouterLink class="nav-link" to="/packs">Packs</RouterLink>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" aria-disabled="true">Disabled</a>
    </li>
  </ul>
  <RouterView />
</template>

<style scoped>



</style>
