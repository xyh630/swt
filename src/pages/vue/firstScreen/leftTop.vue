<template>
  <div class="left-top">
     <div class="tit">今日工单
       <span>更新于{{work_order_time}}</span>
     </div>
     <div class="content">
       <div class="item" v-for="(item,index) in workOrder" :key="index" @click="showDetail(index)">
         <img v-if='index==0' src="../../../assets/img/tousu.png"  alt="" >
         <img v-if='index==1' src="../../../assets/img/i-2.png"  alt="" >
         <img v-if='index==2' src="../../../assets/img/i-3.png"  alt="" >
         <img v-if='index==3' src="../../../assets/img/i-4.png"  alt="" >
         <img v-if='index==4' src="../../../assets/img/i-5.png"  alt="" >
         <!-- <div :class="[index==0?'first-color':'second-color']"> -->
         <div >
           <p class="text">{{item.title}}</p>
           <p class="num">{{item.value}}</p>
        </div>
       </div>
     </div>
  </div>
</template>

<script>
  
//   import {isEmpty, compare} from "../../utils/ryutils";

  export default {
    data(){
        return {
        //  workOrder:[
        //    {
        //      title:'停电失败工单',
        //      value:0
        //    },
        //    {
        //      title:'抢修工单',
        //      value:2
        //    }
        //  ]
        } 
    },
    props:['workOrder','work_order_time'],
    components:{
        
    },
    methods:{
      showDetail:function(index){
        this.$emit('showLeft',{key:'workOrder',index:index})
      },
    }
  }
</script>

<style scoped lang="scss">
  .tit {
      color: #fff;
      font-size: .4rem;
  }
  .tit span {
    color: #0ABDA7;
    font-size: .24rem;
    margin-left: .2rem;
  }
  .left-top {
   height: 3rem;
   border-bottom: .1rem solid rgba(21,87,90,.6);
   padding-top: .45rem;
   box-sizing: border-box;
  }
  .content {
    display: flex;
    justify-content:space-between;
    margin-top: .3rem;
  }
  .item {
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all .3s;
  }
  .item:hover{
    transform: scale(1.1);
  }
  .item  img {
    width: 1.4rem;
    height: 1.4rem;
  }
  .text {
    font-size: .3rem;
    line-height: .66rem
  }
  .num {
    font-size: .45rem;
    color:#0ABDA7;
  }
  .first-color {
    color:#FEDB93;
  }
  .second-color {
    color:#0ABDA7;
  }
  
</style>
