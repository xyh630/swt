import echarts from 'echarts'
class ChartWater {
  constructor(el) {
    this.el = el;
    this.myChart = null;
    this.pst = {
      3: {
        1: ['25%', '50%'],
        2: ['50%', '50%'],
        3: ['75%', '50%']
      },
      4: {
        3: ['17%', '50%'],
        2: ['39%', '50%'],
        1: ['61%', '50%'],
        4: ['83%', '50%']
      }
    };

    this.pst_ = 4;
    this.option = {
			backgroundColor: '',
		    color: ['#3D91F7', '#61BE67'],
			tooltip: {},
			
		    legend: {
		        show: true,
		        icon: "circle",
		        bottom: 40,
		        center: 10,
		        itemWidth: 14,
		        itemHeight: 14,
		        itemGap: 21,
		        orient: "horizontal",
		        data: ['a', 'b'],
		        textStyle: {
		            fontSize: '60',
		            color: '#8C8C8C'
		        },
		    },
		    
		    radar: {
		        // shape: 'circle',
		    	radius:'70%',
				triggerEvent: true,
				center:['50%','60%'],
				splitNumber:5,
		        name: {
		            textStyle: {
		                color: '#fff',
		                fontSize:fontSize(.2),
		                borderRadius: 6,
		                padding: [0, 5]
		            }
		        },
		        nameGap:'10',
		        indicator: [{
		                name: '用户数量', max: 6500},
		            {name: '台区数量', max: 16000},
		            {name: '辖区面积', max: 30000 },
		            {name: '线路总长', max: 38000},
		            {name: '综合排名',max: 52000},
		            {name: '员工人数', max: 25000},
		            // {name: '生产经营', max: 25000}
		        ],
		        splitArea: {
		            areaStyle: {
		            	 color: [
		                        //  'rgba(0,0,0, .05)', 'rgba(0,0,0, 0.05)',
		                        //  'rgba(0,0,0, 0.05)', 'rgba(0,0,3, 0.05)',
		                         'rgba(247,181,76, .05)', 'rgba(247,181,76, .01)'
		                     ].reverse()
		            }
		        },
		        // axisLabel:{//展示刻度
		        //     show: true
		        // },
		        axisLine: { //指向外圈文本的分隔线样式
		            lineStyle: {
						width:fontSize(.02),
						color: ['rgba(0,0,0, .6)','#000'],
						opacity:.5
		            }
		        },
		        splitLine: {
		            lineStyle: {
		            	width:fontSize(.04),
		                color: [
		                    'rgba(207,169,114, 0.4)','rgba(255,210,145, 4)',
		                    'rgba(207,169,114, 0.4)', 'rgba(207,169,114, .4)',
		                    'rgba(207,169,114, 0.4)', 'rgba(207,169,114, .4)'
						].reverse(),
						// shadowColor: 'rgba(0, 0, 0, 1)',
						// shadowBlur: 10,
						// opacity:1,
						// shadowOffsetY:10,
						// shadowOffsetX:10
		            }
		        },

		    },

		    series: [{
		        name: '',
		        type: 'radar',
		        //areaStyle: {normal: {}},
		        areaStyle: {
                    normal: {
                        color: 'rgba(4,134,64, 1)'
                    }
                },
                symbolSize: 0,
                lineStyle: {
                    normal: {
                        color: 'rgba(0,0,114, 1)',
                        width: fontSize(.01)
                    }
                },
		        data: [{
		                value: [100, 10000, 28000, 100, 50000, 19000],
		            }
		        ]
		    }]
}
    this.init();
  }

  init() {
    this.myChart = echarts.init(document.getElementById(this.el));
  }

  render(data) {
	//   debugger
	//   if(data&&data.length>0){
	// 	if(data.length < 4){
	// 		this.pst_ = 3;
	// 		this.option.series.pop();
	// 		this.option.series.forEach((itm, idx)=>{
	// 		  itm.center = this.pst[this.pst_][(idx + 1)];
	// 		});
	// 	  }
	// 	  data.forEach((v, i)=>{
	// 		this.option.series[i].data[0].value = v.value;
	// 		this.option.series[i].data[0].type = v.type;
	// 		this.option.series[i].data[0].zdy = v.zdy;
	// 	  });
	//   }
    this.myChart.setOption(this.option);
  }
}

export default ChartWater;
