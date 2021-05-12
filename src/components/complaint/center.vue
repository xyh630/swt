<template>
  <div class="com-center">
    <div class="top">
      <div class="tit">用户拨打95598分类</div>
      <!-- <div v-if="wordCloudList.length!=0" id="myChart" :style="{width: '100%', height: '100%'}"></div>
      <div v-if="wordCloudList.length==0"  class="default-img">
            <img src="../../assets/img/default.png" alt="">
      </div> -->
      <div id="pie"></div>
    </div>
    <div class="bottom">
        <scroll-ranking-board1 :config='config' style="width:100%;height:100%"></scroll-ranking-board1>
        <!-- <div class="con-l">
          <div class="item" v-for="(item,index) in dataList" :key="index" @click="selectItem(index)">
            <div class="item-l" :class="[dataList.length<3?'red':'blue']">
              <img class="icon" v-if="index==indexItem" src="../../../static/img/sanjiao-r.png" alt="">
              <span>{{item.type}}</span>
            </div>
            <div class="item-r">
                {{item.value}}
            </div>
          </div>
        </div>
        <div class="col-r">
          <dv-decoration-9 style="width:4.2rem;height:4.2rem;font-size:.8rem;color:#28C0B4;margin:0 auto;">
            <div class="num">
              <div style="text-align:center">{{dataList[indexItem].value}}</div>
              <div style="font-size:.4rem;text-align:center">{{dataList[indexItem].type}}</div>
            </div>
          </dv-decoration-9>
        </div> -->
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import scrollRankingBoard1 from '@/components/tools/scroll-ranking-board1';
export default {
  data(){
    return {
      
      config:{
          data: [
            {value:2, name:'故障报修'},
            {value:1, name:'业务咨询'},
            {value:0, name:'信息查询'},
            {value:3, name:'表扬'},
            {value:2, name:'举报'},
            {value:1, name:'投诉'},
            {value:1, name:'意见'},
            {value:0, name:'订阅信息'},
            {value:2, name:'客户催办'},
            {value:3, name:'服务申请'},
            {value:1, name:'综合业务'}
          ],
          rowNum:6
        
      },
      option:{
          tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b}: {c} ({d}%)"
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
          // legend: {
          //     orient: 'vertical',
          //     x: 'left',
          //     data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
          // },
          series: [
              {
                  name:'',
                  type:'pie',
                  radius: ['40%', '70%'],
                  avoidLabelOverlap: false,
                  color:[
                    "#fcba61","#f5ed78","#44eab1"," #7bdd43","#c8f578","#65db99","#7bebc3","#78d6f5","#7899f5"
                  ],
                  label: {
                      normal: {
                          show: true,
                          position: '',
                          color:'#fff',
                          fontSize:fontSize(.28)
                      },
                      emphasis: {
                          show: true,
                          textStyle: {
                              fontSize: '',
                              fontWeight: 'bold'
                          }
                      }
                  },
                  labelLine: {
                      normal: {
                          show: true
                      }
                  },
                  data:[
                      {value:2, name:'故障报修'},
                      {value:1, name:'业务咨询'},
                      {value:0, name:'信息查询'},
                      {value:3, name:'表扬'},
                      {value:2, name:'举报'},
                      {value:1, name:'投诉'},
                      {value:1, name:'意见'},
                      {value:0, name:'订阅信息'},
                      {value:2, name:'客户催办'},
                      {value:3, name:'服务申请'},
                      {value:1, name:'综合业务'}
                  ]
              }
          ]
      }

    }
  },
  props:['data_complaint'],
  mounted () {
    //填充饼图数据
    this.option.series[0].data = this.data_complaint.ywfl;
    echarts.init(document.getElementById('pie')).setOption(this.option)
    this.config.data = this.data_complaint.ywfl;
  },
  components:{
    scrollRankingBoard1
  },
  methods: {
    
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.com-center {
    width: 13.4rem;
    height: 100%;
    border: .1rem solid rgba(21,87,90,.6);
    background:rgba(21,87,90,.4);
    padding-top: .4rem;
}
.top {
  width: 100%;
  height: 60%;
  position: relative;
}
.tit {
  font-size: .4rem;
  text-align: center;
}
.bottom {
  width: 100%;
  height: 40%;
  padding: .2rem .4rem .8rem;
}
/* .con-l {
  font-size: .42rem;
  width: 40%;
}
.col-r {
  width: 60%;
  padding-top: .4rem;
} */
/* .item {
  display: flex;
  justify-content: flex-end;
  padding:.4rem .4rem 0 0;
}
.item-l{
  cursor: pointer;
}
.item-r {
  color: #28C0B4;
  margin-left: 1rem;
}
.icon {
  width: .4rem;
  height: .4rem;
}
.num {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
} */
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
#pie {
  width: 100%;
  height: 100%;
}
</style>