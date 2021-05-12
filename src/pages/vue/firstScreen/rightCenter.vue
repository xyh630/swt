<template>
  <div class="right-center" @click="showOperating">
     <div class="tit">经营情况
     </div>
     <dv-decoration-3 style="width:2.78rem;height:.19rem;margin-top:.1rem" />
     <!-- 内容列表 -->
      <div class="content">
        <div class="item" v-for='(item,index) in operating' :key='index'>
            
            <div v-if="index==0" class="ordernum">Ⅰ</div>
            <div v-if="index==1" class="ordernum">Ⅱ</div>
            <div v-if="index==2" class="ordernum">Ⅲ</div>
            <div v-if="index==3" class="ordernum">Ⅳ</div>
            <div v-if="index==4" class="ordernum">Ⅴ</div>
            <div class="text">{{item.title}}</div>
            <div class="line"></div>
            <span class="value">{{item.value}}  <font class="unit">{{item.unit}}</font>  </span>
        </div>
      </div>
  </div>
</template>

<script>
  
//   import {isEmpty, compare} from "../../utils/ryutils";

  export default {
    data(){
        return {
          //array
          
        }
    },
    props:['operating'],
    components:{
        
    },
    methods:{
      showOperating:function(){
        this.$emit('showOperating')
      }
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
  .right-center {
  
    height: 6.59rem;
    box-sizing: border-box;
    padding-top: .45rem;
    border-bottom: .1rem solid rgba(21,87,90,.6);
    cursor: pointer;
    transition: all .3s;
  }
  .right-center:hover {
    // background: rgba(255,255,255,.1)
    transform: scale(1.05);
  }
  .item {
    display: flex;
    justify-content:flex-start;
    align-items: center;
    
    margin-top: .3rem;
    position: relative;
    line-height: .6rem;
  }
  .item .ordernum {
    
    font-size: .4rem;
    color: #0ABDA7;
    // font-style: italic;
    margin-right: .3rem;
    font-weight: 700;
  }
  .item .text {
    
    font-size: .3rem;
    margin-right: .3rem;
    width: 2rem;
  }
  .item .unit {
    font-size: .3rem;
  }
  .item .line {
    height: 2px;
    border-top: 1px dashed #0ABDA7;
    margin-right: .2rem;
    width: 2rem;
  }
  .item .value {
    font-size: .35rem;
    text-align: left;
    
    max-width: 40%;
    overflow: hidden;
    color: #0ABDA7;
  }
</style>
