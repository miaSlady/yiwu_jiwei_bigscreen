<template>
  <div>
    <div class="leftSide">
      <div class="m_box box1">
        <m-title>
          <div slot="title">工程信息</div>
          <div slot="more">详情</div>
        </m-title>
        <div class="content">
          <dl>
            <dt>
              <img src="./img/title2.png" alt="" />
            </dt>
            <dd>
              <p><span>3563</span></p>
              <p>工程数量</p>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src="./img/title1.png" alt="" />
            </dt>
            <dd>
              <p><span>1668623</span>&nbsp;万元</p>
              <p>工程金额</p>
            </dd>
          </dl>
        </div>
      </div>
      <div class="m_box box2">
        <m-title>
          <div slot="title">问题监督</div>
        </m-title>
        <div class="bar">
          <div class="l" :style="{ width: r_box1_data.per1 }">
            <span>{{ r_box1_data.per1 }}</span>
          </div>
          <div class="r" :style="{ width: r_box1_data.per2 }">
            <span>{{ r_box1_data.per2 }}</span>
          </div>
          <div class="l_detail" :style="{ left: r_box1_data.left }">
            <img src="../../img/pointer.png" alt="" />
            <p class="p1">{{ r_box1_data.name1 }}</p>
            <p class="p2">{{ r_box1_data.value1 }}</p>
          </div>
          <div class="r_detail" :style="{ right: r_box1_data.right }">
            <img src="../../img/pointer.png" alt="" />
            <p class="p1">{{ r_box1_data.name2 }}</p>
            <p class="p2">{{ r_box1_data.value2 }}</p>
          </div>
        </div>
        <div class="m_title">
          <div slot="more">
            <button @click="callback(1)" :class="{ active: mode == 1 }">
              在建
            </button>
            <button @click="callback(2)" :class="{ active: mode == 2 }">
              完工
            </button>
          </div>
        </div>
        <div style="display:flex">
          <div id="charts4" :style="{ width: '50%', height: '200px' }"></div>
            <div id="charts4_1" :style="{ width: '50%', height: '200px' }"></div>
        </div>
      </div>
    </div>
    <div class="rightSide">
      <!-- <div class="m_box box1">
        <m-title>
          <div slot="title">资产排行</div>
        </m-title>
        <div class="content">
          <div id="charts5" :style="{ width: '100%', height: '200px' }"></div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { pie_chart1, bar_chart3, pie_chart2 } from '@/assets/js/m_chart.js'

export default {
  data () {
    return {
      mode: 1,
      r_box1_data: {
        name1: '在建',
        value1: '9710',
        per1: '70%',
        left: '35%',
        name2: '完工',
        value2: '4162',
        per2: '30%',
        right: '15%'
      }
    }
  },
  methods: {
    callback (val) {
      this.mode = val
    },

    bar_chart4 () {
      // 基于准备好的dom，初始化echarts实例
      const myBar4 = this.$echarts.init(document.getElementById('charts4'))
      myBar4.setOption({
        legend: [
          {
            left: '13%',
            bottom: '5%',
            height: '10%',
            orient: 'horizontal',
            width: '30%',
            data: ['十万以上', '十万以下']
          },
          {
            right: '13%',
            bottom: '5%',
            height: '10%',
            orient: 'horizontal',
            width: '30%',
            data: ['已到账', '未到账']
          }
        ],
        series: [
          {
            type: 'pie',
            radius: [45, 50],
            center: ['20%', '45%'],
            data: [
              { value: 110000.11, name: '十万以上' },
              { value: 220000.22, name: '十万以下' }
            ],
            label: {
              formatter: (v) => `${v.percent}%`
            }
          },
          {
            type: 'pie',
            radius: [45, 30],
            center: ['80%', '45%'],
            data: [
              { value: 550000.55, name: '已到账' },
              { value: 660000.66, name: '未到账' }
            ],
            label: {
              formatter: (v) => `${v.percent}%`
            }
          }
        ]
      })
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
      pie_chart2('charts4', {
        title: ['十万以上', '十万以下'],
        color: ['rgba(196,24,205,1)', 'rgba(90,207,238,1)'],
        data: [
          { name: '十万以上', value: Number(Math.random() * 100).toFixed(0) },
          { name: '十万以下', value: Number(Math.random() * 100).toFixed(0) }
        ]
      })
      pie_chart2('charts4_1', {
        title: ['已到账', '未到账'],
        color: ['rgba(77,228,120,1)', 'rgba(90,207,238,1)'],
        data: [
          { name: '已到账', value: Number(Math.random() * 100).toFixed(0) },
          { name: '未到账', value: Number(Math.random() * 100).toFixed(0) }
        ]
      })
      // 右一==>柱状
      bar_chart3('charts5', {
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
    // this.bar_chart4();
    // this.bar_chart5();
    this.ininData()
  }
}
</script>
<style lang='less' scoped src="./css/village.less"/>
