<template>
  <div>
    <b-collapse
      :id="`spoiler-${this.cid}`"
      :visible="init"
      @hidden="
        toggled()
        downArrow()
      "
      @shown="
        toggled()
        upArrow()
      "
    >
      <slot></slot>
    </b-collapse>
    <b-btn
      v-b-toggle="`spoiler-${this.cid}`"
      variant="primary"
      class="py-0 mb-1"
    >
      {{ headertext }} <i ref="arrow" :class="this.initialArrow"></i>
    </b-btn>
  </div>
</template>
<script>
import util from '@/utilities'

export default {
  name: 'Collapsible',
  props: ['headertext', 'init'],
  data() {
    return {
      id: 0,
    }
  },
  computed: {
    cid() {
      if (this.id) {
        return this.id
      } else {
        this.id = this.makeid() // eslint-disable-line vue/no-side-effects-in-computed-properties
      }
      return this.id
    },
    initialArrow() {
      if (this.init) {
        return 'fas fa-chevron-up'
      }
      return 'fas fa-chevron-down'
    },
  },
  methods: {
    toggled() {
      this.$emit('toggle')
    },
    makeid() {
      return util.makeid()
    },
    upArrow() {
      this.$refs.arrow.className = 'fas fa-chevron-up'
    },
    downArrow() {
      this.$refs.arrow.className = 'fas fa-chevron-down'
    },
  },
}
</script>
