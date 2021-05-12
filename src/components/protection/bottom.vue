<template>
  <div class="pro-bottom">
    <div class="item">
        <div class="tit">本月未抄通
          
        </div>
        <div class="calendar">
            <div class="calendar-tit">{{year}}/{{month}}
              
            </div>
            <div class="calendar-list">
              <div class="tips">
                <span>{{tips[0]}}</span>
                <span>{{tips[1]}}</span>
              </div>
              <div class="row1">
                  <span>日</span>
                  <span>一</span>
                  <span>二</span>
                  <span>三</span>
                  <span>四</span>
                  <span>五</span>
                  <span>六</span>
              </div>
              <div class="days">
                   <div v-if="weekDeatil>=6">
                    <span class="num1"></span>
                    <span class="day"></span>
                  </div>
                   <div v-if="weekDeatil>=5">
                    <span class="num1"></span>
                    <span class="day"></span>
                  </div>
                   <div v-if="weekDeatil>=4">
                    <span class="num1"></span>
                    <span class="day"></span>
                  </div>
                   <div v-if="weekDeatil>=3">
                    <span class="num1"></span>
                    <span class="day"></span>
                  </div>
                   <div v-if="weekDeatil>=2">
                    <span class="num1"></span>
                    <span class="day"></span>
                  </div>
                   <div v-if="weekDeatil>=1">
                    <span class="num1"></span>
                    <span class="day"></span>
                  </div>
                  <div v-for="(item,index) in dateList" :key="index">
                    <span  :class="[item.value==''?'empty':'num']">
                      <span class="num-l">{{item.value1}}</span>
                      <span class="num-r">{{item.value2}}</span>
                    </span>
                    <span class="day">{{item.date}}</span>
                  </div>
              </div>
                
            </div>
        </div>
    </div>

    <div class="item">
        <div class="tit">采集成功率月趋势</div>
        <div class="poly">
            <div id="poly6"></div>
        </div>
    </div>
    <div class="item">
        <div class="tit">
          <span :class="[tab_index==0?'color-span':'']" @click="clickTab(0)">系统未抄通排行</span>/
          <span :class="[tab_index==1?'color-span':'']" @click="clickTab(1)">人工未抄通排行</span>
          </div>
        <div class="zhu">
          
         <scroll-ranking-board1 v-if="tab_index==0"  :config="config" style="width:100%;height:100%" :backroundColor='backgroundColor'></scroll-ranking-board1>
         <scroll-ranking-board1 v-if="tab_index==1"  :config="config1" style="width:100%;height:100%" :backroundColor='backgroundColor'></scroll-ranking-board1>
        </div>
    </div>
    
  </div>
</template>

