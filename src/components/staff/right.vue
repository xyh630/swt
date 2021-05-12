<template>
    <div class="staff-right">
        <div class="tit" v-if="type==0">
            未抄通户数
            <img class="child-download" src="../../../static/img/excel.png" alt="" title="导出excel" @click="exportStffExcel()">
        </div>
        <div class="tit" v-if="type==1">
            欠费用户
            <img class="child-download" src="../../../static/img/excel.png" alt="" title="导出excel" @click="exportStffExcel()">
        </div>
        <div class="tit" v-if="type==2">
            所辖台区
            <img class="child-download" src="../../../static/img/excel.png" alt="" title="导出excel" @click="exportStffExcel()">
        </div>
        <div class="tit" v-if="type==3">
            高损台区
            <img class="child-download" src="../../../static/img/excel.png" alt="" title="导出excel" @click="exportStffExcel()">
        </div>
        <div class="tit" v-if="type==4">
            负损台区
            <img class="child-download" src="../../../static/img/excel.png" alt="" title="导出excel" @click="exportStffExcel()">
        </div>
        <ul v-if="type==0" class="type0">
            <li>
                <div class="user-code">用户编号</div>
                <div class="user-name">用户名称</div>
                <div class="tq-name">台区名称</div>
                <div class="yd-address">用电地址</div>
            </li>
            <li class="data-li" v-for="(item,index) in staff_detail" :key="index">
                <div class="user-code">{{item.cons_no}}</div>
                <div class="user-name">{{item.cons_name}}</div>
                <div class="tq-name">{{item.tg_name}}</div>
                <div class="yd-address">{{item.elec_addr}}</div>
            </li>
        </ul>
        
        <ul v-if="type==1" class="type1">
            <li>
                <div class="user-code">用户编号</div>
                <div class="user-name">用户名称</div>
                <div class="user-type">用户类别</div>
                <div class="user-arrears">欠费金额</div>
                <div class="user-phone">手机号码</div>
                <div class="yd-address">用电地址</div>
            </li>
            <li class="data-li" v-for="(item,index) in staff_detail" :key="index">
                <div class="user-code">{{item.yhbh}}</div>
                <div class="user-name">{{item.yhmc}}</div>
                <div class="user-type">{{item.yhlb}}</div>
                <div class="user-arrears">{{item.qfje}}</div>
                <div class="user-phone">{{item.sjhm}}</div>
                <div class="yd-address">{{item.yddz}}</div>
            </li>
        </ul>
        <ul v-if="type==2" class="type2">
            <li>
                <div class="tq-code">台区编号</div>
                <div class="tq-name">台区名称</div>
            </li>
            <li class="data-li" v-for="(item,index) in staff_detail" :key="index">
                <div class="tq-code">{{item.tg_no}}</div>
                <div class="tq-name">{{item.tg_name}}</div> 
            </li>
        </ul>
        
        <ul v-if="type==3" class="type3">
            <li>
                <div class="tq-code">台区编号</div>
                <div class="tq-name">台区名称</div>
            </li>
            <li class="data-li" v-for="(item,index) in staff_detail" :key="index">
                <div class="tq-code">{{item.tg_no}}</div>
                <div class="tq-name">{{item.chkunit_name}}</div> 
            </li>
        </ul>
       
        <ul v-if="type==4" class="type4">
             <li>
                <div class="tq-code">台区编号</div>
                <div class="tq-name">台区名称</div>
            </li>
            <li class="data-li" v-for="(item,index) in staff_detail" :key="index">
                <div class="tq-code">{{item.tg_no}}</div>
                <div class="tq-name">{{item.chkunit_name}}</div> 
            </li>
        </ul>
        <div class="btns" v-if="staff_detail.length>0">
            <page-component :page-config="pageConfigTotal" @changeCurrentPage="changePage"></page-component>
        </div>
    </div>
</template>

