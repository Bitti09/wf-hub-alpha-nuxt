<template>
  <div :class="activetheme.short + ' bg-primary min-h-screen '">
    <Navbar
      :class="activetheme.short + ' bg-navbar fixed z-10 w-full py-0 pin-t'"
      role="navigation"
    />
    <nuxt class="min-h-screen py-16 pt-12" role="main" />
  </div>
</template>
<style>
@media (max-width: 120px) {
  :root {
    font-size: 00.75rem !important;
  }
}
</style>
<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: {
    Navbar,
  },
  computed: {
    activetheme() {
      if (this.$warehouse.get('theme')) {
        const value = this.$warehouse.get('theme')
        this.$store.commit('settheme', value)
        return this.$store.state.activetheme
      } else {
        return this.$store.state.activetheme
      }
    },
  },
  mounted() {
    this.$warehouse.each(function (value, key) {
      // eslint-disable-next-line no-console
      console.log(key, '==', value)
    })
  },
}
</script>
