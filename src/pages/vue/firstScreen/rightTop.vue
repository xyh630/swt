<template>
  <div class="right-top" >
      <div class="tit">供电服务</div>
      <div class="content">
       <div class="item" v-for="(item,index) in complaint" :key="index" @click="showService(index)">
         <decoration style="width:2.63rem;height:2.63rem;font-size:.8rem;color: #0ABEA8;">{{item.value}}</decoration>
         <p>{{item.title}}</p>
       </div>
        <!-- <div class="item">
         <dv-decoration-9 style="width:2.63rem;height:2.63rem;font-size:.8rem;color:#4D99FC">00</dv-decoration-9>
         <p>抢修工单次数</p>
       </div> -->
     </div>
  </div>
</template>

<script>
  
//   import {isEmpty, compare} from "../../utils/ryutils";
  import decoration from '@/components/decorationSelf'
  export default {
    data(){
        return {
          
        }
    },
    props:['complaint'],
    components:{
        decoration
    },
    methods:{
      showService:function(index){
        this.$emit('showService',index)
      }
    }
  }
</script>

<style scoped lang="scss">
  .tit {
      color: #fff;
      font-size: .4rem;
  }
  .right-top {
    height: 5.57rem;
    box-sizing: border-box;
     padding-top: .45rem;
   border-bottom: .1rem solid rgba(21,87,90,.6);
   position: relative;
  }
   .content {
    display: flex;
    justify-content:space-between;
    margin-top: .47rem;
    padding:0 1rem 0 1rem;
    
  }
  .content::after {
    content:'';
    width: .1rem;
    height: 2.7rem;
    position: absolute;
    left: 50%;
    bottom:.83rem;
    transform: translateX(-50%);
    background: #15575A;
  }
  .item {
    text-align: center;
    cursor: pointer;
    transition: all .3s;
  }
  .item:hover{
    //  background:  rgba(255, 255, 255, .1);
      // border: 1px solid #fff;
      transform: scale(1.1);
      
  }
  .item p {
    font-size: .3rem;
    margin-top: .19rem;
    
  }
</style>
