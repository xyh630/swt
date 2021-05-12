<template>
  <div class="rep-left">
    <div class="single">
      <div class="tit">本月抢修数量</div>
      <div class="con">
        <div style="margin-right:.2rem">抢修</div>
        <dv-digital-flop v-for="(item,index) in num_list" :key="index" class="num" :config="{number:[item],content:'{nt}',textBaseline:'top',style:style}" />
        <div style="margin-left:.2rem">次</div>
      </div>
      <div id="re-poly1"></div>
    </div>
    <div class="many">
      <div class="tit">本年抢修趋势</div>
      <div class="con">
        <div style="margin-right:.2rem">抢修</div>
        <dv-digital-flop class="num" v-for="(item,index) in year_num_list" :key="index" :config="{number:[item],content:'{nt}',textBaseline:'top',style:style}" />
        <div style="margin-left:.2rem">次</div>
      </div>
      <div id="re-poly"></div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  data() {
    return {
      qianwei: 0,
      baiwei: 0,
      shiwei: 0,
      gewei: 0,
      style: {
        fontSize: fontSize(.8),
        fill: '#F6FF00',
      },
      num: this.data_repair.cur_month_num,
      year_num: this.data_repair.cur_year_num,
      num_list: [],
      year_num_list: []
    }
  },
  props: ['data_repair'],
  mounted: function () {

    var option = {
      grid: {
        top: "25%",
        bottom: "10%",
        left: '20%'
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
      tooltip: {
        trigger: "axis",
        formatter: '{b}' + '日' + '<br>{c}'
      },
      xAxis: [{
        type: 'category',
        boundaryGap: true,
        axisLine: { //坐标轴轴线相关设置。数学上的x轴
          show: false,
          lineStyle: {
            color: '#0ABDA7'
          },
        },

        axisLabel: { //坐标轴刻度标签的相关设置
          textStyle: {
            color: '#fff',
            fontSize: fontSize(.27),
          },
          interval: 3
        },
        axisTick: {
          show: false,
        },
        data: [],
      }],
      yAxis: [{
        type: 'value',
        name: '抢修数/次',
        nameTextStyle: {
          color: "#fff",
          fontSize: fontSize(.33),
          align: 'right'
        },

        nameLocation: 'end',
        min: 0,
        max: 10,
        minInterval: 1,
        splitNumber: 5,
        splitLine: {
          show: true,
          lineStyle: {
            color: '#0ABDA7',
            type: 'dashed',
            width: fontSize(.03)
          }
        },
        axisLabel: { //坐标轴刻度标签的相关设置
          textStyle: {
            color: '#fff',
            fontSize: fontSize(.33),
          },
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      }],
      series: [{
        // name: '注册总量',
        type: 'line',
        // smooth: true, //是否平滑曲线显示
        symbol: 'circle',  // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: true,
        symbolSize: 6,
        lineStyle: {
          normal: {
            color: "#40FA80", // 线条颜色,
            width: fontSize(.03)
          },
          borderColor: '#40FA80'
        },
        itemStyle: {
          normal: {
            color: "#40FA80",
            fontSize: fontSize(.27)
          }
        },
        emphasis: {
          itemStyle: {
            // 高亮时点的颜色。
            color: 'blue'
          },
          // label: {
          //     show: true,
          //     // 高亮时标签的文字。
          //     formatter: true
          // }
        },
        areaStyle: { //区域填充样式
          normal: {
            //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(64,250,128,.6)'
            },
            {
              offset: 1,
              color: 'rgba(64,250,128,0)'
            }
            ], false),
            shadowColor: 'rgba(64,250,128, 0.9)', //阴影颜色
            shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
          }
        },
        data: [0, 1, 2, 3, 2, 2, 1, 0, 2]
      },]
    };
    var option1 = {
      grid: {
        top: "25%",
        bottom: "10%",
        left: '20%'
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
      tooltip: {
        trigger: "axis",
        formatter: '{b}' + '<br>{c}'
      },

      xAxis: [{
        type: 'category',
        boundaryGap: true,
        axisLine: { //坐标轴轴线相关设置。数学上的x轴
          show: false,
          lineStyle: {
            color: '#0ABDA7'
          },
        },

        axisLabel: { //坐标轴刻度标签的相关设置
          textStyle: {
            color: '#fff',
            fontSize: fontSize(.27),
          },
          interval: 3
        },
        axisTick: {
          show: false,
        },
        data: [],
      }],
      yAxis: [{
        type: 'value',
        name: '抢修数/次',
        nameTextStyle: {
          color: "#fff",
          fontSize: fontSize(.33),
          align: 'right'
        },

        nameLocation: 'end',
        min: 0,
        // max:100,
        minInterval: 1,
        splitNumber: 5,
        splitLine: {
          show: true,
          lineStyle: {
            color: '#0ABDA7',
            type: 'dashed',
            width: fontSize(.03)
          }
        },
        axisLabel: { //坐标轴刻度标签的相关设置
          textStyle: {
            color: '#fff',
            fontSize: fontSize(.33),
          },
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      }],
      series: [{
        // name: '注册总量',
        type: 'line',
        // smooth: true, //是否平滑曲线显示
        symbol: 'circle',  // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: true,
        symbolSize: 6,
        lineStyle: {
          normal: {
            color: "#40FA80", // 线条颜色,
            width: fontSize(.03)
          },
          borderColor: '#40FA80'
        },
        itemStyle: {
          normal: {
            color: "#40FA80",
            fontSize: fontSize(.27)
          }
        },
        emphasis: {
          itemStyle: {
            // 高亮时点的颜色。
            color: 'blue'
          },
          // label: {
          //     show: true,
          //     // 高亮时标签的文字。
          //     formatter: true
          // }
        },
        areaStyle: { //区域填充样式
          normal: {
            //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(64,250,128,.6)'
            },
            {
              offset: 1,
              color: 'rgba(64,250,128,0)'
            }
            ], false),
            shadowColor: 'rgba(64,250,128, 0.9)', //阴影颜色
            shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
          }
        },
        data: [0, 1, 2, 3, 2, 2, 1, 0, 2]
      },]
    };


    option.xAxis[0].data = []
    for (var i = 0; i < this.data_repair.cur_month_gd.length; i++) {
      option.xAxis[0].data.push(i + 1);
    }
    option.series[0].data = this.data_repair.cur_month_gd;
    echarts.init(document.getElementById('re-poly1')).setOption(option)
    option1.xAxis[0].data = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    option1.series[0].data = this.data_repair.cur_year_gd;
    echarts.init(document.getElementById('re-poly')).setOption(option1)

    this.num_list = this.handleData(this.num);
    this.year_num_list = this.handleData(this.year_num);

  },
  methods: {
    //处理次数值
    handleData: function (num) {
      
      //分离出千位
      let qianwei = parseInt(num / 1000);
      //分离出百位
      let baiwei = parseInt((num / 100) % 10);
      //分离出十位
      let shiwei = parseInt((num / 10) % 10);
      //分离出各位
      let gewei = parseInt(num % 10);
      
      return [qianwei, baiwei, shiwei, gewei]

    }
  }
}
</script>

<style scoped>
.rep-left {
  width: 13.7rem;
  height: 100%;
  border: 0.1rem solid rgba(21, 87, 90, 0.6);
  background: rgba(21, 87, 90, 0.4);
  box-sizing: border-box;
}
.single {
  height: 50%;
}
.tit {
  margin-top: 0.4rem;
  font-size: 0.4rem;
  text-align: center;
}
.con {
  font-size: 0.4rem;
  color: #28c0b4;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.25rem;
  height: 20%;
}
.num {
  width: 0.66rem;
  height: 1.06rem;
  background-image: url("../../assets/img/shape.png");
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 0.125rem;
}
.many {
  height: 50%;
}
#re-poly {
  height: 5rem;
  width: 100%;
  padding: 0.2rem 0.4rem;
}
#re-poly1 {
  height: 5rem;
  width: 100%;
  padding: 0.2rem 0.4rem;
  box-sizing: border-box;
}
</style>
