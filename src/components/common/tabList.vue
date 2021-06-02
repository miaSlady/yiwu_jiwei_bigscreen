<template>
<div class="tab">
  <ul class="tabList">
    <li v-for="(v,i) in tabList" :key="i" :class="{active:v.id==tabId}" @click="$router.push(v.url)">
      <img :src="v.id==tabId ? v.img2 :v.img1" alt="">
      <span>{{v.name}}</span>
    </li>
  </ul>
  <div class="time">
    <p>欢迎来到数字驾驶舱</p>
    <p>{{timeNow}}</p>
  </div>
</div>
</template>

<script>
import { TAB_MAP, CUSTOMDATE } from '@/assets/js/config'
export default {
  data () {
    return {
      tabList: [// img1未选中  img2选中
        {
          name: '总览',
          id: TAB_MAP.overview,
          img1: require('./img/icon1_1.png'),
          img2: require('./img/icon1_2.png'),
          url: '/overview'
        },
        {
          name: '党务管理',
          id: TAB_MAP.party_manage,
          img1: require('./img/icon2_1.png'),
          img2: require('./img/icon2_2.png'),
          url: '/party_manage'
        },
        {
          name: '村务决议',
          id: TAB_MAP.village_resolution,
          img1: require('./img/icon3_1.png'),
          img2: require('./img/icon3_2.png'),
          url: '/village_resolution'
        },
        {
          name: '资产资源管理',
          id: TAB_MAP.resources,
          img1: require('./img/icon4_1.png'),
          img2: require('./img/icon4_2.png'),
          url: '/resources'
        },
        {
          name: '村级工程',
          id: TAB_MAP.village_engineering,
          img1: require('./img/icon5_1.png'),
          img2: require('./img/icon5_2.png'),
          url: '/village_engineering'
        },
        {
          name: '农民建房',
          id: TAB_MAP.farmers_build,
          img1: require('./img/icon6_1.png'),
          img2: require('./img/icon6_2.png'),
          url: '/farmers_build'
        },
        {
          name: '财务管理',
          id: TAB_MAP.property_manage,
          img1: require('./img/icon7_1.png'),
          img2: require('./img/icon7_2.png'),
          url: '/property_manage'
        },
        {
          name: '劳务用工',
          id: TAB_MAP.labor_employment,
          img1: require('./img/icon8_1.png'),
          img2: require('./img/icon8_2.png'),
          url: '/labor_employment'
        },
        {
          name: '补助救助',
          id: TAB_MAP.aid_relief,
          img1: require('./img/icon9_1.png'),
          img2: require('./img/icon9_2.png'),
          url: '/aid_relief'
        }
      ],
      timer: null,
      timeNow: null
    }
  },
  computed: {
    tabId () {
      return this.$route.meta.tabId
    }
  },
  methods: {
    initDate () {
      this.timer = setInterval(() => {
        this.timeNow = CUSTOMDATE(new Date(), 2, '.')
      }, 1000)
    }
  },
  mounted () {
    this.initDate()
  },
  beforeDestroy () {
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }
  }
}

</script>
<style lang='less' scoped src="./css/tabList.less"/>
