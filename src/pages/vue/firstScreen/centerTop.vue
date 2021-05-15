<template>
  <div class="center-top">
      <div class="tit" style="margin-top:.45rem;">基本情况</div>
        <dv-decoration-3 style="width:2.78rem;height:.19rem;margin-top:.1rem" />
      <div class="con">
        <div class="con-l">
          <!-- <div class="tit">数据分析</div>
          <dv-decoration-3 style="width:2.78rem;height:.19rem;margin-top:.1rem" />
          <ul>
            <li>
              <div class="num">#</div>
              <div class="title">名称</div>
              <div class="value">数量</div>
            </li>
            <li v-for="(item,index) in analysis" :key="index">
              <div class="num"> <span>{{index+1}}</span></div>
              <div class="title">{{item.title}}({{item.unit}})</div>
              <div class="value">{{item.value}}</div>
            </li>
            全县平均
          </ul> -->
          
          <p>全县平均统计</p>
          <div id='charts2'></div>
        </div>
        <div class="con-r">
          <p>所人均统计</p>
          
          <!-- <dv-charts :option="option" class="charts"/> -->
          <div id='charts'></div>
        </div>
      </div>
       <!-- <decoration10 class="line-center" style="width:100%;height:.1rem" /> -->
  </div>
</template>

<script>
  
//   import {isEmpty, compare} from "../../utils/ryutils";
  import ChartWater from '../../class/DofEdm/chart/ChartWater'
  import decoration10 from '@/components/decoration10Self'
  import echarts from 'echarts'
  export default {
    data(){
        return {
          option:{},
        }
    },
    props:['analysis','analysisrj'],
    components:{
        decoration10
    },
    mounted:function(){
          let that = this;
          const chart =  new ChartWater('charts')
          const chart2 =  new ChartWater('charts2')
          console.log('------------')
          // var numList = [];
          // var maxList = [];
          // for(var i=0;i<that.analysis.length;i++){
          //   numList.push(that.analysis[i].value);   
          //   that.analysis[i].name = that.analysis[i].title;
          // }
          // chart2.option.radar.indicator = that.analysis;
          // console.log(that.analysis)
          // chart2.option.series[0].data[0].value = numList;
          chart2.render();
          // var numList1 = [];
          // var maxList1 = [];
          // for(var i=0;i<that.analysisrj.length;i++){
          //   numList1.push(that.analysisrj[i].value);
          //   that.analysisrj[i].name = that.analysisrj[i].title;
          // }
          // chart.option.radar.indicator = that.analysisrj;
          // chart.option.series[0].data[0].value = numList1
          chart.render();
    },
    methods:{
    }
  }
</script>

<style scoped lang="scss">
  .tit {
      color: #fff;
      font-size: .4rem;
  }
  
  .center-top {
    
    height: 9rem;
    // padding-top: .4rem;
    // background:rgba(21,87,90,.4);
    // border:2px solid rgba(14,120,120,.4);
    // padding: 0 .48rem;
    // padding-top: .45rem;
    box-sizing: border-box;
    position: relative;
   
  }
  .con {
    // display: flex;
    justify-content: space-between;
  }
  .con-l {
    width: 100%;
    height: 4rem;
    margin-top: .2rem;
    font-size: .3rem;
    display: flex;
    justify-content: space-between;
  }
  .con-l p {
    writing-mode:vertical-rl;
    font-size: .32rem;
    margin-left: .8rem;
    text-align: center;
  }
  .con-r {
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: space-between;
  }
  .con-r p {
    writing-mode:vertical-rl;
    font-size: .32rem;
    margin-left: .8rem;
    text-align: center;
  }
  .content {
    display: flex;
    justify-content:space-between;
  }
  ul {
    margin-top: .27rem;
  }
  ul > li {
    display: flex;
    justify-content:space-between;
    height: .87rem;
    align-items: center;
  }
  ul li:nth-child(1) {
    background: #28C0B4;
  }
  ul li:nth-child(3) {
    background: #00514A;
  }
  ul li:nth-child(5) {
    background: #00514A;
  }
  ul li:nth-child(7) {
    background: #00514A;
  }
  ul > li .num {
    width: 10%;
    text-align: center;
   
  }
  ul > li .num span {
     background: #28C0B4;
     padding: .1rem;
     border-radius: 20%;
  }
  ul > li .value {
   width: 45%;
   text-align: center;
  }
   ul > li .title {
     width: 45%;
     text-align: center;
   }
   #charts {
    width: 6rem;
    height: 4rem;
    font-size: .3rem;
   }
   #charts2 {
    width: 6rem;
    height: 4rem;
    font-size: .3rem;
   }
   .line-center {
     position: absolute;
     left: 0;
     bottom: -.3rem;
   }
</style>
