<template>
<div>
  <component :is="componentConfig" />
</div>
</template>

<script>
const COMPONENT_MAP = { // 1市 2镇  3村
  1: () => import('./city.vue'),
  2: () => import('./town.vue'),
  3: () => import('./village.vue')
}
export default {
  data () {
    return {

    }
  },
  computed: {
    type () {
      return this.$route.query.type || '1'
    },
    componentConfig () {
      return COMPONENT_MAP[this.type]
    }
  },
  methods: {},
  mounted () {}
}

</script>
<style lang='less' scoped>
</style>
