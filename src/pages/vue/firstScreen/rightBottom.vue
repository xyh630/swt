<template>
  <div class="right-bottom" @click='showProtection'>
     <div class="tit">基础保障</div>
     <div class="content">
       <div class="item" v-for="(item,index) in protection" :key="index">
         <dv-digital-flop id="canvas" class="num" :config="{number:[item.value],content:'{nt}',style:style}" :style='style'/>
         <!-- <div class="num">{{item.value}}</div> -->
          <div class="text">{{item.title}}</div>
       </div>
     </div>
  </div>
</template>

<script>
  
//   import {isEmpty, compare} from "../../utils/ryutils";


  export default {
    data(){
        return {
          style: {
            fontSize: fontSize(.5),
            fill: '#3de7c9'
          }
        }
    },
    props:['protection'],
    components:{
        
    },
    mounted:function(){
      let that = this;
     
        // that.guaranteeData[0].value=2;
        // that.guaranteeData[1].value=;
        // that.guaranteeData[2].value='99.96%';
        
      
    },
    methods:{
      showProtection:function(){
        this.$emit('showProtection')
      }
    }
  }
</script>

<style scoped lang="scss">
  .tit {
      color: #fff;
      font-size: .4rem;
  }
  .right-bottom {
    padding-top: .45rem;
    height: 5.63rem;
    box-sizing: border-box;
    cursor: pointer;
    transition: all .3s;
  }
  .right-bottom:hover {
    // background: rgba(255,255,255,.1);
    transform: scale(1.05);
  }
  .content {
    display: flex;
    justify-content:space-between;
    padding-top: .4rem;
  }
  .item {
    width: 2.42rem;
    height: 3.84rem;
    background-image: url('../../../assets/img/kuang3.png');
    background-repeat: no-repeat;
    background-size: cover;
   
   
    position: relative;
  }
  .item .num {
    // position: absolute;
    width: 100%;
    height: 3.16rem;
    color: #FEDB93;
    font-size: .6rem;
    background-image: url('../../../assets/img/yuan.png');
    background-repeat: no-repeat;
    background-size: 2.04rem 2.04rem;
    background-position: center center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .item .text {
    width: 100%;
    height: .72rem;
    font-size: .3rem;
    color: #00ECF7;
    display: flex;
    align-items: center;
    justify-content: center;
    // margin-top: -1px;
  }
</style>
