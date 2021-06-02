<template>
<div>
  <component :is="componentConfig" />
</div>
</template>

<script>
const COMPONENT_MAP = { // 12市镇  3村
  1: () => import('./city.vue'),
  2: () => import('./city.vue'),
  3: () => import('./village.vue')
}
export default {
  data () {
    return {

    }
  },
  computed: {
    id () {
      return this.$route.query.id
    },
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
<style lang='less' scoped/>
