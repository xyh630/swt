<template>
  <div class="rep-right">
     
      <div class="top">
         <div class="tit">抢修明细</div>
        <dv-scroll-board v-if="config.data.length!=0"  :config="config" style="width:100%;height:7rem;font-size:.3rem"/>
        <div v-if="config.data.length==0" class="default-img">
            <img src="../../assets/img/default.png" alt="">
        </div>
      </div>
      <div class="bottom">
        <div class="left">
          <div class="tit">抢修台区</div>
          <dv-scroll-board v-if="config1.data.length!=0" :config="config1" style="width:100%;height:7rem;font-size:.3rem"/>
          <div v-if="config1.data.length==0" class="default-img">
            <img src="../../assets/img/default.png" alt="">
        </div>
        </div>
        <div class="right">
          <div class="tit">抢修线路</div>
          <dv-scroll-board v-if="config2.data.length!=0" :config="config2" style="width:100%;height:7rem;font-size:.3rem"/>
          <div v-if="config2.data.length==0" class="default-img">
            <img src="../../assets/img/default.png" alt="">
        </div>
        </div>
      </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  data(){
    return {
      config:{
        header: [
          '<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;color:#0A322F">工单号<span>',
          '<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;color:#0A322F">抢修台区<span>', 
          '<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;color:#0A322F">抢修线路<span>',
          '<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;color:#0A322F">时长(分)<span>',
          '<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;color:#0A322F">受理时间<span>',
          '<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;color:#0A322F">处理时间<span>',
        ],
        data: [],
        // index: true,
        // columnWidth: [50],
        align: ['center'],
        headerHeight:fontSize(.94),
        headerBGC:'#28C0B4',
        oddRowBGC:'#00514A',
        evenRowBGC:'#0A322F',
        rowNum:7
      },
      dataList:[],
      config1:{
        header: [
          '<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;color:#0A322F">#<span>',
          '<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;color:#0A322F">台区名称<span>', 
          '<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;color:#0A322F">抢修工单数量<span>',
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
        rowNum:6
      },
      areaList:[],
       config2:{
        header: [
          '<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;color:#0A322F">#<span>',
          '<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;color:#0A322F">线路名称<span>', 
          '<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;color:#0A322F">抢修工单数量<span>',
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
        rowNum:6
      },
      lineList:[],
      show:{
        data:false,
        area:false,
        line:false
      }

    }
  },
  props:["data_repair"],
  mounted:function(){
    let that = this;
    that.dataList = that.data_repair.qxgd_detail;
    that.areaList = that.data_repair.tq;
    that.lineList = that.data_repair.xl;
    that.handleData();
  },
  methods:{
    // 处理数据
    handleData:function () {
      let that = this;
      
        that.dataList.map((item,index)=> {
            let arr = []
            arr.push('<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;">'+item.app_no+'<span>')
            arr.push('<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;">'+item.tg_name+'<span>')
            arr.push('<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;">'+item.line_name+'<span>')
            arr.push('<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;">'+item.sc+'<span>')
            arr.push('<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;">'+item.slsj+'<span>')
            arr.push('<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;">'+item.clsj+'<span>')
            that.config.data.push(arr)
        })
        that.areaList.map((item,index)=> {
            let arr = [];
            arr.push('<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;">'+(index+1)+'<span>')
            arr.push('<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;">'+item.tg_name+'<span>')
            arr.push('<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;">'+item.num+'<span>')
            that.config1.data.push(arr)
        })
        that.lineList.map((item,index)=> {
            let arr = []
            arr.push('<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;">'+(index+1)+'<span>')
            arr.push('<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;">'+item.tg_name+'<span>')
            arr.push('<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;">'+item.num+'<span>')
            that.config2.data.push(arr)
        })  
    },
    
    

  }
  
  
  
}
</script>

<style scoped>
.rep-right {
    width: 22.6rem;
    height: 18rem;
    border: .1rem solid rgba(21,87,90,.6);
    background:rgba(21,87,90,.4);
    box-sizing:border-box;
    padding: .42rem;
}
.tit {
  margin-bottom: .33rem;
  font-size: .4rem;
  text-align: center;
}
.top {
  height: 9rem;
  position: relative;
}
.bottom {
  height: 9rem;
  display: flex;
  justify-content: space-between;
}
.bottom .left {
  width: 10.52rem;
  position: relative;
}
.bottom .right {
  width: 10.52rem;
  position: relative;
}
.default-img {
  width: 7.5rem;
  height: 7.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%)
}
.default-img img {
  width: 100%;
  height: 100%;
}
</style>