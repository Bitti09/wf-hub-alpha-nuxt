<template>
  <nav x-data="{ open: true }" class="bg-gray-800">
    <div class="px-2 mx-auto sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            class="inline-flex items-center justify-center p-2 transition duration-150 ease-in-out rounded-md text-primary hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            @click="opennav = !opennav"
          >
            <svg
              class="w-6 h-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                :class="{ hidden: opennav, 'inline-flex': !opennav }"
                class=""
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                :class="{ hidden: !opennav, 'inline-flex': opennav }"
                class=""
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          class="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start"
        >
          <div
            class="hidden py-2 pr-2 text-xl font-bold leading-5 transition duration-150 ease-in-out rounded-md text-primary sm:block focus:outline-none focus:text-white focus:bg-gray-700"
          >
            Warframe Hub
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex">
              <a
                href="#"
                class="px-3 py-2 text-sm leading-5 transition duration-150 ease-in-out bg-gray-900 rounded-md font-solid text-primary focus:outline-none focus:text-white focus:bg-gray-700"
                >Home</a
              >
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <div class="relative flex">
            <div class="hidden py-3 sm:block">
              <v-select
                class="w-auto number-col"
                :value="$store.state.activetheme"
                :searchable="false"
                :clearable="false"
                :filterable="false"
                :v-model="$store.state.activetheme"
                :options="$store.state.theme"
                @input="setSelectedtheme"
              >
                <template slot="option" slot-scope="option">
                  <span class="mr-1 -ml-2"
                    ><fa :icon="['fas', 'palette']" fixed-width
                  /></span>
                  {{ option.label }}
                </template>
                <template slot="selected-option" slot-scope="option">
                  <span class="mr-1"
                    ><fa :icon="['fas', 'palette']" fixed-width
                  /></span>
                  {{ option.label }}
                </template>
              </v-select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition
      enter-active-class="duration-150 ease-out transform"
      enter-class="scale-95 opacity-0"
      enter-to-class="scale-100 opacity-100"
      leave-active-class="duration-100 ease-in transform"
      leave-class="scale-100 opacity-100"
      leave-to-class="scale-95 opacity-0"
    >
      <div
        v-show="opennav"
        class="left-0 z-40 w-full origin-top-left rounded-md shadow-lg"
      >
        <div class="px-2 pt-2 pb-3">
          <a
            href="#"
            class="block px-3 py-2 text-base font-medium text-white transition duration-150 ease-in-out bg-gray-900 rounded-md focus:outline-none focus:text-white focus:bg-gray-700"
            >Home</a
          >
          <v-select
            class="text-primary"
            :value="$store.state.activetheme"
            :searchable="false"
            :clearable="false"
            :filterable="false"
            :v-model="$store.state.activetheme"
            :options="$store.state.theme"
            @input="setSelectedtheme"
          >
            <template slot="option" slot-scope="option">
              <span class="mr-1 -ml-2"
                ><fa :icon="['fas', 'palette']" fixed-width
              /></span>
              {{ option.label }}
            </template>
            <template slot="selected-option" slot-scope="option">
              <span class="mr-1"
                ><fa :icon="['fas', 'palette']" fixed-width
              /></span>
              {{ option.label }}
            </template>
          </v-select>
        </div>
      </div>
    </transition>
  </nav>
</template>

<style>
.number-col {
  font-family: 'Roboto', sans-serif !important;
  max-width: 14rem !important;
  min-width: 9rem !important;
}

.vs__dropdown-menu {
  max-width: 14rem !important;
  min-width: 14rem !important;

  @apply pb-1;
  @apply bg-navbar;
  @apply text-primary;
}

.vs--single .vs__selected {
  @apply text-primary;
}

.vs__open-indicator {
  @apply text-primary;
  @apply fill-current;
}

.vs__dropdown-option {
  @apply text-primary;
}
</style>

<script>
import 'vue-select/dist/vue-select.css'

export default {
  data() {
    return {
      open: false,
      opennav: false,
      selected: '',
    }
  },
  computed: {
    activetheme() {
      if (this.$warehouse.get('theme')) {
        return this.$warehouse.get('theme')
      } else {
        return this.$store.state.activetheme
      }
    },
  },
  mounted() {
    document.addEventListener('click', (evt) => {
      evt.stopPropagation()
      if (!this.$el.contains(evt.target)) {
        this.opennav = false
      }
    })
  },
  methods: {
    toggle() {
      this.open = !this.open
    },
    setSelectedtheme(value) {
      this.$warehouse.set('theme', value)
      this.$store.commit('settheme', value)
      this.opennav = false

      // eslint-disable-next-line no-console
      console.log(this.$warehouse.get('theme'))
    },
  },
}
</script>
