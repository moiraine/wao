<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { castleUpgradesData } from './castleUpgrades.ts'

</script>

<template>
    <table class="table">
    <thead>
        <tr>
            <th scope="col">C Lvl</th>
            <th scope="col">F/W</th>
            <th scope="col">Stone</th>
            <th scope="col">Iron</th>
            <th scope="col">Azurite</th>
            <th scope="col">Req</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="item in castleUpgradesData">
            <td>{{item.castle}}</td>
            <td>{{item.foodAndWood}}</td>
            <td>{{item.stone}}</td>
            <td>{{item.iron}}</td>
            <td>{{item.azurite}}</td>
            <td>{{item.requirement}}</td>
        </tr>
    </tbody>
  </table>
</template>