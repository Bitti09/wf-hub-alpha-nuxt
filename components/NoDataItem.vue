<template>
  <b-list-group-item class="py-1 list-group-item-borderbottom">
    <span class="dim">
      <HubImg
        :src="loading"
        :name="$t('nav.nodata')"
        width="40px"
        height="40px"
        style="filter: invert(80%); padding-right: 10px"
      />
      <div class="align-middle no-content-warning" style="margin-bottom: 2px">
        {{ $t('nav.nodatatxt', { text: text }) }}
      </div>
    </span>
  </b-list-group-item>
</template>

<script>
import HubImg from '@/components/HubImg.vue'

import loading from '@/assets/img/general/loading.svg'
export default {
  name: 'NoDataItem',
  components: {
    HubImg,
  },
  props: ['text'],
  data() {
    return {
      loading,
    }
  },
}
</script>
