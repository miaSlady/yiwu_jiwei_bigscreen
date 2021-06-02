<template>
<div class="city">
  <div class="map">
    <img :src="map" alt="">
    <!-- 地图文字显示 -->
    <p class="item"
      :class="{hover:current==v.id}"
      v-for="(v,i) in cityData"
      :key="i"
      :style="{left:v.left,top:v.top}"
      @mouseover="current=v.id"
      @mouseout="current=1"
      @click="handleJump(v.id)">
      <span>{{v.name}}</span><br/>
      <span>活跃人数{{v.value}}</span>
    </p>
    <!-- 地图弹框 -->
    <div v-if="current!=1" class="box" :style="{left:cityData[current].box.left,top:cityData[current].box.top}">
      <p>{{cityData[current].name}}</p>
      <ul>
        <li v-for="(v,i) in boxData" :key="i">
          <p>{{v.name}}</p>
          <p>{{v.value}} <span class="per">{{v.per}}</span></p>
        </li>
      </ul>
    </div>
    <!-- 地图左上角列表 -->
    <ul class="list">
      <li v-for="(v,i) in listData" :key="i">
        <p>{{v.name}}</p>
        <p>{{v.value}}</p>
      </li>
    </ul>
  </div>

</div>
</template>

<script>
import { cityData, cityMap, boxMap } from './js/data.js'
export default {
  watch: {
    $route: {
      handler (to, from) {
        console.log('this.$route', this.$route)
        const { meta, path } = this.$route
        const tabId = meta.tabId
        this.path = path
        this.tabId = tabId
        this.boxData = this.boxMap[tabId].box
        this.listData = this.boxMap[tabId].list
      },
      immediate: true
    }
  },
  data () {
    return {
      cityData,
      cityMap,
      boxMap,
      boxData: [],
      listData: [],
      current: 1,
      tabId: 1,
      path: ''
    }
  },
  computed: {
    map () {
      return cityMap[this.current]
    }

  },
  methods: {
    // 跳转到镇
    handleJump (id) {
      this.$router.push({ path: this.path, query: { type: 2, id } })
    }
  },
  mounted () {

  }
}

</script>
<style lang='less' scoped src="./css/city.less"/>
