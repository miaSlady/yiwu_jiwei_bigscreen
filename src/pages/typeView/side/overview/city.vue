<template>
<div>
  <div class="leftSide">
    <div class="m_box box1">
      <m-title>
        <div slot="title">高频事项</div>
        <div slot="more" @click="$emit('changeCrowdPop',1)">详情</div>
      </m-title>
      <div class="content1" id="pie1"></div>
      <div class="content2">
        <p>办事效率预警top5</p>
        <div id="bar1"></div>
      </div>
    </div>
    <div class="m_box box2">
      <m-title>
        <div slot="title">用户活跃度top5</div>
      </m-title>
      <div class="chart" id="bar2"></div>
    </div>
  </div>
  <div class="rightSide">
    <div class="m_box box1">
      <m-title>
        <div slot="title">微权力公开</div>
      </m-title>
      <div class="chart" id="pie2"></div>
      <ul class="list">
        <li v-for="(v,i) in r_box1_list" :key="i">
          <p>{{v.value}}</p>
          <p>{{v.name}}</p>
        </li>
      </ul>
    </div>
    <div class="box2">
      <div class="m_box box2_1">
        <m-title>
          <div slot="title">问题监督</div>
          <div slot="more">
            <ul class="detailList">
              <li v-for="(v,i) in r_box2_tab" :key="i" :class="{active:r_box2_tabId==v.id}" @click="r_box2_tabId=v.id">{{v.name}}</li>
            </ul>
          </div>
        </m-title>
        <div class="chart" id="bar3"></div>
      </div>
      <div class="m_box box2_2">
        <m-title>
          <div slot="title">问题曝光台</div>
          <div slot="more"   @click="$emit('changeCrowdPop',2)">详情</div>
        </m-title>
        <ul class="list">
          <li v-for="(v,i) in r_box2_list" :key="i">
            <div class="title">
              <span class="tag">{{v.tag}}</span>
              <span class="date">{{v.date}}</span>
            </div>
            <div class="detail">{{v.detail}}</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="m_box box3">
      <m-title>
        <div slot="title">两问大走访</div>
        <div slot="more"   @click="$emit('changeCrowdPop',3)">详情</div>
      </m-title>
      <el-carousel height="18vh" :interval="interval"  arrow="never">
        <el-carousel-item>
          <div class="content">
            <ul class="list">
              <li v-for="(v,i) in r_box3_list" :key="i">
                <p>{{v.value}}</p>
                <p>{{v.name}}</p>
              </li>
            </ul>
            <div class="chart" id="pie3"></div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="chart2" id="line1"></div>
        </el-carousel-item>
      </el-carousel>

    </div>
  </div>

</div>
</template>

<script>
import { pie_chart1, bar_chart1, bar_chart2, line_chart1 } from '@/assets/js/m_chart.js'
export default {
  data () {
    return {
      interval: 5000,
      r_box1_list: [
        { name: '公开数量', value: '3520' },
        { name: '已读人数', value: '72931' },
        { name: '质询数量', value: '726' },
        { name: '答复数量', value: '726' }
      ],
      r_box2_tabId: 1,
      r_box2_tab: [
        { id: 1, name: '镇街' },
        { id: 2, name: '村社' }
      ],
      r_box2_list: [
        { tag: '临时救助身份异常', date: '05/01', detail: '大陈镇，张*伟（338476****6475），发现身份异常，需要帮助' },
        { tag: '务工支出异常', date: '05/01', detail: '大陈镇堆积物清理务工支出单价150元到300元不等，发生日同一天的价格也不同' }
      ],
      r_box3_list: [
        { name: '诉求总量', value: '3708' },
        { name: '走访数量', value: '47279' },
        { name: '村民提交数', value: '72' },
        { name: '已解决数量', value: '3019' }
      ]
    }
  },
  methods: {
    initData () {
      // 高频事项
      const data1 = []
      for (const i in CITY) {
        const v = CITY[i]
        data1.push({
          name: v.name,
          value: Number(Math.random() * 100).toFixed(0)
        })
      }
      pie_chart1('pie1', {
        name: '高频事项',
        center: 150,
        legendLeft: '36%',
        color: ['#21FEC1', '#FFE617', '#FF581D', '#84FF7E', '#634CFF', '#219BFE', '#0E906B', '#C37EFF', '#165C91', '#FF9799', '#9033A5', '#29DFF3', '#F91266', '#FF9537'],
        data: data1
      })
      bar_chart1('bar1', {
        name: '办事效率预警top5',
        x: ['上溪镇', '佛堂镇', '义亭镇', '赤岸镇', '稠城街道'],
        y: [199, 155, 99, 88, 66],
        barBorderRadius: [30, 30, 30, 30],
        colorList: ['#066FB0', '#00D0FC']
      })
      // 用户活跃度top5
      bar_chart1('bar2', {
        name: '办事效率预警top5',
        x: ['上溪镇', '佛堂镇', '义亭镇', '赤岸镇', '稠城街道'],
        y: [199, 155, 99, 88, 66],
        barBorderRadius: [30, 30, 30, 30],
        colorList: ['#B05906', '#FCC800']
      })
      // 微权力公开
      pie_chart1('pie2', {
        name: '高频事项',
        center: 2150,
        legendLeft: '36%',
        color: ['#21FEC1', '#FFE617', '#FF581D', '#84FF7E', '#634CFF', '#219BFE', '#0E906B', '#C37EFF', '#165C91', '#FF9799', '#9033A5', '#29DFF3', '#F91266', '#FF9537'],
        data: data1
      })
      // 问题监督
      bar_chart2('bar3', {
        name: '问题监督',
        color: ['#00D0FC', '#06B07F'],
        legend: ['已处置数', '未处置数'],
        x: ['上溪镇', '佛堂镇', '义亭镇', '赤岸镇', '稠城街道'],
        y: [[199, 155, 99, 88, 66], [33, 31, 22, 18, 12]],
        barBorderRadius: [[30, 0, 0, 30], [0, 30, 30, 0]],
        colorList: [['#066FB0', '#00D0FC'], ['#06B07F', '#00F2FC']]
      })
      // 两问大走访
      pie_chart1('pie3', {
        name: '两问大走访',
        center: '',
        legendLeft: '65%',
        legendTop: '20%',
        centerRatio: ['38%', '50%'],
        color: ['#219BFE', '#634CFF', '#84FF7E'],
        data: [
          { name: '发展建议', value: 111 },
          { name: '问题意见', value: 50 },
          { name: '个人诉求', value: 80 }
        ]
      })
      line_chart1('line1', {
        x: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
        legend: ['诉求总量', '已解决数量'],
        legendIcon: 'rect',
        legendColor: 'rgba(255,255,255,0.60)',
        itemWidth: 20 * scale,
        itemHeight: 2 * scale,
        colorX: 'rgba(255,255,255,0.60)',
        colorY: 'rgba(255,255,255,0.60)',
        splitLine: true,
        gridTop: '18%',
        lineColor: 'rgba(2,107,200,.4)',
        y: [
          {
            color: '#219BFE',
            name: '诉求总量',
            data: [11, 2, 22, 33, 23, 45, 32, 1, 32, 23, 16, 45]
          },
          {
            color: '#21FEC1',
            name: '已解决数量',
            data: [22, 1, 11, 23, 43, 23, 54, 34, 24, 25, 43, 43]
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
<style lang='less' scoped src="./css/city.less"/>
