<template>
  <div
    class="h-auto max-w-lg overflow-hidden border-transparent rounded md:max-w-md sm:max-w-sm xl:max-w-xl"
  >
    <div
      class="px-4 pt-4 text-4xl font-bold bg-transparent text-primary sm:px-6"
    >
      Invasions
    </div>
    <div class="pt-0 bg-box text-primary">
      <div v-if="!invasions" class="text-primary">
        <div
          class="relative px-4 py-3 text-red-700 bg-transparent border border-red-400 rounded"
          role="alert"
        >
          <strong class="font-bold">No Invasions today</strong>
        </div>
      </div>
      <template v-else>
        <div
          class="grid items-center grid-cols-2 px-2 py-2 pl-2 pr-4 border-b-4 border-gray-600"
        >
          <div class="w-full h-auto">Factions</div>
          <span class="w-full h-auto text-right pr-9 number-col">
            Location
          </span>
        </div>
        <badger-accordion ref="myAccordion" :icons="false">
          <badger-accordion-item v-for="inva in invasions" :key="inva.id">
            <div slot="header" class="flex items-center px-2">
              <p class="w-full">
                <span :class="getcolourfaction(inva.attackingFaction)">
                  {{ inva.attackingFaction }}</span
                >
                vs
                <span :class="getcolourfaction(inva.defendingFaction)">{{
                  inva.defendingFaction
                }}</span>
              </p>
              <span class="w-3/4 p-2 pr-0 text-right">{{ inva.node }}</span>
            </div>
            <div
              slot="content"
              class="break-all border-b border-gray-600 bg-box"
            >
              <div class="grid grid-cols-2 gap-0 px-2 py-1">
                <div class="w-full">complete</div>
                <div class="w-full">
                  {{ parseFloat(complete(inva.completion)).toFixed(2) }} %
                </div>
                <div class="w-full">Type:</div>
                <div class="w-full break-normal">{{ inva.desc }}</div>
                <div v-if="inva.AttackerRewardItem" class="w-full">
                  attacker rewards:
                </div>
                <div v-if="inva.AttackerRewardItem" class="w-full break-normal">
                  {{ inva.AttackerRewardItem }}
                </div>
                <div v-if="inva.DefenderRewardItem" class="w-full">
                  defender rewards:
                </div>
                <div v-if="inva.DefenderRewardItem" class="w-full break-normal">
                  {{ inva.DefenderRewardItem }}
                </div>
              </div>
            </div>
          </badger-accordion-item>
        </badger-accordion>
      </template>
    </div>
  </div>
</template>

<style scoped>
table.table div,
table.table th,
table.table > thead > tr {
  border: 0;
}
</style>

<script>
export default {
  name: 'InvasionsPanel',
  props: ['invasions'],
  data() {
    return {
      platinum: 'platinum',
    }
  },
  computed: {
    headertext() {
      return 'invasions'
    },
    activeplat() {
      return this.$store.state.activeplatform.short
    },
    activelang1() {
      return this.$store.state.activelang.short
    },
  },
  methods: {
    getcolourfaction(prop) {
      let x = null
      if (prop === 'Grineer') {
        x = 'text-red-600'
      } else if (prop === 'Corpus') {
        x = 'text-blue-600'
      } else if (prop === 'Infested') {
        x = 'text-green-600'
      } else {
        x = 'text-white'
      }
      return x
    },
    complete(prop) {
      let x = prop
      if (prop < 0) {
        x = x * -1
      }
      return x
    },
  },
}
</script>
