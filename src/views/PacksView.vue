<script setup lang="ts">
  import { packsData } from './packs.ts'
</script>


<template>
  <div class="about">
    <h1>This is the packs page</h1>
    <div>
        Here's some packs data:
        <div>
            {{packsData}}
        </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    align-items: center;
  }
}
</style>
