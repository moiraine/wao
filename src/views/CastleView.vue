<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { castleUpgradesData1to30, castleUpgradesData30plus } from './castleUpgrades.ts'

</script>

<template>

    <div class="heading">List of Castle Requirements</div>

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
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
            C30+ and Tier requirement details 
          </button>
        </h2>
        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
          <div class="accordion-body">

                <table class="table table-bordered table.sm table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Lvl</th>
                            <th scope="col">F/W</th>
                            <th scope="col">Stone</th>
                            <th scope="col">Iron</th>
                            <th scope="col">Azurite</th>
                            <th scope="col">Req</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="item in castleUpgradesData30plus">
                            <tr>
                                <td>{{item.castle}}</td>
                                <td>{{item.foodAndWood}}</td>
                                <td>{{item.stone}}</td>
                                <td>{{item.iron}}</td>
                                <td>{{item.azurite}}</td>
                                <td>{{item.requirement}}</td>
                            </tr>
                            <tr>
                                <td colspan="6">
                                    {{item.requirement}} resources

                                    <table class="table mb-0 table-bordered table.sm">
                                        <thead>
                                            <tr>
                                                <th scope="col">Lvl</th>
                                                <th scope="col">Food</th>
                                                <th scope="col">Wood</th>
                                                <th scope="col">Stone</th>
                                                <th scope="col">Iron</th>
                                                <th scope="col">Azurite</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="expandedItem in item.expanded">
                                                <td>{{expandedItem.level}}</td>
                                                <td>{{expandedItem.food}}</td>
                                                <td>{{expandedItem.wood}}</td>
                                                <td>{{expandedItem.stone}}</td>
                                                <td>{{expandedItem.iron}}</td>
                                                <td>{{expandedItem.azurite}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    
                                    Maximum Azurite Required: {{parseInt(item.azurite) + (item.expanded.reduce((acc, curr) => (acc + parseInt(curr.azurite)), 0))}}
                                    <br>
                                    Total Food: {{parseInt(item.foodAndWood) + (item.expanded.reduce((acc, curr) => (acc + parseInt(curr.food)), 0))}}M
                                    <br>
                                    Total Wood: {{parseInt(item.foodAndWood) + (item.expanded.reduce((acc, curr) => (acc + parseInt(curr.wood)), 0))}}M
                                    <br>
                                    Total Stone: {{parseInt(item.stone) + (item.expanded.reduce((acc, curr) => (acc + parseInt(curr.stone)), 0))}}M
                                    <br>
                                    Total Iron: {{parseInt(item.iron) + (item.expanded.reduce((acc, curr) => (acc + parseInt(curr.iron)), 0))}}M
                                    <br>
                                </td>
                            </tr>
                        </template>
                    </tbody>
                </table>
          </div>
        </div>
      </div>
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
