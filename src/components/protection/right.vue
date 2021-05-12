<template>
  <div class="pro-right">
    <div class="left">
        <div class="tit">欠费用户</div>
        <div class="content">
          <div id="poly4"></div>
          <!-- <div class="list-right">
            <dv-scroll-board :config="config1" style="width:9rem;height:5rem;font-size:.3rem"/>
          </div> -->
          <!-- <div class="list-right">
              <ul>
                <li>
                    <div class="num">#</div>
                    <div class="title">台区名称</div>
                    <div class="title">欠费户数</div>
                </li>
                <li v-for="(item,index) in dataList" :key="index" @click="showDetail(item)">
                    <div class="num"> <span>{{index+1}}</span></div>
                    <div class="name">{{item.tg_name}}</div>
                    <div class="value">{{item.num}}</div>
                </li>
              </ul>
          </div>  -->
        </div>
    </div>
    <div class="right">
        <div class="tit">欠费台区</div>
        <div class="content">
          <!-- <div id="poly4"></div> -->
          <!-- <div class="list-right">
            <dv-scroll-board :config="config1" style="width:9rem;height:5rem;font-size:.3rem"/>
          </div> -->
          <div class="list-right">
              <ul>
                <li>
                    <div class="num">#</div>
                    <div class="title">台区名称</div>
                    <div class="title">欠费户数</div>
                </li>
                <li v-for="(item,index) in dataList" :key="index" @click="showDetail(item)">
                    <div class="num"> <span>{{index+1}}</span></div>
                    <div class="name">{{item.tg_name}}</div>
                    <div class="value">{{item.num}}</div>
                </li>
              </ul>
          </div> 
        </div>
    </div>
      
      <div v-if="show" class="cover" @click="hideCover"></div>
      <div v-if="list_show" class="cover" @click="hideCover"></div>
      <div v-if="show" class="detail-list">
          <ul>
              <li>
                  <div class="num">用户编号</div>
                  <div class="title">用户名称</div>
                  <div class="title">欠费金额</div>
                  <div class="title">用户类别</div>
                  <div class="title">手机号码</div>
                  <div class="title">用电地址</div>
              </li>
              <li v-for="(item,index) in colList" :key="index">
                  <div class="num">{{item.yhbh}}</div>
                  <div class="value">{{item.yhmc}}</div>
                  <div class="value">{{item.qfje}}</div>
                  <div class="value">{{item.yhlb}}</div>
                  <div class="value">{{item.sjhm}}</div>
                  <div class="value">{{item.yddz}}</div>
              </li>
            </ul>
            <div class="btns">
              <page-component v-if="show" :page-config="pageConfigTotal" @changeCurrentPage="changePage"></page-component>
            </div>
      </div>
      <div v-if="list_show" class="detail-list">
          <ul>
              <li>
                  <div class="num">#</div>
                  <div class="title">台区名称</div>
                  <div class="title">欠费数量</div>
              </li>
              <li v-for="(item,index) in colList" :key="index">
                  <div class="num">{{index+1}}</div>
                  <div class="value">{{item.tg_name}}</div>
                  <div class="value">{{item.num}}</div>
              </li>
            </ul>
            <div class="btns">
              <page-component v-if="list-show" :page-config="pageConfigTotal" @changeCurrentPage="changePage"></page-component>
            </div>
      </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import ryAjax from '../../utils/ryajax'
