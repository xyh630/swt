<template>
    <div class="op-right">
        <div class="tit">台区线损</div>
        <div class="content">
            <div id="poly-right"></div>
            <div id="zhu1"></div>
            <div id="zhu2"></div>
        </div>
    </div>
</template>

<script>
import echarts from 'echarts'
export default {
    data(){
        return {
            data_zhu1_name:[],
            data_zhu1_value:[],
            data_zhu2_name:[],
            data_zhu2_value:[],
            option:{
                grid: {
                    top: "25%",
                    bottom: "10%"
                },
                toolbox: { //可视化的工具箱
                    show: true,
                    itemSize:fontSize(.4),
                    iconStyle:{
                        borderColor:'#fff',
                        borderWidth:fontSize(.04)
                    },
                    right:"10%",
                    feature: {
                        saveAsImage: {//保存图片
                            show: true,
                            backgroundColor:'#15575A',
                            pixelRatio:2
                        },
                    }
                },
                 tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "shadow",
                        label: {
                            show: true,
                            backgroundColor: '#40FA80'
                        }
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    axisLine:{
                        show:false,
                        lineStyle:{
                            color:'#fff',
                            width:fontSize(0.02)
                        }
                    },
                     axisLabel:{
                        fontSize:fontSize(.22)
                    },
                     axisTick:{
                        show:false
                    },
                    data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月','八月','九月','十月','十一月','十二月']
                },
                yAxis: {
                    name:'月趋势',
                    nameTextStyle:{
                        fontSize:fontSize(0.28),
                        align:'center'
                    },
                    type: 'value',
                    splitNumber:5,
                    fontSize:fontSize(.8),
                    axisTick:{
                        show:false
                    },
                    axisLine:{
                        show:false,
                        lineStyle:{
                            color:'#fff'
                        }
                    },
                    axisLabel:{
                        fontSize:fontSize(.24)
                    },
                    splitLine:{
                        show:true,
                        lineStyle:{
                            color:'#00B4B1',
                            width:fontSize(0.03),
                            type:'dotted'
                        }
                        
                    }
                },
                series: [{
                    smooth: true,
                    data: [],
                    type: 'line',
                    symbol: "circle", //标记的图形为实心圆
                    symbolSize: 0, //标记的大小
                    // areaStyle: {},
                    lineStyle:{
                        color:'#40FA80',
                        width:fontSize(0.04)
                    },
                    // itemStyle:{
                    //     normal:{
                    //         color:'#40FA80',
                    //     // borderType:'solid',
                    //     // borderColor:'#fff',
                    //         shadowColor: 'rgba(64,250,128, 0.7)',
                    //         shadowBlur: 100
                    //     }
                        
                    // },
                    emphasis:{
                        show:true
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#41FA80'
                                },
                                {
                                    offset: 1,
                                    color: '#113C32'
                                }
                            ], false),
                        }
                    },
                }]
            },
            option1:{
                tooltip: {
                    trigger: 'axis'
                },
                toolbox: { //可视化的工具箱
                    show: true,
                    itemSize:fontSize(.4),
                    iconStyle:{
                        borderColor:'#fff',
                        borderWidth:fontSize(.04)
                    },
                    right:"10%",
                    feature: {
                        saveAsImage: {//保存图片
                            show: true,
                            backgroundColor:'#15575A',
                            pixelRatio:2
                        },
                    }
                },
                textStyle: {
                    color: '#32cbd7',
                    fontSize: fontSize(.1)
                },
                grid: {
                    top: "25%",
                    bottom: "10%",
                    left:'25%'
                },
                calculable: true,
                yAxis: [{
                    name:'高损天数排行/天',
                    nameTextStyle:{
                        color:'#fff',
                        fontSize:fontSize(.28),
                        align:'center'
                    },
                    data: [
                        
                    ],
                    axisLine: {
                        show:false,
                        lineStyle: {
                            color: '#fff',
                        }
                    },
                    //刻度线是否显示
                    axisTick: {
                        show: false
                    },
                     axisLabel:{
                        fontSize:fontSize(.24)
                    },
                    
                }],
                xAxis: [{
                    type: 'value',
                    name: '',
                    axisLine: {
                        show: false,
                        symbolOffset: [0, 50],
                        lineStyle: {

                            color: '00B4B1',
                            width:fontSize(0.03)
                        }
                    },
                    axisTick: {
                        show: false,
                    },
                    plitLine:{
                        show:true,
                        lineStyle:{
                            color:'#00B4B1',
                            width:fontSize(0.03),
                            type:'dotted'
                        }
                        
                    },
                     axisLabel:{
                        fontSize:fontSize(.24)
                    },
                }],
                series: [{
                    // name: '综合风险指数',
                    barWidth: fontSize(.1),
                    type: 'bar',
                    barGap: '10%',
                    barCategoryGap: '60%',
                    itemStyle: {
                        normal: {
                            barBorderRadius: [0, 30, 30, 0],
                            //每个柱子的颜色即为colorList数组里的每一项,如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                            color: new echarts.graphic.LinearGradient(
                                1, 0, 0, 1,
                                [{
                                        offset: 0,
                                        color: '#01F0FF'
                                    },
                                    //  {
                                    //      offset: 0.5,
                                    //      color: 'blue'
                                    //  },
                                    //  {
                                    //      offset: 1,
                                    //      color: 'yellow'
                                    //  }
                                ]
                            )
                        }
                    },
                    data: [
                        
                    ],
                    zlevel: 11
                }]
            },
            option2:{
                tooltip: {
                    trigger: 'axis'
                },
                toolbox: { //可视化的工具箱
                    show: true,
                    itemSize:fontSize(.4),
                    iconStyle:{
                        borderColor:'#fff',
                        borderWidth:fontSize(.04)
                    },
                    right:'10%',
                    feature: {
                        saveAsImage: {//保存图片
                            show: true,
                            backgroundColor:'#15575A',
                            pixelRatio:2
                        },
                    }
                },
                textStyle: {
                    color: '#32cbd7',
                    fontSize: fontSize(.1)
                },
                grid: {
                    top: "25%",
                    bottom: "10%",
                    left:'25%'
                },
                // calculable: true,
                yAxis: [{
                    name:'月累计排行/线损值',
                    nameTextStyle:{
                        color:'#fff',
                        fontSize:fontSize(.28),
                        align:'center'
                    },
                    data: [
                        "白庄",
                        "耿庄",
                        "小郭寨",
                        "付桥",
                        "李白敬",
                        "南街3",
                    ],
                    axisLine: {
                        show:true,
                        lineStyle: {
                            color: '#00B4B1',
                            width:fontSize(0.02)
                        }
                    },
                    //刻度线是否显示
                    axisTick: {
                        show: false
                    },
                     axisLabel:{
                        fontSize:fontSize(.24)
                    },
                    
                }],
                xAxis: [{
                    type: 'value',
                    name: '',
                    axisLine: {
                        show: false,
                        symbolOffset: [0, 50],
                        lineStyle: {
                            color: '#fff',
                            width:fontSize(0.02)
                        }
                    },
                    axisTick: {
                        show: false,
                    },
                     splitLine:{
                        show:true,
                        lineStyle:{
                            color:'#00B4B1',
                            width:fontSize(0.03),
                            type:'dotted'
                        }
                        
                    },
                     axisLabel:{
                        fontSize:fontSize(.24)
                    },
                }],
                series: [{
                    // name: '综合风险指数',
                    barWidth: fontSize(.1),
                    type: 'bar',
                    barGap: '10%',
                    barCategoryGap: '60%',
                    itemStyle: {
                        normal: {
                            barBorderRadius: [0, 30, 30, 0],
                            //每个柱子的颜色即为colorList数组里的每一项,如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                            color: new echarts.graphic.LinearGradient(
                                1, 0, 0, 1,
                                [{
                                        offset: 0,
                                        color: '#01F0FF'
                                    },
                                    //  {
                                    //      offset: 0.5,
                                    //      color: 'blue'
                                    //  },
                                    //  {
                                    //      offset: 1,
                                    //      color: 'yellow'
                                    //  }
                                ]
                            )
                        }
                    },
                    data: [
                        9.7,
                        7.6,
                        7.5,
                        7.5,
                        7.4,
                        7.3
                    ],
                    zlevel: 11
                }]
            }
        }
    },
    props:['data_operating'],
    mounted:function(){
        let that = this;
        that.option.series[0].data = this.data_operating.tqxs;             
        for(var i=0;i<this.data_operating.gs.length;i++){
            that.data_zhu1_name.push(this.data_operating.gs[i].tg_name);
            that.data_zhu1_value.push(this.data_operating.gs[i].num);
        }
        for(var i=0;i<this.data_operating.xsl_rank.length;i++){
            that.data_zhu2_name.push(this.data_operating.xsl_rank[i].tg_name);
            that.data_zhu2_value.push(this.data_operating.xsl_rank[i].xsl);
        }
        that.option1.yAxis[0].data = that.data_zhu1_name;
        that.option1.series[0].data = that.data_zhu1_value;
        that.option2.yAxis[0].data = that.data_zhu2_name;
        that.option2.series[0].data = that.data_zhu2_value;
        console.log('234444444444444444444444444444444444444444',that.option2);
        echarts.init(document.getElementById('poly-right')).setOption(that.option);
        echarts.init(document.getElementById('zhu1')).setOption(that.option1);
        echarts.init(document.getElementById('zhu2')).setOption(that.option2);
    },
    methods:{
        
    }
}
</script>

<style scoped>
    .op-right {
        width: 12rem;
        height: 100%;
        border: .1rem solid rgba(21,87,90,.6);
        background:rgba(21,87,90,.4);
    }
    .tit {
        font-size: .4rem;
        font-weight: 700;
        text-align: center;
        margin-top: .38rem;
    }
    .content {
        height: 90%;
    }
    #poly-right {
        width: 100%;
        height: 33%;
    }
    #zhu1 {
        width: 100%;
        height: 33%;
    }
    #zhu2 {
        width: 100%;
        height: 33%;
    }
</style>