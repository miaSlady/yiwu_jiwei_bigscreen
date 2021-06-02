<template>
<div>
  <div class="leftSide">
    <div class="m_box box1">
      <m-title>
        <div slot="title">会议信息（年）</div>
        <div slot="more" @click="$emit('changeCrowdPop',1)">详情</div>
      </m-title>
      <ul class="list">
        <li v-for="(v,i) in l_box1_list" :key="i">
          <img :src="v.img" alt="">
          <div>
            <p>{{v.value}}</p>
            <p>{{v.name}}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="m_box box2">
      <m-title>
        <div slot="title">会议统计</div>
      </m-title>
      <div class="chart" id="bar1"></div>
    </div>
  </div>
  <div class="rightSide">
    <div class="m_box box1">
      <m-title>
        <div slot="title">村级公章使用（年）</div>
      </m-title>
      <div class="chart" id="pie1"></div>
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
          name: '村民代表大会',
          value: '3247',
          img: require('./img/icon1.png')
        },
        {
          name: '村务联席会议',
          value: '35630',
          img: require('./img/icon2.png')
        }
      ]

    }
  },
  methods: {
    initData () {
      const x1 = []; const y1 = []; const y2 = []
      for (const i in CITY) {
        const v = CITY[i]
        x1.push(v.name)
        y1.push((Math.random() * 50).toFixed(0))
        y2.push((Math.random() * 10).toFixed(0))
      }
      // 会议统计
      bar_chart3('bar1', {
        rotate: -50,
        color: ['#21FEC1', '#FE9D21'],
        barWidth: '30%',
        legend: ['村民代表大会', '村务联席会议'],
        x: x1,
        y: [
          {
            name: '村民代表大会',
            data: y1
          },
          {
            name: '村务联席会议',
            data: y2
          }
        ]
      })
      // 村级公章使用（年）
      pie_chart1('pie1', {
        name: '村级公章使用（年）',
        center: '9593',
        legendLeft: '65%',
        legendTop: '10%',
        centerRatio: ['38%', '50%'],
        titleLeft: '37%',
        color: ['#FF581D', '#FE9D21', '#9033A5', '#219BFE', '#21FEC1'],
        data: [
          { name: '经济合作社公章', value: 111 },
          { name: '调解委员会公章', value: 50 },
          { name: '村监会公章', value: 80 },
          { name: '党支部公章', value: 60 },
          { name: '村委会公章', value: 90 }
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
