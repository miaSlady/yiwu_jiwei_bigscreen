<template>
  <div>
    <div class="leftSide">
      <div class="m_box box1">
        <m-title>
          <div slot="title">建房信息</div>
          <div slot="more" @click="crowdPop=1">详情</div>
        </m-title>
        <div class="content">
          <dl>
            <dt>
              <img src="./img/title1.png" alt="" />
            </dt>
            <dd>
              <p><span>11472</span>&nbsp;户</p>
              <p>在建</p>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src="./img/title2.png" alt="" />
            </dt>
            <dd>
              <p><span>2461</span>&nbsp;户</p>
              <p>完工</p>
            </dd>
          </dl>
        </div>
      </div>
      <div class="m_box box1">
        <m-title>
          <div slot="title">建房占比</div>
          <div slot="more">
            <button @click="callback(1)" :class="{ active: mode == 1 }">
              在建
            </button>
            <button @click="callback(2)" :class="{ active: mode == 2 }">
              完工
            </button>
          </div>
        </m-title>
        <div class="content">
          <div id="charts6" :style="{ width: '100%', height: '200px' }"></div>
        </div>
      </div>
      <div class="m_box box1">
        <m-title>
          <div slot="title">建房排行</div>
        </m-title>
        <div class="content">
          <div id="charts7" :style="{ width: '100%', height: '200px' }"></div>
        </div>
      </div>
    </div>
    <div class="rightSide"></div>
     <FarmersbuildDetail v-if="crowdPop==1" @close="crowdPop=null"/>
  </div>
</template>

<script>
import FarmersbuildDetail from '@/components/pop/farmers_build_detail.vue'
import { pie_chart1, bar_chart3 } from '@/assets/js/m_chart.js'
export default {
  components: {
    FarmersbuildDetail
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
      pie_chart1('charts6', {
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
      bar_chart3('charts7', {
        rotate: -20,
        color: ['rgba(33,254,193,1)', 'rgba(254,157,33,1)'],
        barWidth: '30%',
        legend: ['在建', '完工'],
        x: x1,
        y: [
          {
            name: '在建',
            data: y1
          },
          {
            name: '完工',
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