import config from '../../config'
import pageComponent from "@/components/tools/pageComponent"
export default {
  data(){
    return {
      option:{
          grid:{
            top:'5%',
            bottom:'5%',
          },
          tooltip: {
              trigger:'item',
              
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
          series: [
                {
                  type:'pie',
                  selectedMode: 'single',
                  avoidLabelOverlap: false,
                  radius: [0, '30%'],

                  label: {
                      normal: {
                          position: 'inner',
                          formatter: '{b} {d}%',
                      }
                  },
                  labelLine: {
                      normal: {
                          show: false
                      }
                  },
                  data:[
                    
                  ]
              },
              {
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        formatter: '{b} {d}%',
                        position:'outter',
                        textStyle:{
                          fontSize:fontSize(.3),
                          color:'#fff'
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: fontSize(.3),
                            fontWeight: 'bold',
                            color:'#fff'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: true
                    }
                },
                data:[
                   
                ]
            }
          ]
      },
      dataList:[
               
      ],
      show:false,
      list_show:false,
      colList:[

      ],
      type:'',
      pageConfigTotal:{
        total:0,
        pageSize:10,
        pageNo:1
      },
    }
  },
  props:['data_protection'],
  components:{
    'page-component':pageComponent
  },
  mounted:function(){
    let that = this;
    that.dataList = that.data_protection.qfhz;
    let myEcharts =  echarts.init(document.getElementById('poly4'));
    that.option.series[0].data = that.data_protection.qfzb.cust;
    that.option.series[1].data = that.data_protection.qfzb.time;
    myEcharts.setOption(that.option)
    
    myEcharts.on('click',function (params) {
      if(params.name=='1~4天'){
        that.type = '01';
        that.getArrearsUserList();
      }
      if(params.name=='5~7天'){
        that.type = '02';
        that.getArrearsUserList();
      }
      if(params.name=='7+天'){
        that.type = '03';
        that.getArrearsUserList();
      }
      if(params.name=='低压居民'){
        that.type = '04';
        that.getArrearsUserList();
      }
      if(params.name=='低压非居'){
        that.type = '05';
        that.getArrearsUserList();
      }
      
    })
  },
  methods:{
    //展示欠费人列表
    showDetail:function(){
      this.getAllTaiQuRank();
    },
    hideCover:function(){
      this.show = false;
      this.list_show = false;
      this.pageConfigTotal.pageNo = 1;
    },
    getArrearsUserList:function(){
        let that = this;
        ryAjax('获取欠费明细',config.inter.getArrearsUserList, {
          data: {
            page:that.pageConfigTotal.pageNo,
            length:that.pageConfigTotal.pageSize,
            type:that.type
          },
          successfn(resp){
            that.pageConfigTotal.total = resp.recordsTotal;
            that.colList = resp.data;
            that.show = true;
          }
        });
    },
    getAllTaiQuRank:function(){
      let that = this;
        ryAjax('获取台区明细',config.inter.getAllTaiQuRank, {
          data: {
            page:that.pageConfigTotal.pageNo,
            length:that.pageConfigTotal.pageSize,
          },
          successfn(resp){
            that.pageConfigTotal.total = resp.recordsTotal;
            that.colList = resp.data;
            that.list_show = true;
          }
        });
    },
    changePage(page){
      this.pageConfigTotal.pageNo = page;
      this.getArrearsUserList();
    }
  }
}
</script>

<style scoped>
.pro-right {
    width: 18rem;
    height: 7.8rem;
    border: .1rem solid rgba(21,87,90,.6);
    background:rgba(21,87,90,.4);
    display: flex;
    justify-content: space-between;
}
.left {
  width: 60%;
}
.right {
  width: 40%;
}
.tit {
  font-size: .4rem;
  margin-top: .45rem;
  text-align: center;
}
.content {
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  padding:.4rem;
}
#poly4 {
  width: 100%;
  height: 6rem;
}
.list-right {
  width: 100%;
  height: 6rem;
  margin-top: 6%;
}
ul {
  font-size: .3rem;
  cursor: pointer;
}
 ul > li {
    display: flex;
    justify-content:space-between;
    height: .87rem;
    align-items: center;
  }
 
 ul li:nth-child(2n-1) {
    background: #00514A;
  }

  ul li:nth-child(1) {
    background: #28C0B4;
  }
.list-right ul > li .num {
    width: 20%;
    text-align: center;
  }
.list-right  ul > li .num span {
     background: #28C0B4;
     padding: .1rem;
     border-radius: 20%;
  }
.list-right ul > li .value {
   width: 40%;
   text-align: center;
  }
.list-right ul > li .title {
     width: 40%;
     text-align: center;
}
.cover {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,.8);
  z-index: 99;
}
.detail-list {
  width: 30rem;
  height: 12rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 100;
  font-size: .3rem;
  border: .1rem solid rgba(21,87,90,.6);
  background:rgba(0,0,0,.9);
}
.detail-list ul {
  padding:.3rem .45rem;
  width: 100%;
  height: 100%;
  
}
.detail-list ul li .num {
  width: 10%;
  text-align: center;
}
.detail-list ul li .title {
 width: 18%;
 text-align: center;
}
.detail-list ul li .value {
 width: 18%;
 text-align: center;
}
.btns {
  position: absolute;
  bottom:0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}
.btns button {
  width: 3rem;
  height: 1rem;
  display: inline-block;
  background: #28C0B4;
  outline: none;
  border: none;
  z-index: 101;
  margin: 0 2rem;
  color: #fff;
}
</style>