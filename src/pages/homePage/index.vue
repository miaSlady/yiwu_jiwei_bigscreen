<template>
  <div class="homePage">
    <Header />
    <TabList />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/common/header.vue'
import TabList from '@/components/common/tabList.vue'
export default {
  components: {
    Header,
    TabList
  },
  data () {
    return {}
  },
  methods: {},
  created () {},
  mounted () {},
  beforeDestroy () {}
}
</script>
<style lang='less' scoped>
@import "./css/index.less";
</style>
