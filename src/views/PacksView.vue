<script setup lang="ts">
  import { Modal } from 'bootstrap'
  import { onMounted, ref, watch } from 'vue'
  import type { Ref } from 'vue'
  import { packsData, listOfPackNames, packsDataObject, Category, Days } from './packs'

  const selectedArtifacts: Ref<{category: string; itemName: string;}[]> = ref([]);
  const selectedDealLevels: Ref<{
    level: number; 
    price: number; 
    pieces: number;
    itemName: string;
    category: Category;
    days: Days[];
  }[]> = ref([]);
  let selectedDealResults = {};

  watch(selectedDealLevels, (newValue) => {
    selectedDealResults = {};
    newValue.forEach((dealLevel) => {
      console.log(dealLevel);
      if (!selectedDealResults[dealLevel.itemName]) {
        selectedDealResults[dealLevel.itemName] = {
          pricePerMonth: 0,
          piecesPerMonth: 0,
        };
      }
      let timesPerMonth = 0;
      switch(dealLevel.category) {
        case Category.DAILY:
          timesPerMonth = 4 * dealLevel.days.length;
          break;
        case Category.WEEKLY:
          timesPerMonth = 4;
          break;
        case Category.MONTHLY:
          timesPerMonth = 1;
          break;
        case Category.TWICEAWEEK:
          timesPerMonth = 8;
          break;
        case Category.LUCKY:
          timesPerMonth = 1;
          break;
      }

      selectedDealResults[dealLevel.itemName].pricePerMonth += dealLevel.price * timesPerMonth;
      selectedDealResults[dealLevel.itemName].piecesPerMonth += dealLevel.pieces * timesPerMonth;
    });
  });

</script>


