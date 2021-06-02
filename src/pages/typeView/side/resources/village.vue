<template>
  <div>
    <div class="leftSide">
      <div class="m_box box1">
        <m-title>
          <div slot="title">资产信息</div>
          <div slot="more" @click="$emit('changeCrowdPop',1)">详情</div>
        </m-title>
        <div class="content">
          <dl>
            <dt>
              <img src="./img/title3.png" alt="" />
            </dt>
            <dd>
              <p><span>9024</span>&nbsp;处</p>
              <p>资产数量</p>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src="./img/title2.png" alt="" />
            </dt>
            <dd>
              <p><span>518</span>&nbsp;处</p>
              <p>闲置资产数量</p>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src="./img/title1.png" alt="" />
            </dt>
            <dd>
              <p><span>1860200</span>&nbsp;万元</p>
              <p>总金额</p>
            </dd>
          </dl>
        </div>
      </div>
      <div class="m_box box2">
        <m-title>
          <div slot="title">资产占比</div>
          <div slot="more">
            <button @click="callback(1)" :class="{ active: mode == 1 }">
              经营性资产
            </button>
            <button @click="callback(2)" :class="{ active: mode == 2 }">
              非经营性资产
            </button>
          </div>
        </m-title>
        <div class="content">
          <p style="textAlign:right">单位：万元</p>
          <div id="charts1" :style="{ width: '100%', height: '160px' }"></div>
          <ul class="list">
            <li v-for="(v, i) in r_box1_list" :key="i">
              <p>{{ v.value }}</p>
              <p>{{ v.name }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="rightSide"></div>
  </div>
</template>

<script>
import { pie_chart1, bar_chart3 } from '@/assets/js/m_chart.js'
export default {
  data () {
    return {
      mode: 1,
      modes: 1,
      r_box1_list: [
        { name: '出售', value: '3520' },
        { name: '出租', value: '72931' },
        { name: '合资', value: '726' }
      ]
    }
  },
  methods: {
    callback (val) {
      this.mode = val
    },
    callbacks (val) {
      this.modes = val
    },
    initData () {
      const x1 = []
      const y1 = []
      const y2 = []
      const y3 = []
      const y4 = []
      const y5 = []
      for (const i in CITY) {
        const v = CITY[i]
        x1.push(v.name)
        y1.push((Math.random() * 50).toFixed(0))
        y2.push((Math.random() * 10).toFixed(0))
        y3.push((Math.random() * 20).toFixed(0))
        y4.push((Math.random() * 30).toFixed(0))
        y5.push((Math.random() * 40).toFixed(0))
      }

      // 左一 ==> 饼图
      pie_chart1('charts1', {
        legendLeft: '50%',
        legendTop: '85%',
        center: (Math.random() * 40).toFixed(0),
        titleLeft: '19%',
        titleTop: '52%',
        color: ['#21FEC1', '#FFE617', '#FF581D'],
        centerRatio: ['20%', '60%'],
        // showLabel: true,
        // labelType: 1,
        orients: 'horizontal',
        data: [
          {
            value: (Math.random() * 40).toFixed(0),
            name: '出售',
            itemStyle: { color: 'rgba(0,248,155,1)' }
          },
          {
            value: (Math.random() * 40).toFixed(0),
            name: '出租',
            itemStyle: { color: 'rgba(196,24,205,1)' }
          },
          {
            value: (Math.random() * 40).toFixed(0),
            name: '合资',
            itemStyle: { color: 'rgba(90,207,238,1)' }
          }
        ]
      })
    }
  },
  mounted () {
    this.initData()
  }
}
</script>
<style lang='less' scoped src="./css/village.less"/>
