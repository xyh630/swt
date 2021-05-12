<template>
    <div class="staff-left">
        <div class="header-info">
            <div class="pic">
                <img :src="employee_info.img_addr" alt="">
            </div>
            <div class="text">
                姓名：{{employee_info.staff_name}}
            </div>
        </div>
        <div class="content">
            <div :class="[item.is_active?'item-active':'']" class="item" v-for="(item,index) in dataList" :key="index" @click="showDetail(item,index)">
                <span>{{item.type}}</span>
                <span>数量：{{item.value}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import ryAjax from '../../utils/ryajax'
import config from '../../config'
export default {
    data(){
        return {
            dataList:[],
            active_index:0,
        }
    },
    mounted:function(){
        this.getStaffDetail();
    },
    props:{
        employee_info:{
            type:Object //携带头像及id数据
        }
    },
    methods:{
        showDetail:function(item,index){
            this.removeSelectStyle();
            item.is_active = true;
            this.dataList.splice(index,1,item);
            this.$emit('showSelectStaff',index);
        },
        //循环去除选中样式
        removeSelectStyle:function(){
            this.dataList.map(item=> {
                this.$set(item,'is_active',false);
            })
        },
        
        //获取指标数据
        getStaffDetail:function(){
            let that = this;
            ryAjax('获取左侧指标数据', config.inter.getStaffDetail, {
                data: {
                    jj_id:that.employee_info.jj_id
                },
                successfn(resp) {
                    that.constructData(resp)
                }
            });
        },
        //构建需求结构数据
        constructData:function(resp){
            let data = [];
            resp.sx_tq.is_active = false;
            resp.gs_tq.is_active = false;
            resp.fs_tq.is_active = false;
            resp.wct_hs.is_active = true;
            resp.qf_tq.is_active = false;
            data.push(resp.wct_hs);
            data.push(resp.qf_tq);
            data.push(resp.sx_tq);
            data.push(resp.gs_tq);
            data.push(resp.fs_tq);
            this.dataList = data;
        }
    }
}
</script>

<style scoped>
    .staff-left {
        width: 11rem;
        height: 18rem;
        border: .1rem solid rgba(21,87,90,.6);
        background:rgba(21,87,90,.4);
        padding-left: 1.4rem;
        padding-top: 1.5rem;
    }
    .header-info {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .header-info .pic {
        width: 2.25rem;
        height: 2.85rem;
       
        margin-left: .4rem;
    }
    .header-info .pic img {
        display: block;
        width: 100%;
        height: 100%;
    }
    .header-info .text {
        margin-left: .4rem;
        font-size: .42rem;
    }
    .content .item {
        width: 6.42rem;
        height: 1.3rem;
        background-repeat: no-repeat;
        background-size: cover;
        margin-top: 1rem;
        font-size: .28rem;
        text-align: center;
        line-height: 1.5rem;
        cursor: pointer;
        transition: all .3s;
        
    }
    .content .item span:first-child {
        margin-right: 1rem;
    }
    .content .item:nth-child(1) {
        background-image: url(../../assets/img/tq.png);
    }
    .content .item:nth-child(2) {
        background-image: url(../../assets/img/gs.png);
    }
    .content .item:nth-child(3) {
        background-image: url(../../assets/img/fs.png);
    }
    .content .item:nth-child(4) {
        background-image: url(../../assets/img/wct.png);
    }
    .content .item:nth-child(5) {
        background-image: url(../../assets/img/qf.png);
    }
    .content .item-active:nth-child(1) {
        background-image: url(../../assets/img/tq-active.png);
    }
    .content .item-active:nth-child(2) {
        background-image: url(../../assets/img/gs-active.png);
    }
    .content .item-active:nth-child(3) {
        background-image: url(../../assets/img/fs-active.png);
    }
    .content .item-active:nth-child(4) {
        background-image: url(../../assets/img/wct-active.png);
    }
    .content .item-active:nth-child(5) {
        background-image: url(../../assets/img/qf-active.png);
    }
</style>