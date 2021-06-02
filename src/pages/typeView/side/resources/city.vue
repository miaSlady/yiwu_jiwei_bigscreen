<template>
  <div>
    <div class="leftSide">
      <div class="m_box box1">
        <m-title>
          <div slot="title">资产信息</div>
          <div slot="more"  @click="$emit('changeCrowdPop',1)">详情</div>
        </m-title>
        <div class="content">
          <dl>
            <dt>
              <img src="./img/title3.png" alt="" />
            </dt>
            <dd>
              <p><span>9024</span>处</p>
              <p>资产数量</p>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src="./img/title2.png" alt="" />
            </dt>
            <dd>
              <p><span>518</span>处</p>
              <p>闲置资产数量</p>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src="./img/title1.png" alt="" />
            </dt>
            <dd>
              <p><span>1860200</span>处</p>
              <p>总金额</p>
            </dd>
          </dl>
        </div>
      </div>
      <div class="m_box box1">
        <m-title>
          <div slot="title">资产占比</div>
          <div slot="more">
            <button @click="callback(1)" :class="{ active: mode == 1 }">
              经营性资产
            </button>
            <button @click="callback(2)" :class="{ active: mode == 2 }">
              非经营性资产
            </button>
          </div>
        </m-title>
        <div class="content">
          <div id="charts1" :style="{ width: '100%', height: '160px' }"></div>
        </div>
      </div>
      <div class="m_box box1">
        <m-title>
          <div slot="title">资产排行</div>
          <div slot="more">
            <button @click="callbacks(1)" :class="{ active: modes == 1 }">
              经营性资产
            </button>
            <button @click="callbacks(2)" :class="{ active: modes == 2 }">
              非经营性资产
            </button>
          </div>
        </m-title>
        <div class="content">
          <div id="charts2" :style="{ width: '100%', height: '200px' }"></div>
        </div>
      </div>
      <!-- <span @click="$router.push('/overview?type=3')">跳转到3</span> -->
    </div>
    <div class="rightSide"></div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      crowdPop: null,
      mode: 1,
      modes: 1
    }
  },
  methods: {
    callback (val) {
      this.mode = val
    },
    callbacks (val) {
      this.modes = val
    },
    // 左一 ==> 饼图
    bar_chart1 () {
      // 基于准备好的dom，初始化echarts实例
      const myBar1 = this.$echarts.init(document.getElementById('charts1'))
      var m2R2Data = [
        {
          value: 421,
          legendname: '出售',
          name: '出售 421',
          itemStyle: { color: 'rgba(0,248,155,1)' }
        },
        {
          value: 321,
          legendname: '出租',
          name: '出租 321',
          itemStyle: { color: 'rgba(196,24,205,1)' }
        },
        {
          value: 998,
          legendname: '合资',
          name: '合资 998',
          itemStyle: { color: 'rgba(90,207,238,1)' }
        }
      ]

      myBar1.setOption({
        title: [
          {
            // text: "合计",
            subtext: 9024 + '处',
            textStyle: {
              fontSize: 18,
              color: '#fff'
            },
            subtextStyle: {
              fontSize: 14,
              color: '#fff'
            },
            textAlign: 'center',
            x: '34.5%',
            y: '36%'
          }
        ],
        tooltip: {
          trigger: 'item',
          formatter: function (parms) {
            var str =
              parms.seriesName +
              '</br>' +
              parms.marker +
              '' +
              parms.data.legendname +
              '</br>' +
              '数量：' +
              parms.data.value +
              '</br>' +
              '占比：' +
              parms.percent +
              '%'
            return str
          }
        },
        legend: {
          type: 'scroll',
          orient: 'vertical',
          left: '70%',
          align: 'left',
          top: 'middle',
          textStyle: {
            color: '#8C8C8C'
          },
          height: 250
        },
        series: [
          {
            name: '标题',
            type: 'pie',
            center: ['35%', '50%'],
            radius: ['40%', '65%'],
            clockwise: false, // 饼图的扇区是否是顺时针排布
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: 'outter',
                formatter: function (parms) {
                  return parms.data.legendname
                }
              }
            },
            labelLine: {
              normal: {
                length: 5,
                length2: 3,
                smooth: true
              }
            },
            data: m2R2Data
          }
        ]
      })
    },
    // 左二 ==> 柱状
    bar_chart2 () {
      // 基于准备好的dom，初始化echarts实例
      const myBarGraph = this.$echarts.init(document.getElementById('charts2'))
      // 绘制图表
      myBarGraph.setOption({
        tooltip: {
          // 提示框
          // show: false,
          trigger: 'item'
          // formatter: "{a} <br/>{b} : {c}%)",
        },
        legend: {
          // 图例的显示
          type: 'scroll',
          orient: 'horizontal',
          textStyle: {
            fontWeight: 300,
            fontSize: 8,
            color: '#fff'
          },
          itemWidth: 10,
          itemHeight: 10
        },
        xAxis: {
          type: 'category',
          show: true,
          data: ['北苑街道', '稠城街道', '稠江街道', '江东街道', '后宅街道', '城西街道'],
          axisLabel: {
            color: '#fff',
            fontSize: '10',
            rotate: -21,
            align: 'left'
          }
        },
        yAxis: {
          max: 1000,
          show: true,
          min: 0,
          splitLine: {
            show: false
          }
        },
        grid: {
          top: '15%',
          left: '3%',
          right: '4%',
          bottom: '15%'
        },
        series: [
          {
            name: '出售',
            type: 'bar',
            data: [500, 400, 700, 430, 232, 675],
            barWidth: 8,
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(254,157,33,1)' // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: 'rgba(254,157,33,1)' // 100% 处的颜色
                }
              ],
              global: false // 缺省为 false
            }
          },
          {
            name: '出租',
            type: 'bar',
            data: [700, 900, 400, 730, 765, 977],
            barWidth: 8,
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(33,254,193,1)' // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: 'rgba(33,254,193,1)' // 100% 处的颜色
                }
              ],
              global: false // 缺省为 false
            }
          },
          {
            name: '合资',
            type: 'bar',
            data: [332, 950, 564, 876, 976, 658],
            barWidth: 8,
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(90,207,238,1)' // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: 'rgba(90,207,238,1)' // 100% 处的颜色
                }
              ],
              global: false // 缺省为 false
            }
          }
        ]
      })
    }
  },
  mounted () {
    this.bar_chart1()
    this.bar_chart2()
  }
}
</script>
<style lang='less' scoped src="./css/city.less"/>
