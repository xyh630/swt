<template>
  <div class="pro-left">
    <div class="qushi">
      <div class="tit">
        重过载月趋势
      </div>

      <div id="poly"></div>

    </div>
    <div class="paihang">
      <div class="tit">
        重过载台区排行
      </div>

      <scroll-ranking-board-overload v-if="config.data.length!=0" :config='config' style='width:9rem;height:6rem;padding-top:.5rem'></scroll-ranking-board-overload>
      <div v-if="config.data.length==0" class="default-img">
        <img src="../../assets/img/default.png" alt="">
      </div>
    </div>
  </div>

  </div>
</template>

<script>
import echarts from 'echarts'
import scrollRankingBoardOverload from '@/components/tools/scroll-ranking-board-overload.vue'
export default {
  data() {
    return {
      option: {
        grid: {
          top: "25%",
          bottom: "10%",
          left: '15%'
        },
        tooltip: {
          trigger: "axis",

        },
        toolbox: { //可视化的工具箱
          show: true,
          itemSize: fontSize(.4),
          iconStyle: {
            borderColor: '#fff',
            borderWidth: fontSize(.04)
          },
          right: "10%",
          feature: {
            saveAsImage: {//保存图片
              show: true,
              backgroundColor: '#15575A',
              pixelRatio: 2
            },
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLine: {
            show: false,
            lineStyle: {
              color: '#fff'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            fontSize: fontSize(.18)
          },
          data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
        },
        yAxis: {
          name: '重过载/次',
          nameTextStyle: {
            fontSize: fontSize(.24),
            textAlign: 'right'
          },
          type: 'value',
          min: 0,
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#fff'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#00B4B1',
              width: fontSize(.03),
              type: 'dotted'
            }

          },
          axisLabel: {
            fontSize: fontSize(.24)
          }
        },
        series: [{
          smooth: false,
          data: [17, 18, 19, 5, 7, 6, 2, 18, 19],
          type: 'line',
          symbol: "circle", //标记的图形为实心圆
          symbolSize: fontSize(.07), //标记的大小
          // areaStyle: {},
          lineStyle: {
            color: '#FF9E0F',
            width: fontSize(.03)
          },
          itemStyle: {
            normal: {
              color: '#FF9E0F',
            }

          },
          emphasis: {
            show: true
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(255,158,15,1)'
              },
              {
                offset: 1,
                color: 'rgba(255,158,15,0)'
              }
              ], false),
            }
          },
        }]
      },
      config: {
        data: [

        ]
      },

    }
  },
  props: ['data_protection'],
  components: {
    scrollRankingBoardOverload
  },
  mounted: function () {
    this.option.series[0].data = this.data_protection.zdz;
    this.config.data = this.data_protection.gztq_rank;
    echarts.init(document.getElementById('poly')).setOption(this.option);
  }
}
</script>

<style scoped>
.pro-left {
  width: 18rem;
  height: 7.8rem;
  border: 0.1rem solid rgba(21, 87, 90, 0.6);
  background: rgba(21, 87, 90, 0.4);
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.paihang {
  width: 50%;
  position: relative;
}
.qushi {
  width: 50%;
}
.tit {
  font-size: 0.4rem;
  margin-top: 0.45rem;
  text-align: center;
}
#poly {
  width: 9rem;
  height: 6rem;
}
#zhu {
  width: 9rem;
  height: 6rem;
}
.default-img {
  width: 5.5rem;
  height: 5.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.default-img img {
  width: 100%;
  height: 100%;
}
</style>
