<template>
  <div>
    <div class="leftSide">
      <div class="m_box box1">
        <m-title>
          <div slot="title">派工信息（年）</div>
          <div slot="more" @click="crowdPop=1">详情</div>
        </m-title>
        <div class="content">
          <dl>
            <dt>
              <img src="./img/title1.png" alt="" />
            </dt>
            <dd>
              <p><span>176032</span>&nbsp;人次</p>
              <p>派工人数</p>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src="./img/title2.png" alt="" />
            </dt>
            <dd>
              <p><span>352</span>&nbsp;人次</p>
              <p>重劳力</p>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src="./img/title3.png" alt="" />
            </dt>
            <dd>
              <p><span>352</span>&nbsp;人次</p>
              <p>水电工</p>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src="./img/title1.png" alt="" />
            </dt>
            <dd>
              <p><span>352</span>&nbsp;人次</p>
              <p>派工人数</p>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src="./img/title5.png" alt="" />
            </dt>
            <dd>
              <p><span>352</span>&nbsp;人次</p>
              <p>重劳力</p>
            </dd>
          </dl>
        </div>
      </div>
      <div class="m_box box1">
        <m-title>
          <div slot="title">派工占比</div>
          <div slot="more">
            <button @click="callback(1)" :class="{ active: mode == 1 }">
              会务员工
            </button>
            <button @click="callback(2)" :class="{ active: mode == 2 }">
              劳务员工
            </button>
          </div>
        </m-title>
        <div class="content">
          <div id="charts10" :style="{ width: '100%', height: '200px'}"></div>
        </div>
      </div>
    </div>
    <div class="rightSide">
      <div class="m_box box1">
        <m-title>
          <div slot="title">派工排行</div>
        </m-title>
        <div class="content">
          <div id="charts11" :style="{ width: '100%', height: '200px' }"></div>
        </div>
      </div>
    </div>
    <LaboremploymentDetail v-if="crowdPop==1" @close="crowdPop=null"/>
  </div>
</template>

<script>
import LaboremploymentDetail from '@/components/pop/labor_employment_detail.vue'
import { pie_chart1, bar_chart3 } from '@/assets/js/m_chart.js'
export default {
  components: {
    LaboremploymentDetail
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
      pie_chart1('charts10', {
        legendLeft: '65%',
        legendTop: '36%',
        center: (Math.random() * 40).toFixed(0),
        titleLeft: '35%',
        centerRatio: ['36%', '50%'],
        showLabel: true,
        labelType: 1,
        orients: 'horizontal',
        color: ['rgba(33,254,193,1)', 'rgba(33,152,254,1)', 'rgba(255,149,55,1)', 'rgba(99,76,255,1)'],
        data: [
          { name: '重劳力', value: Number(Math.random() * 100).toFixed(0) },
          { name: '一般劳动力', value: Number(Math.random() * 100).toFixed(0) },
          { name: '水电工', value: Number(Math.random() * 100).toFixed(0) },
          { name: '泥水工', value: Number(Math.random() * 100).toFixed(0) }
        ]
      })
      // 左二 ==> 柱状
      bar_chart3('charts11', {
        rotate: -20,
        color: ['rgba(33,254,193,1)', 'rgba(254,157,33,1)'],
        barWidth: '30%',
        legend: ['会务员工', '劳务员工'],
        x: x1,
        y: [
          {
            name: '会务员工',
            data: y1
          },
          {
            name: '劳务员工',
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
