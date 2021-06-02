<template>
  <div>
    <div class="leftSide">
      <div class="m_box box1">
        <m-title>
          <div slot="title">财务信息（年）</div>
          <div slot="more">详情</div>
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
      <div class="m_box box2">
        <m-title>
          <div slot="title">收入支出占比</div>
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
      </div>
    </div>
    <div class="rightSide">
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
        name1: '收入',
        value1: '9710',
        per1: '70%',
        left: '35%',
        name2: '支出',
        value2: '4162',
        per2: '30%',
        right: '15%'
      }
    }
  },
  methods: {
    callback (val) {
      this.mode = val
    }
  },
  mounted () {
  }
}
</script>
<style lang='less' scoped src="./css/village.less"/>
