<script setup lang="ts">
  import { onMounted, ref } from 'vue'

</script>

<template>

    <div class="heading">Fighting Stats Information</div>


    <div class="table-responsive">
        <table class="table table-bordered table.sm">
            <thead>
                <tr>
                    <th scope="col">Troops</th>
                    <th scope="col">Stat</th>
                    <th scope="col">Soft cap %</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>Cavalry/Infantry</td><td>Attack</td><td>325</td></tr>
                <tr><td>Mage/Archer</td>     <td>Attack</td><td>360</td></tr>
                <tr><td>Angel</td>           <td>Attack</td><td>190</td></tr>
                <tr><td>Cavalry/Infantry</td><td>Health</td><td>285</td></tr>
                <tr><td>Mage/Archer</td>     <td>Health</td><td>200</td></tr>
                <tr><td>Angel</td>           <td>Health</td><td>135</td></tr>
                <tr><td>Cavalry/Infantry</td><td>Defense</td><td>155</td></tr>
                <tr><td>Mage/Archer</td>     <td>Defense</td><td>80</td></tr>
                <tr><td>Angel</td>           <td>Defense</td><td>90</td></tr>
            </tbody>
        </table>
    </div>
</template>

<style>
    .heading {
        padding: 1rem;
        font-weight: bold;
    }
    .table {
        min-width: 32rem;
    }

    .accordion {
        min-width: 36rem;
    }
</style>
