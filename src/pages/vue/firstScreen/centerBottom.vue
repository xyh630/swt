<template>
  <div class="center-bottom">
        <div class="bot-l">
            <div class="tit" >
                组织架构
                <span @click="showStaffList" class="show-all">供电服务员工</span>
            </div>
            <dv-decoration-3 style="width:2.78rem;height:.19rem;margin-top:.1rem" />
            <div class="content">
                <div class="arr1">
                    <div class="item">
                        <div class="pic">
                            <img :src="persons.sz.img_url" alt="">
                        </div>
                        <div class="text">
                            <div class="position">{{persons.sz.position}}</div>
                            <div class="name">{{persons.sz.name}}</div>
                        </div>
                    </div>
                </div>
                <div class="arr2">
                    <div v-for="(item,index) in persons.fsz" :key='index' class="item">
                        <div class="pic">
                            <img :src="item.img_url" alt="">
                        </div>
                        <div class="text">
                            <div class="position">{{item.position}}</div>
                            <div class="name">{{item.name}}</div>
                        </div>
                    </div>
                </div>
                <!-- <div class="arr3">
                    <div v-for="(item,index) in persons.bsy" :key='index' class="item">
                    <div class="pic">
                        <img :src="item.img_url" alt="">
                    </div>
                    <div class="text">
                        <div class="position">{{item.position}}</div>
                        <div class="name">{{item.name}}</div>
                    </div>
                    </div>
                </div> -->
                <div :class="[showFull?'introduction-full':'introduction']">
                    <div class="icon" @click="showText">
                        <img src="../../../assets/img/sanjiao.png" alt="">
                    </div>
                    <div class="text" :class="[showFull?'text-fill':'text']">
                        {{persons.sjj.sjj}}  
                    </div>
                </div>
            </div>
        </div>
        <div class="bot-r" style="display:none">
            <div id="map"></div>
        </div>
    </div>
</template>

<script>
  
//   import {isEmpty, compare} from "../../utils/ryutils";
    import $ from 'jquery'
    import echarts from 'echarts'
    export default {
        data(){
            return {
            showFull:false,
            }
        },
        props:['persons'],
        mounted:function(){
            let that = this;
            console.log('map',that.persons.sjj)
            that.draw(that.persons.sjj.towns_name);
        },
        methods:{
            draw:function(currentTownship){
                var uploadedDataURL = "../..//static/json/taikangxian.json";
                function showProvince() {
                    var name = '太康县';

                    $.get(uploadedDataURL, function(geoJson) {

                        // myChart.hideLoading();
                        echarts.registerMap(name, geoJson);
                        let myChart = echarts.init(document.getElementById('map'))
                        myChart.setOption({
                            backgroundColor: 'rgba(255,255,255,0)',
                            tooltip: { //提示框组件。
                                trigger: 'item', //数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
                                formatter: '{b}',
                                textStyle: {
                                    fontSize: fontSize(.20)
                                }
                            },
                            visualMap: {
                                show:false,
                                min: 100,
                                max: 10000,
                                left: 'left',
                                top: 'bottom',
                                text: ['高', '低'], // 文本，默认为数值文本
                                calculable: false,
                                inRange: {
                                    color: ['#D79D3D']

                                }
                            },
                            geo: [{
                                show: true,
                                map: name,
                                
                                label: {
                                    normal: {
                                        show: false
                                    },
                                    emphasis: {
                                        show: false,
                                    }
                                },
                                // roam: false,//地图设置不可拖拽，固定的
                                itemStyle: {
                                    normal: {
                                        areaColor: '#fff',
                                        borderWidth: 1,
                                        shadowColor: '#D79D3D',
                                        shadowBlur: 15,
                                        shadowOffsetX: -10,
                                        shadowOffsetY: 10
                                    }
                                }
                            }],
                            series: [{
                                name: '行政区域图',
                                type: 'map',
                                mapType: name,
                                label: {
                                    normal: {
                                        show: true,
                                        textStyle: {
                                            color: "#fff",
                                            fontSize: fontSize(.2)
                                        }
                                    },
                                    emphasis: {
                                        show: false,
                                        textStyle: {
                                            color: "#fff",
                                            fontSize: fontSize(.4)
                                        }
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        areaColor: '#16605F',
                                        borderColor: '#C09642',
                                        // borderWidth: 0,
                                        // shadowColor: '#D79D3D',
                                    },
                                    emphasis: {
                                        label: {
                                            show: true
                                        },
                                        areaColor:'#D79D3D'
                                    }
                                },
                                animation: false,
                                data: [
                                    {
                                        name:currentTownship,
                                        value:102
                                    }
                                ]
                            }]
                        });
                    });
                }
                var currentIdx = 0;
                showProvince();
            },
            showText(e){
                this.showFull = !this.showFull;
            },
            showStaffList:function(){
                this.$emit('showLeft',{key:'staff',index:0})
            }
        }
    }
</script>

<style scoped lang="scss">

    .tit{
        color: #fff;
        font-size: .4rem;
    }
    .tit span {
        color: #0ABDA7;
        font-size: .24rem;
        margin-left: .2rem;
    }
    .center-bottom {
        height: 7.99rem;
        box-sizing: border-box;
        margin-top: .4rem;
        display: flex;
        justify-content: space-between;
    }
    .bot-l {
        width: 8rem;
        height: 100%;
        box-sizing: border-box;
        position: relative;
    }
    .bot-l .tit {
        position: relative;
    }
    .bot-r {
        width: 9.2rem;
        height: 100%;
        box-sizing: border-box;
    }
    .item {
        margin: .05rem .4rem 0;
        text-align: center;
    }
    .item .pic {
        width: .83rem;
        height: 1.1rem;
        display: inline-block;
    }
    .item .pic img {
        width: 100%;
        height: 100%;
        display: inline-block;
    }
    .item .text {
        font-size: .3rem;
        margin-top: .1rem;
    }
    .item .text .position {
        font-size: .26rem;
        margin-bottom: .1rem;
    }
    .content .arr1 {
        display: flex;
        justify-content: center;
    }
    .content .arr2,
    .content .arr3 {
        display: flex;
        justify-content: center;
    }
    .content .arr2 {
        margin-top: .2rem;
    }
    .introduction {
        font-size: .26rem;
        line-height: .4rem;
        height: 2rem;
        text-indent: 2em;
        position: absolute;
        bottom: 20px;
        left: 0;
        right: 0;
        padding: 0 .45rem .3rem;
        background:rgba($color: #15575A, $alpha: .4);
        overflow: hidden;
    }
    .introduction-full {
        font-size: .26rem;
        line-height: .4rem;
        height: 100%;
        text-indent: 2em;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 0 .45rem .3rem;
        background:rgba($color: #15575A, $alpha: 1);
        overflow: hidden;
    }
    .introduction .text {
        height: 1.2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display:-webkit-box; //作为弹性伸缩盒子模型显示。
        -webkit-box-orient:vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
        -webkit-line-clamp:3; //显示的行
    }
    .icon {
        height: .5rem;
        line-height: .5rem;
        text-align: center;
    }
    .icon img {
        width: .34rem;
        height: .23rem;
        display: inline-block;
        
    }
    .text-full {
        height: 2rem;
    }
    #map {
        width: 9.2rem;
        height: 100%;
        box-sizing: border-box;
    }
    .show-all {
        cursor: pointer;
        position: absolute;
        bottom: -.2rem;
        right: 0;
        transform: translateY(-50%);
    }
</style>
