<template>
<div>
  <div class="leftSide">
    <div class="m_box box1">
      <m-title>
        <div slot="title">村社总览</div>
      </m-title>
      <ul class="list">
        <li v-for="(v,i) in l_box1_list" :key="i">
          <p>{{v.value}}<span class="per">{{v.per}}</span></p>
          <p>{{v.name}}</p>
        </li>
      </ul>
    </div>
    <div class="m_box box2">
      <m-title>
        <div slot="title">高频事项</div>
        <div slot="more" @click="$emit('changeCrowdPop',1)">详情</div>
      </m-title>
      <div class="chart1" id="pie1"></div>
      <p class="t">办事效率预警</p>
      <div class="chart2" id="bar1"></div>
    </div>
    <div class="m_box box3">
      <m-title>
        <div slot="title">微权力公开</div>
      </m-title>
      <ul class="list">
        <li v-for="(v,i) in l_box3_list" :key="i">
          <p>{{v.value}}<span class="per">{{v.per}}</span></p>
          <p>{{v.name}}</p>
        </li>
      </ul>
    </div>
  </div>
  <div class="rightSide">
    <div class="m_box box1">
      <m-title>
        <div slot="title">问题监督</div>
      </m-title>
      <div class="bar">
        <div class="l" :style="{width:r_box1_data.per1}"><span>{{r_box1_data.per1}}</span></div>
        <div class="r" :style="{width:r_box1_data.per2}"><span>{{r_box1_data.per2}}</span></div>
        <div class="l_detail" :style="{left:r_box1_data.left}">
          <img src="../../img/pointer.png" alt="">
          <p class="p1">{{r_box1_data.name1}}</p>
          <p class="p2">{{r_box1_data.value1}}</p>
        </div>
        <div class="r_detail" :style="{right:r_box1_data.right}">
          <img src="../../img/pointer.png" alt="">
          <p class="p1">{{r_box1_data.name2}}</p>
          <p class="p2">{{r_box1_data.value2}}</p>
        </div>
      </div>
    </div>
    <div class="m_box box2">
      <m-title>
        <div slot="title">问题曝光台</div>
        <div slot="more" @click="$emit('changeCrowdPop',2)">详情</div>
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
    <div class="m_box box3">
      <m-title>
        <div slot="title">两问大走访</div>
        <div slot="more" @click="$emit('changeCrowdPop',3)">详情</div>
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
            <div class="chart" id="pie2"></div>
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
import { pie_chart1, line_chart1, bar_chart3 } from '@/assets/js/m_chart.js'
export default {
  data () {
    return {
      interval: 5000,
      l_box1_list: [
        { name: '村域面积', value: '4.5', per: 'k㎡' },
        { name: '总人口数', value: '1827', per: '' },
        { name: '党员数', value: '80', per: '' },
        { name: '村民代表', value: '54', per: '' }
      ],
      r_box1_data: {
        name1: '已处置数',
        value1: '9710',
        per1: '70%',
        left: '35%',
        name2: '未处置数',
        value2: '4162',
        per2: '30%',
        right: '15%'
      },
      r_box2_list: [
        { tag: '临时救助身份异常', date: '05/01', detail: '大陈镇，张*伟（338476****6475），发现身份异常，需要帮助' },
        { tag: '务工支出异常', date: '05/01', detail: '大陈镇堆积物清理务工支出单价150元到300元不等，发生日同一天的价格也不同' }
      ],
      l_box3_list: [
        { name: '公开数量', value: '920' },
        { name: '已读人数', value: '790' },
        { name: '置询数量', value: '726' },
        { name: '答复数量', value: '726' }
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
      pie_chart1('pie1', {
        name: '高频事项',
        center: 15,
        legendLeft: '36%',
        color: ['#21FEC1', '#F91266', '#634CFF', '#219BFE', '#84FF7E', '#29DFF3', '#FF9537'],
        data: [
          { name: '征迁安置', value: 22 },
          { name: '村级采购', value: 13 },
          { name: '集体资产资源', value: 32 },
          { name: '村级工程', value: 18 },
          { name: '农民建房', value: 23 },
          { name: '劳务用工', value: 35 },
          { name: '困难群体救助', value: 23 }
        ]
      })
      bar_chart3('bar1', {
        rotate: -20,
        color: ['#21FEC1'],
        x: ['征迁安置', '村级采购', '集体资产资源', '村级工程', '农民建房', '劳务用工', '困难群体救助'],
        y: [
          {
            name: '高频事项',
            data: [22, 33, 44, 33, 22, 33, 44]
          }
        ]
      })
      // 两问大走访
      pie_chart1('pie2', {
        name: '两问大走访',
        center: '',
        legendLeft: '62%',
        legendTop: '20%',
        centerRatio: ['34%', '50%'],
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
        itemWidth: 20 * scale,
        itemHeight: 2 * scale,
        splitLine: true,
        gridTop: '18%',
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
<style lang='less' scoped src="./css/village.less"/>
