class ChartPoly {
    let =  option={
        grid: {
            top: "25%",
            bottom: "40%"
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLine:{
                lineStyle:{
                    color:'#fff'
                }
            },
             axisTick:{
                show:false
            },
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月','八月','九月','十月','十一月','十二月']
        },
        yAxis: {
            type: 'value',
            min:0,
            max:50,
            axisTick:{
                show:false
            },
            axisLine:{
                lineStyle:{
                    color:'#fff'
                }
            },
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#00B4B1',
                    width:1,
                    type:'dotted'
                }
                
            }
        },
        series: [{
            smooth: true,
            data: [10, 9, 20, 30, 18, 48, 32],
            type: 'line',
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 10, //标记的大小
            // areaStyle: {},
            lineStyle:{
                color:'#00B4B1',
                width:4
            },
            itemStyle:{
                color:'#00B4B1',
                borderType:'solid',
                borderColor:'#fff'
            },
            label:{
                show:true,
                padding:[4,6],
                backgroundColor:'rgba(0,180,177,.5)',
                color:"#fff",
                
            }
        }]
    }
  }
  
  export default ChartPoly;
  