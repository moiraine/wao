<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { marblesRewards, marblesPacks, marblesSkinsEstCost } from './marblesData.ts'

</script>

<template>

    <div class="heading">Joyful Marble Event Information</div>

    <div class="summary">
        Without any spending, you can take 1 fragment per event.
        <br>
        <br>
        If you are a spender, the cheapest way to take 3 fragments is to buy the superior rewards right away on day 1,
        because you will receive double the marbles from the daily quests.
        <br>
        <br>
        The points received is luck-based, but on average, 5000 points is about $6 of marbles. 
        <br>
        <br>
        <strong>Superior rewards will come automatically with 1 fragment</strong>
        <br>
        <br>
    </div>

    <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
            Marbles Rewards
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse">
          <div class="accordion-body">

            <div class="table-responsive">
                <table class="table table-bordered table.sm table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Level</th>
                            <th scope="col">Points</th>
                            <th scope="col">Fragments</th>
                            <th scope="col">Marbles</th>
                            <th scope="col">Cost</th>
                            <th scope="col">Other Rewards</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in marblesRewards">
                            <td>{{item.level}}</td>
                            <td>{{item.pointsNeeded}}</td>
                            <td>{{item.fragments}}</td>
                            <td>{{item.estMarbles}}</td>
                            <td>{{item.estCost}}</td>
                            <td>{{item.otherRewards}}</td>
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
            Marbles Packs
          </button>
        </h2>
        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
          <div class="accordion-body">

                <table class="table table-bordered table.sm table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Level</th>
                            <th scope="col">Cost</th>
                            <th scope="col">Pieces</th>
                            <th scope="col">Daily Cost</th>
                            <th scope="col">Daily Sum</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in marblesPacks">
                            <td>{{item.level}}</td>
                            <td>{{item.cost}}</td>
                            <td>{{item.pieces}}</td>
                            <td>{{item.dailyCost}}</td>
                            <td>{{item.dailySum}}</td>
                        </tr>
                    </tbody>
                </table>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
            Dragon level fragments 
          </button>
        </h2>
        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
          <div class="accordion-body">

            <table class="table table-bordered table.sm table-striped">
                <thead>
                    <tr>
                        <th scope="col">Lvl</th>
                        <th scope="col">Pieces</th>
                        <th scope="col">Total Pieces</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="item in marblesSkinsEstCost">
                        <tr>
                            <td>{{item.level}}</td>
                            <td>{{item.pieces}}</td>
                            <td>{{item.totalPieces}}</td>
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
    .summary {
        padding: 1rem;
        max-width: 48rem;
    }
    .table {
        min-width: 32rem;
    }

    .accordion {
        min-width: 36rem;
    }
</style>
