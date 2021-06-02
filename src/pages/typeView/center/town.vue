<template>
<div class="town">
  <p class="title">
    <img src="./img/locate.png" alt="">
    {{townName}}
  </p>
  <ul class="detail">
    <li v-for="(v,i) in listData" :key="i">
      <p>{{v.name}}</p>
      <p>{{v.value}}</p>
    </li>
  </ul>
  <div class="scrollBox">
    <ul class="townList">
      <li v-for="(v,i) in villageList" :key="i" @click="jumpVillage(v.id)">
        <VillageItem :detail="v" :villageBox="villageBox"/>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import { boxMap } from './js/data.js'
import VillageItem from './components/villageItem'
export default {
  watch: {
    $route: {
      handler (to, from) {
        const { meta, path, query } = this.$route
        const tabId = meta.tabId
        this.path = path
        this.tabId = tabId
        const townId = Number(query.id)
        this.townId = townId
        this.townName = CITY[townId].name
        this.villageList = CITY[townId].children
        this.listData = boxMap[tabId].list
        this.villageBox = boxMap[tabId].villageBox
      },
      immediate: true
    }
  },
  data () {
    return {
      tabId: null,
      townId: null,
      townName: null,
      villageList: [],
      listData: [],
      villageBox: [],
      path: ''
    }
  },
  components: {
    VillageItem
  },
  methods: {
    // 跳转到村详情
    jumpVillage (id) {
      this.$router.push({ path: this.path, query: { type: 3, id } })
    }
  },
  mounted () {

  }
}

</script>
<style lang='less' scoped src="./css/town.less"/>