<script>
import ryAjax from '../../utils/ryajax'
import config from '../../config'
import pageComponent from "@/components/tools/pageComponent"
export default {
    data(){
        return {
            staff_detail:{},
            pageConfigTotal: {
                total: 0,
                pageSize: 12,
                pageNo: 1
            },
            d_type:this.type,
            user_id:this.employee_info.jj_id,

        }
    },
    components:{
        pageComponent
    },
    props:{
        type:{
            type:Number,
            default:3
        },
        employee_info:{
            type:Object
        }
        
    },
    mounted:function(){
        this.getData(this.d_type);
    },
    methods:{
        //获取相应数据
        getData:function(type){
            let that = this;   
            if(type==0){//未抄通户数
                let params = {};
                params.page = that.pageConfigTotal.pageNo;
                params.length = that.pageConfigTotal.pageSize;
                params.tg_fzr_id = that.user_id;
                that.getWCTList(params);

                
            }
            if(type==1){//欠费用户
                let params = {};
                params.page = that.pageConfigTotal.pageNo;
                params.length = that.pageConfigTotal.pageSize;
                params.tg_fzr_id = that.user_id;
                that.getQFList(params);
            }
            if(type==2){//所辖台区
                let params = {};
                params.page = that.pageConfigTotal.pageNo;
                params.length = that.pageConfigTotal.pageSize;
                params.tg_fzr_id = that.user_id;
                that.getSXTQList(params);
                
            }
            if(type==3){//高损台区
                let params = {};
                params.page = that.pageConfigTotal.pageNo;
                params.length = that.pageConfigTotal.pageSize;
                params.tg_fzr_id = that.user_id;
                params.loss_type = '高损';
                that.getGFSList(params);
            }
            if(type==4){//负损台区
                let params = {};
                params.page = that.pageConfigTotal.pageNo;
                params.length = that.pageConfigTotal.pageSize;
                params.tg_fzr_id = that.user_id;
                params.loss_type = '负损';
                that.getGFSList(params);
            }                
        },

        changePage(page) {
            this.pageConfigTotal.pageNo = page;
            this.getData(this.d_type);
        },

        //未抄通
        getWCTList:function(params){
            let that = this;
            ryAjax('获取未抄通数据', config.inter.getWCTList, {
                data: params,
                successfn(resp) {
                    that.pageConfigTotal.total = resp.recordsTotal;
                    that.staff_detail = resp.data;
                }
            });
        },

        //欠费用户
        getQFList:function(params){
            let that = this;
            ryAjax('获取欠费用户', config.inter.getQFList, {
                data: params,
                successfn(resp) {
                    that.pageConfigTotal.total = resp.recordsTotal;
                    that.staff_detail = resp.data;                 
                }
            });
        },

        //高损&负损
        getGFSList:function(params){
            let that = this;
            ryAjax('获取高负损数据', config.inter.getGFSList, {
                data:params,
                successfn(resp) {
                    that.pageConfigTotal.total = resp.recordsTotal;
                    that.staff_detail = resp.data;                
                }
            });
        },

        //所辖台区
        getSXTQList:function(params){
            let that = this;
            ryAjax('获取所辖台区', config.inter.getSXTQList, {
                data: params,
                successfn(resp) {
                    that.pageConfigTotal.total = resp.recordsTotal;
                    that.staff_detail = resp.data;              
                }
            });
        },
        //导出员工信息列表excel
        exportStffExcel: function () {
            let url = config.inter.exportStffExcel
            //导出excel
            window.location.href = url+'?jj_id='+this.user_id
            // ryAjax('导出excel', config.inter.exportStffExcel, {
            //     data: {
            //         jj_id:'1'
            //     },
            //     successfn(resp) {
            //         console.log(resp)          
            //     }
            // });
        }
    }
}
</script>

<style scoped>
    .staff-right {
        width: 25.21rem;
        height: 18rem;
        border: .1rem solid rgba(21,87,90,.6);
        background:rgba(21,87,90,.4);
        position: relative;
    }
   
    ul {
        width: 100%;
        padding: 0 .4rem;
        margin-top: .4rem;
    }
    li {
        width: 100%;
        display: flex;
        height: 1rem;
        line-height: 1rem;
    }
    li:first-child {
        background: #28C083;
    }
    .data-li:nth-of-type(2n) {
        background:#0A3222;
    }
    .data-li:nth-of-type(2n-1) {
        background:#005130;
    }
    .tit {
        font-size: .42rem;
        margin-top: .7rem;
        margin-bottom: .5rem;
        text-align: center;
        position: relative;
    }
    .child-download {
        position: absolute;
        right: .4rem;
        bottom: -.4rem;
        cursor: pointer;
        transition: all .3s;
    }
    .child-download:hover {
        transform: scale(1.1)
    }
    .type2 .tq-code,
    .type3 .tq-code,
    .type4 .tq-code {
        width: 50%;
        text-align: center;
    }
    .type2 .tq-name,
    .type3 .tq-name,
    .type4 .tq-name {
        width: 50%;
        text-align: center;
    }
    .type0 {
        text-align: center;
    }
    .type0 .user-code {
        width: 15%;
    }
    .type0 .user-name {
        width: 20%;
    }
    .type0 .tq-name {
        width: 20%;
    }
    .type0 .yd-address {
        width: 45%;
    }
    .type1 {
        text-align: center;
    }
    .type1 .user-code {
        width: 10%;
    }
    .type1 .user-name {
        width: 15%;
    }
    .type1 .user-type {
        width: 10%;
    }
    .type1 .user-arrears {
        width: 10%;
    }
    .type1 .user-phone {
        width: 15%;
    }
    .type4 .yd-address {
        width: 40%;
    }
    .btns {
        position: absolute;
        bottom: 0.2rem;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
    }
    .btns button {
        width: 3rem;
        height: 1rem;
        display: inline-block;
        background: #28c0b4;
        outline: none;
        border: none;
        z-index: 101;
        margin: 0 2rem;
        color: #fff;
    }
</style>