<template>
  <div class="packs">
    <h1>This is the packs page.  Under Construction.</h1>

    <button data-bs-toggle="modal" data-bs-target="#exampleModal">Click Me</button>

    <div class="modal fade" 
        id="exampleModal" 
        aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-body">

              <div v-for="(categoryItems, category) in packsDataObject">
                <div class="checkbox-section-title">{{ category }}</div>


                <div class="form-check" v-for="(item, itemName) in categoryItems">
                  <input class="form-check-input" type="checkbox" :value="{category: category, itemName: itemName}" :id="itemName + '-checkbox'" v-model="selectedArtifacts">
                  <label class="form-check-label" :for="itemName + '-checkbox'">
                    {{ itemName }}
                  </label>
                </div>
              </div>
              <div class="checkbox-section-title">Artifact</div>

              <div class="form-check">
                <input class="form-check-input" type="checkbox" :value="listOfPackNames.ATHENA" id="athena-checkbox" v-model="selectedArtifacts">
                <label class="form-check-label" for="athena-checkbox">
                  Athena's Aegis
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="brionac" id="brionac-checkbox" v-model="selectedArtifacts">
                <label class="form-check-label" for="brionac-checkbox">
                  Brionac
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="mjolnir" id="mjolnir-checkbox" v-model="selectedArtifacts">
                <label class="form-check-label" for="mjolnir-checkbox">
                  Mjolnir
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="caledfwlch" id="caledfwlch-checkbox" v-model="selectedArtifacts">
                <label class="form-check-label" for="caledfwlch-checkbox">
                  Caledfwlch
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="apollosBow" id="apollosBow-checkbox" v-model="selectedArtifacts">
                <label class="form-check-label" for="apollosBow-checkbox">
                  Apollo's Bow
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="emperorSword" id="emperorSword-checkbox" v-model="selectedArtifacts">
                <label class="form-check-label" for="emperorSword-checkbox">
                  Emperor Sword
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="holyRobe" id="holyRobe-checkbox" v-model="selectedArtifacts">
                <label class="form-check-label" for="holyRobe-checkbox">
                  Holy Robe
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="heavenlySpear" id="heavenlySpear-checkbox" v-model="selectedArtifacts">
                <label class="form-check-label" for="heavenlySpear-checkbox">
                  Heavenly Spear
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="eyeOfHorus" id="eyeOfHorus-checkbox" v-model="selectedArtifacts">
                <label class="form-check-label" for="eyeOfHorus-checkbox">
                  Eye of Horus
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="cupOfJamshid" id="cupOfJamshid-checkbox" v-model="selectedArtifacts">
                <label class="form-check-label" for="cupOfJamshid-checkbox">
                  Cup of Jamshid
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="goldenArmor" id="goldenArmor-checkbox" v-model="selectedArtifacts">
                <label class="form-check-label" for="goldenArmor-checkbox">
                  Golden Armor
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="angelSword" id="angelSword-checkbox" v-model="selectedArtifacts">
                <label class="form-check-label" for="angelSword-checkbox">
                  Angel Sword
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="excalibur" id="excalibur-checkbox" v-model="selectedArtifacts">
                <label class="form-check-label" for="excalibur-checkbox">
                  Excalibur
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="laevateinn" id="laevateinn-checkbox" v-model="selectedArtifacts">
                <label class="form-check-label" for="laevateinn-checkbox">
                  Laevateinn
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="poseidensTrident" id="poseidensTrident-checkbox" v-model="selectedArtifacts">
                <label class="form-check-label" for="poseidensTrident-checkbox">
                  Poseiden's Trident
                </label>
              </div>

              <div class="checkbox-section-title">Equipment</div>

              <div class="checkbox-section-title">Development</div>

              <div class="checkbox-section-title">Beast</div>

              <div class="checkbox-section-title">Titan</div>

              <div class="checkbox-section-title">Star Palace</div>

              <div class="checkbox-section-title">Totem</div>

              <div class="checkbox-section-title">Colossus</div>

          </div>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-deals-definitions" aria-expanded="true" aria-controls="panelsStayOpen-deals-definitions">
            Types of deals
          </button>
        </h2>
        <div id="panelsStayOpen-deals-definitions" class="accordion-collapse collapse">
          <div class="accordion-body">
            <p>Basic Deal: The normal shop which rotates every 3-4 days (available twice per week)</p>
            <p>Daily Deal: Appears every week on specific days</p>
            <p>Weekly Deal: Available once per week</p>
            <p>Monthly Deal: Available once per month</p>
            <p>Lucky Deal: Available under the "limited" category</p>
            <p>Lucky Estimated Frequency: approximately how often the deal will come</p>
          </div>
        </div>
      </div>
    </div>

    <p>Selected artifacts: {{ selectedArtifacts }}</p>

    <div>
      Selected Deals: {{selectedDealResults}}
      <div v-for="(selectedDealResult, itemName) in selectedDealResults">
        {{itemName}}: {{selectedDealResult.pricePerMonth}} {{selectedDealResult.piecesPerMonth}}
      </div>
    </div>

    <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item" v-for="item in selectedArtifacts">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            {{item.itemName}}
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
          <div class="accordion-body">
            <template v-for="deal in packsDataObject[item.category][item.itemName].deals">
              <div v-if="deal.category === Category.EVENTS">
                Also available in Events: {{deal.events}}
              </div>
            </template>

            <table class="table table-bordered table.sm">
              <thead>
                  <tr>
                      <th scope="col"></th>
                      <th scope="col">Lvl</th>
                      <th scope="col">Price</th>
                      <th scope="col">Qty</th>
                      <th scope="col">$/Qty</th>
                      <th scope="col">Deal</th>
                  </tr>
              </thead>

              <tbody>
                <template v-for="deal in packsDataObject[item.category][item.itemName].deals">
                  <tr v-for="level in deal.levels">
                    <td>
                      <input 
                        class="form-check-input" 
                        type="checkbox" 
                        :value="{
                          ...level,
                          itemName: item.itemName,
                          category: deal.category,
                          days: deal.days,
                        }" 
                        v-model="selectedDealLevels">
                    </td>
                    <td>{{level.level}}</td>
                    <td>${{level.price}}</td>
                    <td>{{level.pieces}}</td>
                    <td :set="pricePerPiece = parseFloat((level.price/level.pieces).toPrecision(2))">
                      <template v-if="pricePerPiece > 0.009">${{pricePerPiece.toFixed(2)}}</template>
                      <template v-else>${{pricePerPiece}}</template>
                      
                    </td>
                    <td>
                      <template v-if="deal.category === Category.DAILY">{{deal.days.join(", ")}}</template>
                      <template v-else>{{deal.category}}</template>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<style>
@media (min-width: 1024px) {
  .packs {
    min-height: 100vh;
    align-items: center;
  }
}
</style>
