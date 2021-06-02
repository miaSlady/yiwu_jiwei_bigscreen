import * as echarts from 'echarts'
/**
 * 折线图
 */
// 渐变折线图（可多条，可带legend，可color）
function line_chart1 (id, data) {
  const arr = []
  let legend = null
  data.y && data.y.forEach((v, i) => {
    const obj = {
      name: v.name,
      type: 'line',
      yAxisIndex: 0,
      smooth: true,
      symbol: 'none',
      itemStyle: {
        normal: {
          color: v.color
        }
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 0,
            color: 'rgba(49, 202, 115, 0)'
          }, {
            offset: 1,
            color: v.color
          }])
        }
      },
      data: v.data
    }
    arr.push(obj)
  })
  if (data.legend) {
    legend = {
      right: data.right || 10 * scale,
      icon: data.legendIcon || 'circle',
      textStyle: {
        color: data.legendColor || '#E6FFFF',
        fontSize: data.fontSize || 12 * scale
      },
      itemWidth: data.itemWidth || 10 * scale,
      itemHeight: data.itemHeight || 10 * scale,
      data: data.legend
    }
  }
  const option = {
    color: data.color,
    grid: {
      left: data.gridLeft || '10%',
      right: data.gridRight || '10%',
      top: data.gridTop || '15%',
      bottom: '20%'
    },
    legend,
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      axisTick: {
        show: false
      }, // 不显示轴刻度
      axisLine: {
        show: true,
        lineStyle: {
          color: data.color || 'transparent'
        }
      },
      axisLabel: {
        textStyle: {
          fontSize: data.fontSizeX || 10 * scale,
          color: data.colorY || 'rgba(255,255,255,0.60)'
        },
        color: 'rgba(255,255,255,0.60)', // y轴名字颜色
        interval: data.interval ? 0 : null // 强制显示所有标签
      },
      data: data.x
    },
    yAxis: {
      show: true,
      splitLine: {
        show: data.splitLine || false,
        lineStyle: {
          type: 'dashed',
          color: data.lineColor || 'rgba(2,107,200,.4)'
        }
      },
      axisTick: {
        show: false
      }, // 不显示轴刻度
      axisLine: {
        show: false
      },
      axisLabel: {
        textStyle: {
          fontSize: 12 * scale,
          color: data.colorY || 'rgba(255,255,255,0.60)'
        },
        show: true
      }
    },
    series: arr
  }
  const chart = echarts.init(document.getElementById(id))
  chart.setOption(option, true)
}

/**
 * 饼图
 */
// 多图标饼图
function pie_chart1 (id, data) {
  // 基于准备好的dom，初始化echarts实例
  const chart = echarts.init(document.getElementById(id))
  const option = {
    color: data.color,
    title: {
      text: data.center,
      top: data.titleTop || '43%',
      textAlign: 'center',
      left: data.titleLeft || '17%',
      textStyle: {
        color: '#E6FFFF',
        fontSize: 22 * scale,
        fontWeight: '700'
      }
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: data.legendLeft || '50%',
      align: 'left',
      top: data.legendTop || '10%',
      textStyle: {
        color: data.legendColor || '#E6FFFF',
        fontSize: data.fontSize || 12 * scale
      },
      orient: data.orients || 'vertical',
      itemWidth: data.itemWidth || 10 * scale,
      itemHeight: data.itemHeight || 10 * scale
    },
    series: [{
      name: data.name,
      type: 'pie',
      center: data.centerRatio || ['18%', '50%'],
      radius: ['50%', '75%'],
      label: {
        show: data.showLabel || false,
        formatter (v) {
          if (data.labelType == 1) return `${v.value}人 ${v.percent}%`
        }
      },
      labelLine: {
        show: true,
        normal: {
          length: 1 * scale,
          lengt2: 1 * scale
        }
      },
      data: data.data
    }]
  }
  chart.setOption(option, true)
}
// 线条指示饼图
function pie_chart2 (id, data) {
  const option = {
    // backgroundColor: '#031845',
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {d}% <br/> {c}'
    },
    legend: {
      orient: 'horizontal',
      icon: 'circle',
      bottom: 5,
      x: 'center',
      textStyle: {
        color: '#fff'
      },
      data: data.title
    },
    series: [{
      type: 'pie',
      radius: ['30%', '50%'],
      center: ['50%', '50%'],
      color: data.color,
      data: data.data,
      labelLine: {
        normal: {
          show: true,
          length: 10,
          length2: 10,
          lineStyle: {
            color: '#12EABE',
            width: 2
          }
        }
      },
      label: {
        normal: {
          formatter: '{c|{c}}\n{hr|}\n{d|{d}%}',
          rich: {
            b: {
              fontSize: 12,
              color: '#12EABE',
              align: 'left',
              padding: 4
            },
            hr: {
              borderColor: '#12EABE',
              width: '100%',
              borderWidth: 2,
              height: 0
            },
            d: {
              fontSize: 12,
              color: '#fff',
              align: 'left',
              padding: 4
            },
            c: {
              fontSize: 12,
              color: '#fff',
              align: 'left',
              padding: 4
            }
          }
        }
      }
    }]
  }
  const chart = echarts.init(document.getElementById(id))
  chart.setOption(option, true)
}

