<template>
    <div class="left-center">
        <div class="tit">今日计量
            <span>更新于{{metering_time}}</span>
        </div>
        <div class="content">
            <div style="width:50%;display:flex;">
                <div class="item" v-for="(item,index) in metering.line" :key="index" >
                    <div class="text" style="text-align: center;display: inline-block;"><span class="text-l">{{item.title}}</span><span class="text-r">{{item.value}}</span></div>
                </div>
            </div>
            <div style="width:50%;font-size:.3rem">
                    <div class="item1" style="width:50%;text-align: center; display: inline-block;" v-for="(item,index) in metering.round" :key="index" @click="hideLeft(index)">
                    <dv-decoration-9 style="width:2rem;height:2rem;font-size:.6rem;color:#4D99FC;margin-left: 40px;">{{item.value}}</dv-decoration-9>
                    <p style="margin-top:.1rem">{{item.title}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data(){
        return {
          
        }
    },
    props:['metering','metering_time'],
    components:{
        
    },
    methods:{
        hideLeft:function(index){
            this.$emit('showLeft',{key:'metering',index:index})
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
    .content {
        display: flex;
        justify-content:space-between;
        align-items: center;
    }
    .item {
        text-align: center;
        transition: all .3s;
        height: 1rem;
        margin-right: .1rem;
    }
    .item .text {
        width: 2.5rem;
        height: 1rem;
        font-size: .3rem;
        background-image: url('../../../assets/img/kuang4.png');
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        line-height: 1rem;
    }
    .item p {
        font-size: .3rem;
        margin-top: .19rem;
    }
    .item1 {
        text-align: center;
        cursor: pointer;
        transition: all .3s;
        height: 1rem;
    }
    .item1:hover {
        transform: scale(1.1);
    }
    .item1 .text {
        width: 6.46rem;
        height: 1rem;
        font-size: .3rem;
        background-image: url('../../../assets/img/kuang4.png');
        background-repeat: no-repeat;
        background-size: contain;
        position: relative;
        line-height: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .item1 p {
        font-size: .3rem;
        margin-top: .19rem;
    }
    .left-center {
        height: 3.6rem;
        padding-top: .45rem;
        box-sizing: border-box;
        border-bottom: .1rem solid rgba(21,87,90,.6);
    }
    .item .pic {
        width: 1.76rem;
        height: .62rem;
    }
    .item .pic img {
        width: 100%;
        height: 100%;
    }
</style>
