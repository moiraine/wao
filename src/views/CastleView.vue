<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { castleUpgradesData1to30, castleUpgradesData30plus } from './castleUpgrades.ts'

</script>

<template>

    <div>List of Castle Requirements</div>

    

    <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
            C1 to C30
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse">
          <div class="accordion-body">

            <div class="table-responsive">
                <table class="table table-bordered table.sm table-striped">
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
                        <tr v-for="item in castleUpgradesData1to30">
                            <td>{{item.castle}}</td>
                            <td>{{item.foodAndWood}}</td>
                            <td>{{item.stone}}</td>
                            <td>{{item.iron}}</td>
                            <td>{{item.azurite}}</td>
                            <td>{{item.requirement}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
            C30 and higher
          </button>
        </h2>
        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
          <div class="accordion-body">

                <table class="table table-bordered table.sm table-striped">
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
                        <tr v-for="item in castleUpgradesData30plus">
                            <td>{{item.castle}}</td>
                            <td>{{item.foodAndWood}}</td>
                            <td>{{item.stone}}</td>
                            <td>{{item.iron}}</td>
                            <td>{{item.azurite}}</td>
                            <td>{{item.requirement}}</td>
                        </tr>
                    </tbody>
                </table>
          </div>
        </div>
      </div>
    </div>
</template>

<style>
    .table {
        min-width: 32rem;
    }

    .accordion {
        min-width: 36rem;
    }
</style>
