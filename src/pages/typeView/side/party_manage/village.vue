<template>
<div>
  <div class="leftSide">
    <div class="m_box box1">
      <m-title>
        <div slot="title">党员信息</div>
        <div slot="more">详情</div>
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
      <div class="chart" id="pie1"></div>
    </div>
  </div>
  <div class="rightSide">
    <div class="m_box box1">
      <m-title>
        <div slot="title">党组织信息</div>
      </m-title>
      <div class="chart" id="pie2"></div>
    </div>

  </div>
</div>
</template>

<script>
import { pie_chart1 } from '@/assets/js/m_chart.js'
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
      // 党组织信息
      pie_chart1('pie2', {
        name: '党组织信息',
        center: '',
        legendLeft: '65%',
        legendTop: '10%',
        centerRatio: ['38%', '50%'],
        color: ['#FF581D', '#FE9D21', '#9033A5', '#219BFE', '#21FEC1'],
        showLabel: true,
        labelType: 2,
        data: [
          { name: '1星', value: 111 },
          { name: '2星', value: 50 },
          { name: '3星', value: 80 },
          { name: '4星', value: 60 },
          { name: '5星', value: 90 }
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
