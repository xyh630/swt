<template>
    <div class="op-left">
        <div class="tit">经营状况月趋势</div>
        <div class="con">
            <div class="header">
                <div class="header-l">
                    <span class="s1">售电量</span>
                    <span class="s2">售电均价</span>
                    <span class="s3">业扩新装数量</span>
                </div>
            </div>
            <div id="polyline1"></div>
            <div id="polyline2"></div>
            <div id="polyline3"></div>
        </div>
    </div>
</template>

<script>
import ChartPoly from '../../pages/class/DofEdm/chart/ChartPoly'
import echarts from 'echarts'
export default {
    data(){
        return {
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
                            backgroundColor: '#00B4B1'
                        }
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    axisLine:{
                        lineStyle:{
                            color:'#fff',
                            width:fontSize(.03)
                        }
                    },
                     axisTick:{
                        show:false
                    },
                     axisLabel:{
                        fontSize:fontSize(.24)
                    },
                    
                    data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月','八月','九月','十月','十一月','十二月']
                },
                yAxis: {
                    name:'单位/千千瓦时',
                    nameTextStyle:{
                        fontSize:fontSize(0.28),
                        align:'center'
                    },
                    type: 'value',
                    min:0,
                    // max:50,
                    axisTick:{
                        show:false
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#fff',
                            width:fontSize(.03)
                        }
                    },
                    splitLine:{
                        show:true,
                        lineStyle:{
                            color:'#00B4B1',
                            width:fontSize(.03),
                            type:'dotted'
                        }
                        
                    },
                     axisLabel:{
                        fontSize:fontSize(.24)
                    },
                },
                series: [{
                    smooth: true,
                    data: [],
                    type: 'line',
                    symbol: "circle", //标记的图形为实心圆
                    symbolSize: 10, //标记的大小
                    // areaStyle: {},
                    lineStyle:{
                        color:'#00B4B1',
                        width:fontSize(.04)
                    },
                    itemStyle:{
                        color:'#00B4B1',
                        borderType:'solid',
                        borderColor:'#fff'
                    },
                    label:{
                        show:false,
                        padding:[1,1],
                        backgroundColor:'rgba(0,180,177,.5)',
                        color:"#fff",
                        fontSize:fontSize(.24)
                    }
                }]
            },
            option1:{
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
                            backgroundColor: '#F45E23'
                        }
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    axisLine:{
                        lineStyle:{
                            color:'#fff',
                            width:fontSize(.04)
                        }
                    },
                     axisTick:{
                        show:false
                    },
                     axisLabel:{
                        fontSize:fontSize(.24)
                    },
                    data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月','八月','九月','十月','十一月','十二月']
                },
                yAxis: {
                    name:'元/千千瓦时',
                    nameTextStyle:{
                        fontSize:fontSize(0.28),
                        align:'center'
                    },
                    type: 'value',
                    
                    axisTick:{
                        show:false
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#fff',
                            width:fontSize(.03)
                        }
                    },
                    splitLine:{
                        show:true,
                        lineStyle:{
                            color:'#00B4B1',
                            width:fontSize(.03),
                            type:'dotted'
                        }
                        
                    },
                     axisLabel:{
                        fontSize:fontSize(.24)
                    },
                },
                series: [{
                    smooth: true,
                    data: [],
                    type: 'line',
                    symbol: "circle", //标记的图形为实心圆
                    symbolSize: 10, //标记的大小
                    // areaStyle: {},
                    lineStyle:{
                        color:'#F45E23',
                        width:fontSize(.03)
                    },
                    itemStyle:{
                        color:'#F45E23',
                        borderType:'solid',
                        borderColor:'#fff'
                    },
                    label:{
                        show:false,
                        padding:[1,1],
                        backgroundColor:'rgba(244,94,35,.5)',
                        color:"#fff",
                        fontSize:fontSize(.24)
                        
                    }
                }]
            },
            option2:{
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
                            backgroundColor: '#228FFE'
                        }
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    axisLine:{
                        lineStyle:{
                            color:'#fff',
                            width:fontSize(.03)
                        }
                    },
                     axisTick:{
                        show:false
                    },
                     axisLabel:{
                        fontSize:fontSize(.24)
                    },
                    data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月','八月','九月','十月','十一月','十二月']
                },
                yAxis: {
                    name:'单位/个',
                    nameTextStyle:{
                        fontSize:fontSize(0.28),
                        align:'center'
                    },
                    type: 'value',
                    min:0,
                    axisTick:{
                        show:false
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#fff',
                            width:fontSize(.03)
                        }
                    },
                    splitLine:{
                        show:true,
                        lineStyle:{
                            color:'#00B4B1',
                            width:fontSize(.03),
                            type:'dotted'
                        }
                        
                    },
                     axisLabel:{
                        fontSize:fontSize(.24)
                    },
                },
                series: [{
                    smooth: true,
                    data: [],
                    type: 'line',
                    symbol: "circle", //标记的图形为实心圆
                    symbolSize: 10, //标记的大小
                    // areaStyle: {},
                    lineStyle:{
                        color:'#228FFE',
                        width:fontSize(.03)
                    },
                    itemStyle:{
                        color:'#228FFE',
                        borderType:'solid',
                        borderColor:'#fff'
                    },
                    label:{
                        show:false,
                        padding:[4,6],
                        backgroundColor:'rgba(34,143,254,.5)',
                        color:"#fff",
                        
                    }
                }]
            },
        }
    },
    components:{
        
    },
    props:['data_operating'],
    mounted:function(){  
        let that = this;
        that.option.series[0].data = that.data_operating.sdl;
        echarts.init(document.getElementById('polyline1')).setOption(that.option);
        that.option1.series[0].data = that.data_operating.sdjj;
        echarts.init(document.getElementById('polyline2')).setOption(that.option1);
        that.option2.series[0].data = that.data_operating.ykxzsl;
        echarts.init(document.getElementById('polyline3')).setOption(that.option2);
    },
    methods:{

    }
}
</script>

<style  scoped>
    .op-left {
        width: 12rem;
        height: 100%;
        border: .1rem solid rgba(21,87,90,.6);
        background:rgba(21,87,90,.4);
        box-sizing: border-box;
    }
    .tit {
        font-size: .4rem;
        font-weight: 700;
        text-align: center;
        margin-top: .38rem;
    }
    .con {
        height: 90%;
        padding:.4rem;
    }
    #polyline1 {
        width: 11.2rem;
        height: 33%;
    }
    #polyline2 {
        width: 11.2rem;
        height: 33%;
    }
    #polyline3 {
        width: 11.2rem;
        height: 33%;
    }
    .header {
        font-size: .18rem;
        display: flex;
        justify-content: space-between;
        padding: 0 .4rem;
    }
    .header .header-l span {
        margin-right: .8rem;
        position: relative;
    }
    .header .s1::after {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: -.5rem;
        width: .3rem;
        height: .1rem;
        background: #00B4B1;
        border-radius: .05rem;
    }
    .header .s2::after {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: -.5rem;
        width: .3rem;
        height: .1rem;
        background: #F45E23;
        border-radius: .05rem;
    }
    .header .s3::after {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: -.5rem;
        width: .3rem;
        height: .1rem;
        background: #228FFE;
        border-radius: .05rem;
    }
    .header .header-r {
        font-size: .22rem;
        color: #1CE7C6;
    }
</style>