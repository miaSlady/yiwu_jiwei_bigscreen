<template>
<div class="village">
  <p class="title">
    <img src="./img/locate.png" alt="">
    {{villageName}}
  </p>
  <ul class="detail">
    <li v-for="(v,i) in listData" :key="i">
      <p>{{v.name}}</p>
      <p>{{v.value}}</p>
    </li>
  </ul>
</div>
</template>

<script>
import { boxMap } from './js/data'
export default {
  watch: {
    $route: {
      handler (to, from) {
        const { meta, query } = this.$route
        const tabId = meta.tabId
        this.tabId = tabId
        const villageId = Number(query.id)
        this.villageId = villageId
        this.villageName = TOWN[villageId]
        this.listData = boxMap[tabId].villageList
      },
      immediate: true
    }
  },
  data () {
    return {
      boxMap,
      tabId: null,
      villageId: null,
      villageName: null,
      listData: []
    }
  },
  methods: {},
  mounted () {

  }
}

</script>
<style lang='less' scoped src="./css/village.less"/>
