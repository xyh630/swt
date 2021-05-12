class ChartGauge {
  constructor(el){
    this.el = el;
    this.myChart = null;

    this.autoSize = function (px) {
      let wi_ = window.innerWidth < 1220?1220:window.innerWidth;
      return Number(px) * (wi_ / 1920);
    };

    this.center = ['50%', '56%'];
    this.radius = ['100%', '101%'];

    this.option = {
      grid: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      },
      graphic: [
        {
          type: 'image',
          id: 'logo',
          left: 'center',
          top: this.autoSize(76),
          z: 5,
          style: {
            image: './static/img/dper.main.icon.gague.png',
            width: this.autoSize(72),
            height: this.autoSize(72),
            opacity: 1
          }
        }
      ],
      series: [
        {
          type: "pie",
          center: this.center,
          radius: this.radius,
          startAngle: 215,
          hoverAnimation: false,
          labelLine: {show: false},
          data: [70, 30]
        },
        {
          name: 'aqi-bg',
          type: 'gauge',
          radius: '90%',
          center: ['50%', '56%'],
          startAngle: 215,
          endAngle: -35,
          min: 0,
          max: 100,
          z: -1,
          splitNumber: 29,
          axisLine: {
            show: false,
            lineStyle: {
              show: false,
              width: 0
            }
          },
          axisLabel: {show: false},
          pointer: {show: false},
          splitLine: {show: false},
          axisTick: {
            length: 14,
            splitNumber: 3,
            lineStyle: {
              color: '#31589d',
              width: 3
            }
          },
          detail: {
            show: true,
            offsetCenter: [0, '36%'],
            formatter: '条/秒',
            textStyle: {
              color: '#11e4ec',
              fontSize: this.autoSize(20)
            }
          },
          title: {show: false},
          data: [100]
        },
        {
          name: '处理速度',
          type: 'gauge',
          radius: '90%',
          center: ['50%', '56%'],
          startAngle: 215,
          endAngle: 120,
          min: 0,
          max: 100,
          z: -1,
          splitNumber: 29,
          axisLine: {
            show: false,
            lineStyle: {
              show: false,
              width: 0
            }
          },
          axisLabel: {show: false},
          pointer: {show: false},
          splitLine: {show: false},
          axisTick: {
            length: 14,
            lineStyle: {
              color: '#00ffea',
              width: 3
            }
          },
          detail: {
            show: false,
            offsetCenter: [0, '10%'],
            textStyle: {
              color: '#ccc',
              fontSize: this.autoSize(60)
            },
            formatter: '{fm|{value}}',
            rich: {
              fm: {
                fontFamily: "NumFam",
                fontSize: this.autoSize(60),
                color: '#03c7f9'
              }
            }
          },
          title: {
            show: true,
            offsetCenter: [0, '68%'],
            backgroundColor: "#31589d",
            borderRadius: this.autoSize(100),
            padding: [this.autoSize(14), this.autoSize(52)],
            textStyle: {
              color: '#d0e1ff',
              fontSize: this.autoSize(20)
            }
          },
          data: [{name: '处理速度', value: 30000}]
        }
      ],
      color: ['rgba(0,115,255, .5)', 'rgba(0,115,255, .0)']
    };
    this.init();
  }
  init(){
    this.myChart = echarts.init(document.getElementById(this.el));
  }
  render(data){

    var uper = ((Number(data) - 18000)/18000);

    this.option.series[2].endAngle = 120 - uper * this.option.series[2].endAngle;

    this.myChart.setOption(this.option);
  }
}
export default ChartGauge;
