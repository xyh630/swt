<template>
    <div class="com-right">
        <div class="item3">
            <div class="tit">拨打95598用户明细</div>
            <ul>
                <li>
                    <div class="num">#</div>
                    <div class="user-name">用户名称</div>
                    <div class="address">用户编号</div>
                    <div class="iphone">手机号</div>
                    <div class="iphone-num">次数</div>
                </li>
                <li v-for="(item,index) in dataList" :key="index" @click="showDetail(item)">
                    <div class="num"> <span>{{((pageConfigTotal.pageNo-1)*pageConfigTotal.pageSize)+index+1}}</span></div>
                    <div class="user-name">{{item.cust_name}}</div>
                    <div class="address">{{item.cust_no}}</div>
                    <div class="iphone">{{item.tel}}</div>
                    <div class="iphone-num">{{item.num}}</div>
                </li>
            </ul>
        </div>
        <div class="btns">
            <page-component :page-config="pageConfigTotal" @changeCurrentPage="changePage"></page-component>
        </div>
    </div>
</template>

<script>

import echarts from 'echarts';
import pageComponent from "@/components/tools/pageComponent";
import ryAjax from './../../utils/ryajax'
import config from './../../config'
export default {
    data(){
        return {
        
            dataList:[
                
            ],
            pageConfigTotal:{
                total:0,
                pageSize:7,
                pageNo:1
            },
        
        
        }
    },
    props:['data_complaint'],
    components:{
        'page-component':pageComponent
    },
    mounted:function(){
        this.getUserList();
    },
    methods:{
        //获取 拨打95598用户列表
        getUserList:function(){
            let that = this;
            ryAjax('获取95958用户列表',config.inter.getUserList, {
                data: {
                    page:that.pageConfigTotal.pageNo,
                    length:that.pageConfigTotal.pageSize
                },
                successfn(resp){
                    that.dataList = resp.data;
                    that.pageConfigTotal.total = resp.recordsTotal;
                }
            });
        },
        changePage(page){
            this.pageConfigTotal.pageNo = page;
            this.dataList = [];
            this.getUserList();      
        }
    }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}
.com-right {
    width: 11rem;
    height: 100%;
    border: .1rem solid rgba(21,87,90,.6);
    background:rgba(21,87,90,.4);
    /* padding: .4rem; */
}
.tit {
    font-size: .4rem;
    text-align: center;
    height: 1rem;
    line-height: 1rem;
}

.item3 {
    height: 90%;
}
ul {
    font-size: .3rem;
    margin-top: .6rem;
    padding: 0 .4rem;
}
ul > li {
    display: flex;
    justify-content:space-between;
    height: 1.6rem;
    align-items: center;
}
 
ul li:nth-child(2n-1) {
    background: #00514A;
}

ul li:nth-child(1) {
    background: #28C0B4;
}
ul > li .num {
    width: 20%;
    text-align: center;
}
ul > li .num span {
    background: #28C0B4;
    padding: .1rem;
    border-radius: 20%;
}
.user-name {
    width: 15%;
    text-align: center;
}
.address {
    width: 40%;
    text-align: center;
}
.iphone {
    width: 25%;
    text-align: center;
}
.iphone-num {
    width: 10%;
    text-align: center;
}
.btns {
    height: 10%;
    text-align: center;
}
.btns button {
    width: 4rem;
    height: 1rem;
    display: inline-block;
    background: #28C0B4;
    outline: none;
    border: none;
    z-index: 101;
    color: #fff;
    cursor: pointer;
}
</style>