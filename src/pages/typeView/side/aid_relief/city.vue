<template>
  <div>
    <div class="leftSide">
      <div class="m_box box1">
        <m-title>
          <div slot="title">补助信息（年）</div>
          <div slot="more">详情</div>
        </m-title>
        <div class="content">
          <dl>
            <dt>
              <img src="./img/title1.png" alt="" />
            </dt>
            <dd>
              <p><span>35639</span>&nbsp;人</p>
              <p>补助人数</p>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src="./img/title1.png" alt="" />
            </dt>
            <dd>
              <p><span>65191054</span>&nbsp;元</p>
              <p>补助金额</p>
            </dd>
          </dl>
        </div>
      </div>
      <div class="m_box box2">
        <m-title>
          <div slot="title">发放情况</div>
        </m-title>
        <p style="fontSize:16px;color:rgba(0,248,201,1)">人均：<span style="fontSize:24px;color:#fff">20000</span><b style="fontSize:16px;color:#fff">元</b></p>
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
      </div>
      <div class="m_box box1">
        <m-title>
          <div slot="title">补助排行</div>
        </m-title>
        <div class="content">
          <div id="charts13" :style="{ width: '100%', height: '270px' }"></div>
        </div>
      </div>
    </div>
    <div class="rightSide"></div>
  </div>
</template>

<script>
import { bar_chart3 } from '@/assets/js/m_chart.js'
export default {
  data () {
    return {
      mode: 1,
      r_box1_data: {
        name1: '已发',
        value1: '9710',
        per1: '70%',
        left: '35%',
        name2: '未发',
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
      // 左二 ==> 柱状
      bar_chart3('charts13', {
        rotate: -20,
        color: ['#FF581D', '#FE9D21', '#9033A5', '#219BFE', '#21FEC1'],
        barWidth: '30%',
        stack: 'one',
        legend: [
          '民政低保',
          '临时救助',
          '困难残疾人生活补助',
          '重度残疾人护理补助',
          '失地农民养老保险'
        ],
        x: x1,
        y: [
          { name: '民政低保', data: y1 },
          { name: '临时救助', data: y2 },
          { name: '困难残疾人生活补助', data: y3 },
          { name: '重度残疾人护理补助', data: y4 },
          { name: '失地农民养老保险', data: y5 }
        ]
      })
    }
  },
  mounted () {
    this.initData()
  }
}
</script>
<style lang='less' scoped src="./css/city.less"/>
