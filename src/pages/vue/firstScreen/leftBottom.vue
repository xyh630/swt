<template>
    <div class="left-bottom">
        <div class="tit">今日配网
        <span>更新于{{others_time}}</span>
        </div>
        <div class="content">
        <div class="item" v-for="(item,index) in area" :key="index" @click="showLeft(index)">
            <div class="num">{{item.value}}</div>
            <div class="text">{{item.title}}</div>
            <div class="pic">
            <img v-if="index==0" src="../../../assets/img/jingbao-red.png" alt="">
            <img v-if="index==1" src="../../../assets/img/jingbao-yellow.png" alt="">
            <img v-if="index==2" src="../../../assets/img/jingbao-green.png" alt="">
            <img v-if="index==3" src="../../../assets/img/jingbao-green.png" alt="">
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
        }
    },
    props:['area','others_time'],
    components:{
        
    },
    methods:{
        showLeft:function(index) {
            this.$emit('showLeft',{key:'abnormal',index:index})
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
    .left-bottom {
    
        height: 3.5rem;
        box-sizing: border-box;
        padding-top: .45rem
    }
    .content {
        display: flex;
        justify-content: space-between;
        // padding-top: .2rem;
        padding:.4rem 1.75rem 0;
    }
    .item {
        text-align: center;
        cursor: pointer;
        transition: all .3s;
    }
    .item:hover {
        //  background:  rgba(255, 255, 255, .1);
        transform: scale(1.1);
    }
    .item:nth-child(1) {
        color: #FF8664;
    }
    .item:nth-child(2) {
        color: #FEDB93;
    }
    .item:nth-child(3) {
        color: #8FFFD5;
    }
    .item .num {
        font-size: .6rem;
        
    }
    .item .text {
        font-size: .28rem;
        margin-top: .2rem;
    }
    .item .pic {
        width: 1rem;
        height: 1rem;
        display: inline-block;
    }
    .item .pic img {
        width: 100%;
        height: 100%;
    }
</style>