<script>
import echarts from 'echarts'
import scrollRankingBoard1 from '@/components/tools/scroll-ranking-board1.vue'
export default {
  data(){
    return {
      dateList:[
        {
          date:'1',
          value:'2',
        },
        {
          date:'2',
          value:'1'
        },
        {
          date:'3',
          value:'2'
        },
        {
          date:'4',
          value:'1'
        },
        {
          date:'5',
          value:'3'
        },
        {
          date:'6',
          value:'1'
        },
        {
          date:'7',
          value:'1'
        },
        {
          date:'8',
          value:'3'
        },
        {
          date:'9',
          value:'2'
        },
        {
          date:'10',
          value:'4'
        },
        {
          date:'11',
          value:'1'
        },
        {
          date:'12',
          value:'3'
        },
        {
          date:'13',
          value:'2'
        },
         {
          date:'14',
          value:'1'
        },
         {
          date:'15',
          value:'1'
        },
         {
          date:'16',
          value:'2'
        },
         {
          date:'17',
          value:'1'
        },
         {
          date:'18',
          value:'3'
        },
         {
          date:'13',
          value:'1'
        }, {
          date:'19',
          value:'1'
        }
        , {
          date:'20',
          value:'1'
        },
         {
          date:'21',
          value:'2'
        },
         {
          date:'22',
          value:'1'
        },
         {
          date:'23',
          value:'2'
        },
         {
          date:'24',
          value:'1'
        },
         {
          date:'25',
          value:'2'
        },
         {
          date:'26',
          value:'1'
        },
         {
          date:'27',
          value:'1'
        },
         {
          date:'28',
          value:''
        },
         {
          date:'29',
          value:''
        },
         {
          date:'30',
          value:''
        },
         {
          date:'31',
          value:''
        }
      ],
      tips:['人工未抄通','系统未抄通'],
      option:{
        grid: {
            top:'10%',
            bottom:'10%',
            left:'18%'
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
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLine:{
                show:false,
                lineStyle:{
                    color:'#fff'
                }
            },
              axisTick:{
                show:false
            },
            axisLabel:{
              fontSize:fontSize(.31)
            },
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月','八月','九月','十月','十一月','十二月']
        },
        yAxis: {
            name:'月趋势',
            nameTextStyle:{
                fontSize:fontSize(.31),
            },
            type: 'value',
            min:99,
            splitNumber:10,
            axisTick:{
                show:false
            },
            axisLine:{
                show:false,
                lineStyle:{
                    color:'#fff'
                }
            },
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#0FFFE1',
                    width:fontSize(.02),
                    type:'dotted'
                } 
            },
            axisLabel:{
              fontSize:fontSize(.31)
            },
        },
        series: [{
            smooth: false,
            data: [99.72, 99.73, 99.82, 99.81,99.84, 99.89, 99.92,99.91,99.93],
            type: 'line',
            symbol: "circle", //标记的图形为实心圆
            symbolSize: fontSize(.09), //标记的大小
            // areaStyle: {},
            lineStyle:{
                color:'#0FFFE1',
                width:fontSize(.03)
            },
            itemStyle:{
                normal:{
                    color:'#0FFFE1',
                }
                
            },
            emphasis:{
                show:true
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#0FFFE1'
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
      config:{
        data: [
          
        ]
        
      },
      config1:{
        data: [
          
        ]
        
      },
      backgroundColor:{
          color:'#fff'
      },
      weekDeatil:0,
      year:'',
      month:'',
      tab_index:0,
    }
  },
  props:['data_protection'],
  components:{
    scrollRankingBoard1
  },
  created:function(){
    let that = this;
      var weekDeatil = getWeekDay();
      this.weekDeatil = weekDeatil;
         //获取当月第一天是礼拜几
        function getWeekDay(){
          var date1 = new Date();
            //获取年份
            var year1 = date1.getFullYear();
             that.year = year1;
            //获取当前月份
            var mouth1 = date1.getMonth()+1;
            that.month = mouth1;
            var str = year1+','+mouth1+','+'01';
            var date2 =  new Date(str)
            return date2.getDay()
        }
  },
  mounted:function(){
    debugger
    let that = this;
    that.handleData();
    that.dateList = that.data_protection.rl;
    that.option.series[0].data = that.data_protection.cjcgl;
    echarts.init(document.getElementById('poly6')).setOption(this.option);
  },
  methods:{
    clickTab:function(index){
      this.tab_index = index;
    },
    handleData:function(){
      let that = this;
      for(var i=0;i<that.data_protection.xt_wct_cs_rank.length;i++){
        let obj = {}
        that.data_protection.xt_wct_cs_rank[i].name = that.data_protection.xt_wct_cs_rank[i].tg_name;
        that.data_protection.xt_wct_cs_rank[i].value = parseInt(that.data_protection.xt_wct_cs_rank[i].num);
      }
      for(var i=0;i<that.data_protection.rg_wct_cs_rank.length;i++){
        
        that.data_protection.rg_wct_cs_rank[i].name = that.data_protection.rg_wct_cs_rank[i].tg_name;
        that.data_protection.rg_wct_cs_rank[i].value = parseInt(that.data_protection.rg_wct_cs_rank[i].num);
      }
      that.config.data = that.data_protection.xt_wct_cs_rank;
      that.config1.data = that.data_protection.rg_wct_cs_rank;
      debugger;
      
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.pro-bottom {
    box-sizing: border-box;
    width: 100%;
    height: 9.8rem;
    border: .1rem solid rgba(21,87,90,.6);
    background:rgba(21,87,90,.4);
    margin-top: .4rem;
    box-sizing: border-box;
    padding: .45rem .8rem .5rem;
    display: flex;
    justify-content: space-between;
}
.item:nth-child(1) {
  width: 25%;
  height: 100%;
}
.item:nth-child(2) {
  width: 40%;
  height: 100%;
}
.item:nth-child(3) {
  width: 35%;
  height: 100%;
}
.tit {
  font-size: .4rem;
  text-align: center;
  height: 10%;
  
}
.tit span {
  cursor: pointer;
}
.calendar {
  height: 90%;
  background:rgba(28,231,198,.32);
  padding: .3rem .4rem;
  box-sizing: border-box;
}
.poly {
  height: 90%;

}
.zhu {
  height: 90%;
}
.calendar-tit {
  font-size: .46rem;
  color: #FF9710;
  text-align: center;
  
}
.calendar-list {
  padding-top: 1rem;
  position: relative;
}
.calendar-list .row1 {
  display: flex;
  justify-content:flex-start;
  font-size: .31rem;
  flex-wrap: wrap;
  color: #8FC31F;
}
.calendar-list .row1 span {
  width: 14.28%;
  text-align: center;
  display: inline-block;
}
.calendar-list .days {
  display: flex;
  justify-content:flex-start;
  font-size: .31rem;
  color: #fff;
  flex-wrap: wrap;
  align-items: center;
  margin-top: .5rem;
}
.calendar-list .days > div {
  display: inline-block;
  width: 14.28%;
  height: 1rem;
  text-align: center;
}
.calendar-list .days > div .num {
  display: block;
  height: .3rem;
  font-size: .2rem;
  border-radius: .2rem;
  width: .9rem;
  margin: 0 auto .1rem;
  display: flex;
  overflow: hidden;
}
.calendar-list .days > div .num-l {
  width: 50%;
  height: 100%;
  background: #FF9E0F;
  line-height: .3rem;
}
.calendar-list .days > div .num-r {
  width: 50%;
  height: 100%;
  background: #8FC31F;
  line-height: .3rem;
}
.calendar-list .days > div .num1 {
  display: block;
  height: .3rem;
  font-size: .2rem;
  border-radius: .2rem;
  width: .62rem;
  margin: 0 auto .1rem;
}
.empty {
  display: block;
  height: .3rem;
  margin-bottom: .1rem;
}
#poly6 {
  width: 100%;
  height: 100%;
}
.tips {
  position: absolute;
  top: .4rem;
  right:0;
  font-size: .2rem;
  color: #fff;
}
.tips span {
  margin-right: .5rem;
  position: relative;
}
.tips span:first-child::after{
  content: '';
  position: absolute;
  top:50%;
  transform: translateY(-50%);
  right: -.3rem;
  width: .2rem;
  height: .1rem;
  background: #FF9E0F;
  border-radius: .05rem;
}
.tips span:last-child::after{
  content: '';
  position: absolute;
  top:50%;
  transform: translateY(-50%);
  right: -.3rem;
  width: .2rem;
  height: .1rem;
  border-radius: .05rem;
  background: #8FC31F;
}
.color-span {
  color: #0FFFE1;
}
</style>