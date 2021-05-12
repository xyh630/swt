<template>
    <div class="rep-left">
        <transition name="fade-left">
        <div v-if="!is_hide_list" class="super-box">
            <div class="single">
                <div class="tit">投诉数量</div>
                <div class="con">
                    <dv-decoration-9 style="width:4.2rem;height:4.2rem;font-size:.8rem;color:#28C0B4;margin:0 auto;">
                        {{data_complaint.tsl}}
                    </dv-decoration-9>
                </div>
            </div>
            <div class="many">
                <div class="tit">投诉详情</div>
                <div class="tabs">
                    <div v-for="(item,index) in data_complaint.ts_detail" :key="index" class="item" @click="selectTab(item,index)">
                        投诉{{index+1}}
                    </div>
                    <div v-if="dataList.length<6" class="item-empty">
                        
                    </div>
                    <div v-if="dataList.length<5" class="item-empty">
                        
                    </div>
                    <div v-if="dataList.length<4" class="item-empty">
                        
                    </div>
                    <div v-if="dataList.length<3" class="item-empty">
                        
                    </div>
                    <div v-if="dataList.length<2" class="item-empty">
                        
                    </div>
                </div>
                <div v-if="data_complaint.ts_detail.length==0" class="default-img">
                    <img src="../../assets/img/default.png" alt="">
                </div>
                <border-color v-if="data_complaint.ts_detail.length!=0"  style="width:100%;height:6.33rem;margin-top:.44rem;">
                    <div class="con">
                        <div class="item">
                            <img src="../../assets/img/t-1.png" style="width:.44rem;height:.44rem" alt="">
                            <span>投诉序列：{{itemIndex+1}}</span>
                        </div>
                        <div class="item">
                            <img src="../../assets/img/t-2.png" style="width:.44rem;height:.44rem" alt="">
                            <span>投诉人：{{data_complaint.ts_detail[itemIndex].cust_name}}</span> 
                        </div>
                        <div class="item">          
                            <img src="../../assets/img/t-3.png" style="width:.44rem;height:.44rem" alt="">
                            <span>投诉时间：{{data_complaint.ts_detail[itemIndex].ts_time}}</span>  
                        </div>
                        <div class="item" @click="showDetail()">
                            <img src="../../assets/img/t-4.png" style="width:.44rem;height:.44rem" alt="">
                            <span>投诉内容：{{data_complaint.ts_detail[itemIndex].accept_content}}</span>
                        </div>
                    </div>
                </border-color>
            </div>
        </div>
        </transition>
        <transition name="fade-left">
        <div v-if="is_show_detail" class="super-box">
            <div class="content-tit">
                <span>投诉详情</span>
                <span  @click="hideDetail"><img src="../../assets/img/quxiao.png" alt=""></span>
            </div>
            <div class="content">
                {{data_complaint.ts_detail[itemIndex].accept_content}}
            </div>
        </div>
        </transition>
    </div>
</template>

<script>
import echarts from 'echarts'
import borderColor from '@/components/tools/borderColor'
export default {
    data(){
        return {
           complaint_num:10,
           style:{
               fontSize:fontSize(1.85),
               fill:'#F6FF00',
           },
           itemIndex:0,
           is_show_detail:false,
           is_hide_list:false,
           dataList:[
               
               
           ]
        }
    },
    props:['data_complaint'],
    mounted:function(){
        
    },
    components:{
        borderColor
    },
    methods:{
        selectTab:function(item,index){
            this.itemIndex = index;
        },
        showDetail(){
            let that = this;
            that.is_hide_list = true;
            setTimeout(function(){
                that.is_show_detail = true;
            },700)
        },
        hideDetail(){
            let that = this;
            that.is_show_detail = false;
            setTimeout(function(){
                that.is_hide_list = false;
            },700)
        }
    }
}
</script>

<style scoped>
.rep-left {
    width: 11rem;
    height: 100%;
}
.super-box {
    height: 100%;
    border: .1rem solid rgba(21,87,90,.6);
    background:rgba(21,87,90,.4);
    padding-top: .4rem;
}
.single {
    height: 40%;
}
.tit {
    font-size: .4rem;
    text-align: center;
}
.single .con {
    font-size: .8rem;
    color: #28C0B4;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: .8rem;
}
.num {
    width:1.32rem;height:2.12rem;
    background-image: url('../../assets/img/shape.png');
    background-repeat: no-repeat;
    background-size:cover;
    margin: 0 .125rem;
}
.many {
    padding: 0 .4rem;
    height: 60%;
    position: relative;
}
.tabs {
    display: flex;
    justify-content: space-between;
    font-size: .36rem;
    padding: 0 1.2rem;
    margin-top: .6rem;
    flex-wrap: wrap;
}
.tabs .item {
    width: 2.4rem;
    height: .82rem;
    line-height: .82rem;
    background-image: url('../../assets/img/kuang-2.png');
    background-repeat: no-repeat;
    background-size: contain;
    text-align: center;
    cursor: pointer;
}

.many .con {
    font-size: .3rem;
    height: 100%;
    padding: 1rem;
}
.many .con .item {
    display: flex;
    align-items: center;
    
}

.many .con .item {
    line-height: .8rem;
    letter-spacing: .1em;
}
.many .con .item:last-child {
    position: relative;
    padding-left: .4rem;
    cursor: pointer;
}
.many .con .item:last-child img {
    position: absolute;
    top: .2rem;
    left: 0;
}
.many .con .item:last-child span {
    width: 100%;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}
.many .con .item span {
    padding-left: .4rem;
    /* display: block; */
}
.item-empty {
    width: 2.4rem;
    height: .82rem;
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
.content {
    padding: .4rem .4rem;
    word-wrap: break-word;
}
.content-tit {
    text-align: center;
}
.content-tit {
    position: relative;
}
.content-tit span:last-child {
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: .4rem;
    
}
.content-tit span:last-child img {
    width: 100%;
    height: 100%;
}
</style>