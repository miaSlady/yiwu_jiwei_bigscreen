<template>
  <div>
    <div class="leftSide">
     <div class="m_box box1">
        <m-title>
          <div slot="title">建房信息</div>
          <div slot="more">详情</div>
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
      <div class="m_box box2">
        <m-title>
          <div slot="title">建房占比</div>
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
    }
  },
  mounted () {
  }
}
</script>
<style lang='less' scoped src="./css/village.less"/>
