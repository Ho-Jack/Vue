<template>
  <div
    :id="id"
    :class="className"
    :style="{height:height,width:width}"
  />
</template>

<script>
import echarts from 'echarts'
import resize from './mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.initChart()
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id))

      this.chart.setOption({
        backgroundColor: '#082751',
        grid: {
          top: '15%',
          right: '3%',
          left: '5%',
          bottom: '12%'
        },
        xAxis: [{
          type: 'category',
          color: '#59588D',
          data: ['新安县', '汝阳县', '栾川县', '瀍河回族区', '洛宁县', '宜阳县', '孟津县', '偃师县', '吉利区 ', '洛龙区', '老城区', '西工区', '涧西区'],
          axisPointer: {
            type: 'line'
          },
          axisLine: {
            lineStyle: {
              color: '#1358A0'
            }
          },
          axisLabel: {
            margin: 20,
            color: '#81C1FF',
            textStyle: {
              fontSize: 12
            }
          },
          axisTick: {
            show: false
          }
        }],
        yAxis: [{
          min: 0,
          max: 100,
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          }
        }],
        series: [{
          type: 'bar',
          data: [100, 90, 10, 90, 90, 20, 56, 89, 60, 80, 40, 20, 60],
          barWidth: '15px',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#E447B7' // 0% 处的颜色
              }, {
                offset: 1,
                color: '#3946FF' // 100% 处的颜色
              }], false),
              barBorderRadius: [30, 30, 0, 0],

              shadowBlur: 4
            }
          },
          label: {
            normal: {
              show: true,
              lineHeight: 25,
              width: 60,
              height: 25,
              backgroundColor: '#11376A',
              borderRadius: 200,
              position: ['-10', '-50'],
              distance: 1,
              formatter: [
                '    {d|●}',
                ' {a|{c}%}     \n',
                '    {b|}'
              ].join(','),
              rich: {
                d: {
                  color: '#98FF2A'

                },
                a: {
                  color: '#fff',
                  align: 'center'
                },
                b: {
                  width: 1,
                  height: 20,
                  borderWidth: 1,
                  borderColor: '#234e6c',
                  align: 'left'
                }
              }
            }
          }
        }]
      })
    }
  }
}
</script>
