<script setup lang="ts">
  import { Modal } from 'bootstrap'
  import { onMounted, ref } from 'vue'
  import { packsData, listOfPackNames, packsDataObject } from './packs.ts'

  const selectedArtifacts = ref([])


  const isMountedComponent = ref(false);


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



    <p>Selected artifacts: {{ selectedArtifacts }}</p>

    <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item" v-for="item in selectedArtifacts" :key="listOfPackNames[item]">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            {{item}}
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
          <div class="accordion-body">
            {{packsDataObject[item]}}
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
