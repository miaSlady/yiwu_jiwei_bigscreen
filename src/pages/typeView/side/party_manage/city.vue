<template>
  <div>
    <div class="leftSide">
      <div class="m_box box1">
        <m-title>
          <div slot="title">党员信息</div>
          <div slot="more" @click="$emit('changeCrowdPop',1)">详情</div>
        </m-title>
        <ul class="list">
          <li v-for="(v,i) in l_box1_list" :key="i">
            <div>
              <p>{{v.value}}</p>
              <p>{{v.name}}</p>
            </div>
            <div v-if="i!=5">
              <img src="./img/party.png" alt="">
              <span class="s1" :style="{width:v.value}"></span>
              <span class="s2"></span>
            </div>
          </li>
        </ul>
      </div>
      <div class="m_box box2">
        <m-title>
          <div slot="title">党员三色码</div>
        </m-title>
        <div class="chart1" id="pie1"></div>
        <div class="chart2" id="bar1"></div>
      </div>
    </div>
    <div class="rightSide">
      <div class="m_box box1">
        <m-title>
          <div slot="title">党组织信息</div>
        </m-title>
        <div class="chart1" id="pie2"></div>
        <div class="chart2" id="bar2"></div>
      </div>
    </div>

  </div>
</template>

<script>
import { pie_chart1, bar_chart3 } from '@/assets/js/m_chart.js'
export default {
  data () {
    return {
      l_box1_list: [
        {
          name: '35周岁以下',
          value: '11%'
        },
        {
          name: '女性',
          value: '13%'
        },
        {
          name: '大学生',
          value: '18%'
        },
        {
          name: '60岁以上',
          value: '45%'
        },
        {
          name: '违纪违法',
          value: '1%'
        },
        {
          name: '年度党员发展计划完成率',
          value: '100%'
        }
      ]
    }
  },
  methods: {
    initData () {
      const x1 = []; const y1 = []; const y2 = []; const y3 = []; const y4 = []; const y5 = []
      for (const i in CITY) {
        const v = CITY[i]
        x1.push(v.name)
        y1.push((Math.random() * 50).toFixed(0))
        y2.push((Math.random() * 10).toFixed(0))
        y3.push((Math.random() * 20).toFixed(0))
        y4.push((Math.random() * 30).toFixed(0))
        y5.push((Math.random() * 40).toFixed(0))
      }
      // 党员三色码
      pie_chart1('pie1', {
        name: '党员三色码',
        center: '',
        legendLeft: '65%',
        legendTop: '43%',
        centerRatio: ['38%', '50%'],
        color: ['#00F89B', '#FFCA34', '#E82B41'],
        showLabel: true,
        labelType: 1,
        data: [
          { name: '绿码（9～12分）', value: 111 },
          { name: '黄码（7～8分）', value: 50 },
          { name: '红码（0～6分）', value: 80 }
        ]
      })
      bar_chart3('bar1', {
        rotate: -20,
        color: ['#E82B41', '#FE9D21'],
        barWidth: '30%',
        legend: ['红码人数', '黄码人数'],
        x: x1,
        y: [
          {
            name: '红码人数',
            data: y1
          },
          {
            name: '黄码人数',
            data: y2
          }
        ]
      })
      // 党组织信息
      pie_chart1('pie2', {
        name: '党组织信息',
        center: '',
        legendLeft: '65%',
        legendTop: '10%',
        centerRatio: ['38%', '50%'],
        color: ['#FF581D', '#FE9D21', '#9033A5', '#219BFE', '#21FEC1'],
        data: [
          { name: '1星', value: 111 },
          { name: '2星', value: 50 },
          { name: '3星', value: 80 },
          { name: '4星', value: 60 },
          { name: '5星', value: 90 }
        ]
      })
      bar_chart3('bar2', {
        rotate: -20,
        color: ['#FF581D', '#FE9D21', '#9033A5', '#219BFE', '#21FEC1'],
        barWidth: '30%',
        stack: 'one',
        legend: ['1星', '2星', '3星', '4星', '5星'],
        x: x1,
        y: [
          { name: '1星', data: y1 },
          { name: '2星', data: y2 },
          { name: '3星', data: y3 },
          { name: '4星', data: y4 },
          { name: '5星', data: y5 }
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
