<template>
  <b-col v-packery-item md="4" class="mt-2 panel-header packery-item">
    <h4 class="text-center header-panel">{{ title }}</h4>
    <slot></slot>
  </b-col>
</template>

<script>
export default {
  name: 'HubPanelWrap',
  components: {},
  props: ['title'],
  data() {
    return {}
  },
}
</script>
