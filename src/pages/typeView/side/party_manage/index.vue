<template>
<div>
  <component :is="componentConfig" @changeCrowdPop="changeCrowdPop"/>

  <!-- 党员详情 -->
  <ManageDetail v-if="crowdPop==1" @close="crowdPop=null"/>
</div>
</template>

<script>
import ManageDetail from '@/components/pop/party_manage_detail.vue'
const COMPONENT_MAP = { // 12市镇  3村
  1: () => import('./city.vue'),
  2: () => import('./city.vue'),
  3: () => import('./village.vue')
}
export default {
  components: {
    ManageDetail
  },
  data () {
    return {
      crowdPop: null

    }
  },
  computed: {
    id () {
      return this.$route.query.id
    },
    type () {
      this.crowdPop = null
      return this.$route.query.type || '1'
    },
    componentConfig () {
      return COMPONENT_MAP[this.type]
    }
  },
  methods: {
    changeCrowdPop (msg) {
      this.crowdPop = msg
    }

  },
  mounted () {}
}

</script>
<style lang='less' scoped/>
