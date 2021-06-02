<template>
  <div>
    <div class="leftSide">
      <div class="m_box box1">
        <m-title>
          <div slot="title">派工信息（年）</div>
          <div slot="more">详情</div>
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
          <div slot="title">会务用工派工信息（年）</div>
          <div slot="more">详情</div>
        </m-title>
        <div class="content">
          <div id="bar1_1" :style="{ width: '100%', height: '200px' }"></div>
        </div>
      </div>
    </div>
    <div class="rightSide">
      <div class="m_box box1">
        <m-title>
          <div slot="title">劳务用工派工排行（年）</div>
        </m-title>
        <div class="content">
          <div
            class="chart"
            id="bar2_1"
            :style="{ width: '100%', height: '200px' }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { bar_chart1 } from '@/assets/js/m_chart.js'
export default {
  data () {
    return {
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
      // 劳务用工派工信息（年）
      bar_chart1('bar2_1', {
        name: '办事效率预警top5',
        x: ['上溪镇', '佛堂镇', '义亭镇', '赤岸镇', '稠城街道'],
        y: [199, 155, 99, 88, 66],
        barBorderRadius: [30, 30, 30, 30],
        colorList: ['#066FB0', '#00D0FC']
      })
      // 会务用工派工信息（年）
      bar_chart1('bar1_1', {
        name: '办事效率预警top5',
        x: ['上溪镇', '佛堂镇', '义亭镇', '赤岸镇', '稠城街道'],
        y: [199, 155, 99, 88, 66],
        barBorderRadius: [30, 30, 30, 30],
        colorList: ['#B05906', '#FCC800']
      })
    }
  },
  mounted () {
    this.ininData()
  }
}
</script>
<style lang='less' scoped src="./css/village.less"/>
