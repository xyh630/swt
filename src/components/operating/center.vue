<template>
    <div class="op-center">
        <div class="tit">中压线损</div>
        <div class="content">
            <div class="top">
                <div id="poly"></div>
            </div>
            <div class="bottom">
                <dv-scroll-board :config="config1" style="width:100%;height:6.25rem;font-size:.3rem"/>
            </div>
        </div>
    </div>
</template>

<script>
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
                     axisTick:{
                        show:false
                    },
                    axisLabel:{
                        fontSize:fontSize(.24)
                    },
                    data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月','八月','九月','十月','十一月','十二月']
                },
                yAxis: {
                    name:'月趋势',
                    nameTextStyle:{
                        fontSize:fontSize(.28),
                    },
                    type: 'value',
                    axisTick:{
                        show:false
                    },
                    axisLine:{
                        show:false,
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
                        fontSize:fontSize(.31)
                    },
                },
                series: [{
                    smooth: true,
                    data: [],
                    type: 'line',
                    symbol: "circle", //标记的图形为实心圆
                    symbolSize: fontSize(.1), //标记的大小
                    // areaStyle: {},
                    lineStyle:{
                        color:'#40FA80',
                        width:fontSize(.04)
                    },
                    itemStyle:{
                        normal:{
                            color:'#40FA80',
                        // borderType:'solid',
                        // borderColor:'#fff',
                            shadowColor: 'rgba(64,250,128, 0.7)',
                            shadowBlur: 100
                        }
                        
                    },
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
            dataList:[
                
            ],
            config1:{
                header: [
                '<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;color:#0A322F">#<span>',
                '<span style="padding:.0;font-size:.3rem;dispay:inline-block;color:#0A322F">线路名称<span>',
                '<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;color:#0A322F">供电量<span>',
                '<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;color:#0A322F">售电量<span>', 
                '<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;color:#0A322F">线损率<span>',
                ],
                data: [

                ],
        // index: true,
        // columnWidth: [50],
                align: ['center'],
                headerHeight:fontSize(.94),
                headerBGC:'#28C0B4',
                oddRowBGC:'#00514A',
                evenRowBGC:'#0A322F',
                rowNum:4
            
            },
            isReady:false

        }
    },
    props:['data_operating'],
    mounted:function(){
        
        this.option.series[0].data = this.data_operating.zyxs;
        this.dataList = this.data_operating.xlxs;
        this.handleData();
        echarts.init(document.getElementById('poly')).setOption(this.option);
    },
    methods:{
        handleData:function(){
            let that = this;
            that.dataList.map((item,index)=> {
                let arr = [];
                arr.push('<span style="font-size:.3rem;dispay:inline-block">'+(index+1)+'<span>')
                arr.push('<span style="white-space:nowrap;font-size:.3rem;dispay:inline-block">'+item.line_name+'<span>')
                arr.push('<span style="font-size:.3rem;dispay:inline-block">'+item.gdl+'<span>')
                arr.push('<span style="font-size:.3rem;dispay:inline-block">'+item.sdl+'<span>')
                arr.push('<span style="font-size:.3rem;dispay:inline-block">'+item.xsl+'<span>')
                that.config1.data.push(arr)
            })
        },
    }
}
</script>

<style scoped>
    .op-center {
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
    .top {
        height: 50%;
    }
    .bottom {
        padding: 2rem .4rem 0;
    }
    #poly {
        width: 100%;
        height: 100%;
    }
    .dv-scroll-board /deep/ .header .header-item:nth-child(1) {
        width: 9% !important;
        text-align: center;
    }
    .dv-scroll-board /deep/ .header .header-item:nth-child(2) {
        width: 36% !important;
        text-align: center;
        white-space:nowrap;
    }
    .dv-scroll-board /deep/ .header .header-item:nth-child(3) {
        width: 20% !important;
        text-align: center;
    }
    .dv-scroll-board /deep/ .header .header-item:nth-child(4) {
        width: 18% !important;
        text-align: center;
    }
    .dv-scroll-board /deep/ .header .header-item:nth-child(5) {
        width: 17% !important;
        text-align: center;
    }
    .dv-scroll-board /deep/ .rows .ceil:nth-child(1)  {
        width: 9% !important;
        text-align: center;
    }
    .dv-scroll-board /deep/ .rows .ceil:nth-child(2)  {
        width: 36% !important;
        text-align: center;
        white-space:nowrap;
        display: flex;
        flex-wrap: wrap;
    }
    .dv-scroll-board /deep/ .rows .ceil:nth-child(3)  {
        width: 20% !important;
        text-align: center;
    }
    .dv-scroll-board /deep/ .rows .ceil:nth-child(4)  {
        width: 18% !important;
        text-align: center;
    }
    .dv-scroll-board /deep/ .rows .ceil:nth-child(5)  {
        width: 17% !important;
        text-align: center;
    }
</style>