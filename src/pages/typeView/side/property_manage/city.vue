<template>
  <div>
    <div class="leftSide">
      <div class="m_box box1">
        <m-title>
          <div slot="title">财务信息（年）</div>
          <div slot="more" @click="crowdPop=1">详情</div>
        </m-title>
        <div class="content">
          <dl>
            <dt>
              <img src="./img/title2.png" alt="" />
            </dt>
            <dd>
              <p><span>254320</span>&nbsp;万元</p>
              <p>年收入</p>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src="./img/title1.png" alt="" />
            </dt>
            <dd>
              <p><span>239070</span>&nbsp;万元</p>
              <p>年支出</p>
            </dd>
          </dl>
        </div>
      </div>
      <div class="m_box box1">
        <m-title>
          <div slot="title">收入支出占比</div>
          <div slot="more">
            <button @click="callback(1)" :class="{ active: mode == 1 }">
              收入
            </button>
            <button @click="callback(2)" :class="{ active: mode == 2 }">
              支出
            </button>
          </div>
        </m-title>
        <div class="content">
          <div id="charts8" :style="{ width: '100%', height: '200px' }"></div>
        </div>
      </div>
      <div class="m_box box1">
        <m-title>
          <div slot="title">收入支出排行</div>
        </m-title>
        <div class="content">
          <div id="charts9" :style="{ width: '100%', height: '200px' }"></div>
        </div>
      </div>
    </div>
    <div class="rightSide"></div>
    <Propertymanage v-if="crowdPop==1" @close="crowdPop=null"/>
  </div>
</template>

<script>
import Propertymanage from '@/components/pop/property_manage_detail.vue'
import { pie_chart1, bar_chart3 } from '@/assets/js/m_chart.js'
export default {
  components: {
    Propertymanage
  },
  data () {
    return {
      crowdPop: null,
      mode: 1
    }
  },
  methods: {
    callback (val) {
      this.mode = val
    },
    ininData () {
      const x1 = []
      const y1 = []
      const y2 = []
      const y3 = []
      const y4 = []
      const y5 = []
      const data1 = []
      for (const i in CITY) {
        const v = CITY[i]
        x1.push(v.name)
        y1.push((Math.random() * 50).toFixed(0))
        y2.push((Math.random() * 10).toFixed(0))
        y3.push((Math.random() * 20).toFixed(0))
        y4.push((Math.random() * 30).toFixed(0))
        y5.push((Math.random() * 40).toFixed(0))
        data1.push({
          name: v.name,
          value: Number(Math.random() * 100).toFixed(0)
        })
      }
      // 左一 ==> 饼图
      pie_chart1('charts8', {
        legendLeft: '50%',
        legendTop: '27%',
        center: (Math.random() * 40).toFixed(0),
        titleLeft: '24%',
        titleTop: '54%',
        centerRatio: ['25%', '60%'],
        color: [
          '#21FEC1',
          '#FFE617',
          '#FF581D',
          '#84FF7E',
          '#634CFF',
          '#219BFE',
          '#0E906B',
          '#C37EFF',
          '#165C91',
          '#FF9799',
          '#9033A5',
          '#29DFF3',
          '#F91266',
          '#FF9537'
        ],
        data: data1
      })
      // 左二 ==> 柱状
      bar_chart3('charts9', {
        rotate: -20,
        color: ['rgba(33,254,193,1)', 'rgba(254,157,33,1)'],
        barWidth: '30%',
        legend: ['收入', '支出'],
        x: x1,
        y: [
          {
            name: '收入',
            data: y1
          },
          {
            name: '支出',
            data: y2
          }
        ]
      })
    }
  },
  mounted () {
    this.ininData()
  }
}
</script>
<style lang='less' scoped src="./css/city.less"/>