/**
 * 柱状图
 */
// 横向柱状图
function bar_chart1 (id, data) {
  const option = {
    tooltip: {
      trigger: 'item'
    },
    grid: {
      left: '5%',
      right: '5%',
      bottom: '0%',
      top: '5%',
      containLabel: true
    },
    xAxis: {
      show: true,
      type: 'value',
      axisLabel: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLine: {
        show: false
      }
    },
    yAxis: [{
      type: 'category',
      inverse: true,
      axisLabel: {
        show: true,
        textStyle: {
          color: '#E6FFFF',
          fontSize: 12 * scale
        }
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      data: data.x // 名称
    }

    ],
    series: [{
      name: data.name,
      type: 'bar',
      zlevel: 1,
      itemStyle: {
        normal: {
          barBorderRadius: data.barBorderRadius || [0, 30, 30, 0],
          color (v) {
            return new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
              offset: 1,
              color: data.colorList[0]
            }, {
              offset: 0,
              color: data.colorList[1]
            }])
          }
        }
      },
      barWidth: '40%',
      data: data.y // 实际数据
    }]
  }
  const chart = echarts.init(document.getElementById(id))
  chart.setOption(option, true)
}
// 横向堆叠
function bar_chart2 (id, data) {
  let legend = null
  const series = []
  if (data.legend) {
    legend = {
      top: 0,
      icon: 'roundRect',
      itemWidth: 12 * scale,
      itemHeight: 12 * scale,
      textStyle: {
        color: '#E6FFFF',
        fontSize: 12 * scale
      },
      data: data.legend
    }
  }
  data.y.forEach((v, i) => {
    series.push({
      name: data.legend[i],
      type: 'bar',
      stack: 'one',
      barWidth: '40%',
      itemStyle: {
        normal: {
          barBorderRadius: data.barBorderRadius[i],
          color (v) {
            return new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 1,
              color: data.colorList[i][0]
            }, {
              offset: 0,
              color: data.colorList[i][1]
            }])
          }
        }
      },
      data: v
    })
  })
  const option = {
    color: data.color,
    tooltip: {
      trigger: 'item'
    },
    legend,
    grid: {
      left: '5%',
      right: '5%',
      bottom: '0%',
      top: '15%',
      containLabel: true
    },
    xAxis: {
      show: true,
      type: 'value',
      axisLabel: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLine: {
        show: false
      }
    },
    yAxis: [{
      type: 'category',
      inverse: true,
      axisLabel: {
        show: true,
        textStyle: {
          color: '#E6FFFF',
          fontSize: 12 * scale
        }
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      data: data.x // 名称
    }],
    series
  }
  const chart = echarts.init(document.getElementById(id))
  chart.setOption(option, true)
}
// 柱状图(纵向可多条、可堆叠)
function bar_chart3 (id, data) {
  const series = []
  let legend = null
  data.y.forEach(v => {
    series.push({
      name: v.name,
      stack: data.stack || '',
      type: 'bar',
      barWidth: data.barWidth || '40%',
      data: v.data
    })
  })
  if (data.legend) {
    legend = {
      right: 15 * scale,
      icon: 'roundRect',
      textStyle: {
        color: '#E6FFFF'
      },
      itemWidth: data.itemWidth || 10 * scale,
      itemHeight: data.itemHeight || 10 * scale,
      data: data.legend
    }
  }
  const option = {
    color: data.color,
    legend,
    tooltip: {
      trigger: 'axis',
      formatter: '{a} <br/>{b} : {c}'
    },
    grid: {
      top: '15%',
      left: '3%',
      right: '4%',
      bottom: '5%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: data.x,
      axisLine: {
        show: false
      },
      axisTick: {
        alignWithLabel: true
      },
      axisLabel: {
        textStyle: {
          fontSize: 10 * scale
        },
        color: data.colorX || 'rgba(255,255,255,0.60)',
        rotate: data.rotate || 0
      }
    }],
    yAxis: [{
      type: 'value',
      splitLine: {
        show: data.splitLine || false,
        lineStyle: {
          type: 'dashed',
          color: data.lineColor || 'rgba(2,107,200,.4)'
        }
      },
      axisTick: {
        show: false
      }, // 不显示轴刻度
      axisLine: {
        show: false
      },
      axisLabel: {
        textStyle: {
          fontSize: 10 * scale
        },
        color: data.colorY || 'rgba(255,255,255,0.60)', // y轴名字颜色
        interval: 0 // 强制显示所有标签
      }
    }

    ],
    series
  }
  const chart = echarts.init(document.getElementById(id))
  chart.setOption(option, true)
}

export {
  line_chart1,
  pie_chart1,
  pie_chart2,
  bar_chart1,
  bar_chart2,
  bar_chart3
}
