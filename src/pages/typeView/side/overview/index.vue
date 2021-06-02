<template>
<div>
  <component :is="componentConfig" @changeCrowdPop="changeCrowdPop"/>
  <!-- 高频事项详情 -->
  <FrequencyMatters v-if="crowdPop==1" @close="crowdPop=null"/>
  <!-- 问题监督详情 -->
  <ProblemsSupervision v-if="crowdPop==2" @close="crowdPop=null"/>
  <!-- 两问大走访详情 -->
  <Interview  v-if="crowdPop==3" @close="crowdPop=null"/>
</div>
</template>

<script>
import FrequencyMatters from '@/components/pop/overview_frequency_matters.vue'
import ProblemsSupervision from '@/components/pop/overview_problems_supervision.vue'
import Interview from '@/components/pop/overview_interview.vue'
const COMPONENT_MAP = { // 12市镇  3村
  1: () => import('./city.vue'),
  2: () => import('./city.vue'),
  3: () => import('./village.vue')
}
export default {
  components: {
    FrequencyMatters,
    ProblemsSupervision,
    Interview
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
