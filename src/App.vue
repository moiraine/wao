<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import HelloWorld from './components/HelloWorld.vue'
</script>

<template>


  <nav class="navbar navbar-expand-xs bg-body-tertiary">
    <ul class="nav">
      <li class="nav-item">
          <RouterLink class="nav-link active" to="/castle">Castle</RouterLink>
      </li>
      <li class="nav-item">
          <RouterLink class="nav-link" to="/packs">Packs</RouterLink>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Events
        </a>
        <ul class="dropdown-menu">
          <li>
            <RouterLink class="dropdown-item" to="/events/ponies">Ponies</RouterLink>
          </li>
          <li>
            <RouterLink class="dropdown-item" to="/events/marbles">Marbles</RouterLink>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Data
        </a>
        <ul class="dropdown-menu">
          <li>
            <RouterLink class="dropdown-item" to="/data/titan">Titan</RouterLink>
          </li>
          <li>
            <RouterLink class="dropdown-item" to="/data/jewels">Jewels</RouterLink>
          </li>
        </ul>
      </li>
    </ul>
  </nav>


  <RouterView />
</template>

<style scoped>



</style>
