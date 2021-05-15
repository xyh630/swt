<template>
  <div class="dof-main">
    <!-- 细分模块 -->
    <!-- 头部区域 -->
    <div class="header">
        <decoration8 class="header-left-decoration" />
        <decoration5 class="header-center-decoration" />
        <decoration8 class="header-right-decoration" :reverse="true" />
        <div class="center-title">所务通</div>
        <div class="logo">
            <p>{{dept_info.value1}} <span class="version">{{version}}</span> </p>
            
            <p>{{dept_info.value2}}</p>
        </div>
       
        <div class="update" v-if="show.first_screen">
            <div class="top">
                <p>{{dept_info.update_time}}</p>
            </div>
            <div v-if="update_status" style="cursor:pointer;">
                <img class="botoom" style="display: inline-block;" src="../../assets/img/update.png" alt="" @click="updateData()">
            </div>
            <div v-else>
                <div class="loader">123123</div>
            </div>

        </div>
        <div class="btn" @click="showBasic" v-if="show.first_screen">
                基础数据维护
        </div>
    </div>
    <!-- 模块标题 -->
    <div class="tit">
        <transition name="fade-left">
            <div class="tit-left" v-show="show.first_screen">【供电所信息】</div>
        </transition>
        <transition name="fade-right">
            <decoration6 class="dec-right" v-show="show.first_screen" style="width:6.8rem;height:.35rem;" />
        </transition>
        <transition name="fade-bottom">
            <div class="tit-center" v-show="show.first_screen">
            【今日看板】
            </div>
        </transition>
        <transition name="fade-right">
            <decoration6 class="dec-right" v-show="show.first_screen" style="width:6.8rem;height:.35rem;" />
        </transition>

        <transition name="fade-right">
            <div class="tit-right" v-show="show.first_screen">【本月概况】</div>
        </transition>
        <transition name="fade-left">
            <div class="child-tit" v-show="show.operating">
                <div class="back" @click="goBack">
                    <img class="fanhui" src="../../assets/img/fanhui.png" alt="">
                返回</div>
                <div class="jiantou">
                    <img src="../../assets/img/jiantou.png" alt="">
                </div>
                <div class="text">经营状况</div>
            </div>
        </transition>
        <transition name="fade-left">
            <div class="child-tit" v-show="show.protection">
                <div class="back" @click="goBack">
                    <img class="fanhui" src="../../assets/img/fanhui.png" alt="">
                返回</div>
                <div class="jiantou">
                    <img src="../../assets/img/jiantou.png" alt="">
                </div>
                <div class="text">基础保障</div>
            </div>
        </transition>
        <transition name="fade-left">
            <div class="child-tit" v-show="show.repair">
            <div class="back" @click="goBack">
                <img class="fanhui" src="../../assets/img/fanhui.png" alt="">
                返回</div>
            <div class="jiantou">
                <img src="../../assets/img/jiantou.png" alt="">
            </div>
                <div class="text">抢修</div>
            </div>
        </transition>
        <transition name="fade-left">
            <div class="child-tit" v-show="show.complaint">
            <div class="back" @click="goBack">
                <img class="fanhui" src="../../assets/img/fanhui.png" alt="">
            返回</div>
            <div class="jiantou">
                <img src="../../assets/img/jiantou.png" alt="">
            </div>
                <div class="text">投诉</div>
            </div>
        </transition>
        <transition name="fade-left">
            <div class="child-tit" v-show="show.staff_detail">
            <div class="back" @click="goBack">
                <img class="fanhui" src="../../assets/img/fanhui.png" alt="">
                返回</div>
                
            </div>
        </transition>
        <transition name="fade-left">
            <div class="child-tit" v-show="show.basic">
            <div class="back" @click="goBack">
                <img class="fanhui" src="../../assets/img/fanhui.png" alt="">
            返回</div>
            <div class="jiantou">
                <img src="../../assets/img/jiantou.png" alt="">
            </div>
                <div class="text" style="width:4.1rem" >基础数据维护</div>
            </div>
        </transition>
    </div>

    <div class="content">
      <!-- 左侧模块 -->
        <transition name="fade-left">
        <div class="left" v-if="show.left_bool&&show.first_screen">
            <center-top v-if="others_ready" :analysis='analysis' :analysisrj='analysisrj'></center-top>
            <center-bottom :persons='persons' @showLeft='showLeft'></center-bottom>
        </div>
        </transition>
      <!-- <dv-loading>Loading...</dv-loading> -->
        <transition name="fade-left">
            <div class="new-left" v-show="!show.left_bool&&show.first_screen">
                <left-list v-if="!show.left_bool" @hideLeftList='hideLeftList' @showStaffDetail='showStaffDetail' :type='type' :index='click_index'></left-list>
            </div>
        </transition>
      <!-- 中间模块 -->
        <transition name="fade-bottom">
            <div class="center" v-show="show.first_screen&&show.mid_bool">
                <left-top v-if="work_order_ready" :workOrder='workOrder' :work_order_time='work_order_time' @showLeft='showLeft'></left-top>
                <left-center v-if="metering_ready" :metering='metering' :metering_time='metering_time' @showLeft='showLeft'></left-center>
                <left-center1 v-if="business_ready" :business='business' :business_time='business_time' @showLeft='showLeft'></left-center1>
                <left-center2 v-if="XSInfo_ready" :XSInfo='XSInfo' :XSInfo_time='XSInfo_time' @showLeft='showLeft'></left-center2>
                <left-bottom v-if="others_ready" :area='area' :others_time='others_time' @showLeft='showLeft'></left-bottom>
            </div>
        </transition>
      <!-- 右侧模块 -->
        <transition name="fade-right">
            <div class="right" v-if="show.first_screen">
                <right-top v-if="others_ready" :complaint='complaint' @showService='showService'></right-top>
                <right-center v-if="others_ready" :operating='operating' @showOperating='showOperating'></right-center>
                <right-bottom v-if="others_ready" :protection='protection' @showProtection='showProtection'></right-bottom>
            </div>
        </transition>
        <transition name="fade-right">
            <div class="operating" v-show="show.operating">
                <operating-left :data_operating='data_operating' v-if="show.operating"></operating-left>
                <operating-center :data_operating='data_operating' v-if="show.operating"></operating-center>
                <operating-right :data_operating='data_operating' v-if="show.operating"></operating-right>
            </div>
        </transition>
        <transition name="fade-right">
            <div class="protection" v-show="show.protection">
                <protection-left :data_protection='data_protection' v-if="show.protection"></protection-left>
                <protection-right :data_protection='data_protection' v-if="show.protection"></protection-right>
                <protection-bottom :data_protection='data_protection' v-if="show.protection"></protection-bottom>
            </div>
        </transition>
        <transition name="fade-right">
            <div class="complaint" v-show="show.complaint">
                <complaint-left :data_complaint='data_complaint' v-if="show.complaint"></complaint-left>
                <complaint-center :data_complaint='data_complaint' v-if="show.complaint"></complaint-center>
                <complaint-right :data_complaint='data_complaint' v-if="show.complaint"></complaint-right>
            </div>
        </transition>
        <transition name="fade-right">
            <div class="repair" v-show="show.repair">
                <repair-left :data_repair='data_repair' v-if="show.repair"></repair-left>
                <repair-right :data_repair='data_repair' v-if="show.repair"></repair-right>
            </div>
        </transition>
        
        <div  class="staff" v-show="show.staff_detail">
            <transition name="fade-left">
                <staff-left  v-if="show.staff_detail&&show.staff_detail_left" @showSelectStaff='showSelectStaff' :employee_info='staff_info'></staff-left>
            </transition>
            <transition name="fade-right">
                <staff-right  v-if="show.staff_detail&&show.staff_detail_right" :type='staff_data_type' :employee_info='staff_info'></staff-right>
            </transition>
        </div>
        
        <!-- 基础数据维护组件 -->
        <div class="basic" v-show="show.basic">
            <transition name="fade-left">
                <basic-left  v-if="show.basic" @deptInfoEdit='deptInfoEdit'></basic-left>
            </transition>
            <transition name="fade-right">
                <basic-right  v-if="show.basic"></basic-right>
            </transition>
        </div>
        <div v-if="audio" class="cover">

        </div>
        <border class="border" v-if="audio" style="width:12rem;height:7rem;">
            <div class="work-order-warn" @click='hideCover'>
            <div class="inner">
                <div class="pic">
                    <img src="../../assets/img/warn.png" alt="">
                </div>
                <div class="text">
                    您有新的抢修工单 <br>
                    请及时处理
                </div>
            </div>
            </div>
        </border>
        <div class="alsrtInfo" :style="{display: displayStsates}" ref="alertMsg">
            <div class="profPrompt_test">{{aletMsg}}</div>
        </div>
      <!--  -->
        <iframe style="opacity: 0;" allow="autoplay" v-if="audio" src="../../../static/mp3/8858.mp3"></iframe>
    </div>

  </div>
</template>

<script>

import leftTop from './firstScreen/leftTop'
import leftCenter from './firstScreen/leftCenter'
import leftBottom from './firstScreen/leftBottom'
import centerTop from './firstScreen/centerTop'
import centerBottom from './firstScreen/centerBottom'
import rightTop from './firstScreen/rightTop'
import rightCenter from './firstScreen/rightCenter'
import leftCenter1 from './firstScreen/leftCenter1'
import leftCenter2 from './firstScreen/leftCenter2'
import rightBottom from './firstScreen/rightBottom'

import { isEmpty, compare } from "../../utils/ryutils";
import decoration5 from '@/components/decoration5'
import decoration8 from '@/components/decoration8'
import decoration6 from '@/components/decoration6'
import leftList from '@/components/leftList'
import operatingLeft from '@/components/operating/left'
import operatingRight from '@/components/operating/right'
import operatingCenter from '@/components/operating/center'
import protectionLeft from '@/components/protection/left'
import protectionRight from '@/components/protection/right'
import protectionBottom from '@/components/protection/bottom'
import complaintLeft from '@/components/complaint/left'
import complaintRight from '@/components/complaint/right'
import complaintCenter from '@/components/complaint/center'
import repairLeft from '@/components/repair/left'
import repairRight from '@/components/repair/right'
import border from '@/components/tools/border'
import staffLeft from '@/components/staff/left'
import staffRight from '@/components/staff/right'
import basicLeft from '@/components/basic/left'
import basicRight from '@/components/basic/right'
import $ from 'jquery'
import ryAjax from './../../utils/ryajax'
import config from './../../config'
export default {
    data() {
        return {
        /**
         * 显示与隐藏
         */
            show: {
                first_screen: true,
                second_screen: false,
                left_bool: true,
                mid_bool: true,
                operating: false,
                protection: false,
                service: false,
                complaint: false,
                repair: false,
                staff_detail:false,
                staff_detail_left:false,
                staff_detail_right:false,
                basic:false,
            },
            type: '',
            click_index: -1,
            fiter: 'fiter',
            audio: false,
            workOrder: [],
            metering: [],
            XSInfo: [],
            business: [],
            area: [{title:123,value:234},{title:123,value:234},{title:123,value:234},{title:123,value:234}],
            analysis: [],
            analysisrj: [],
            persons: {sz:{position:'所长'},
            sjj:{sjj:'供电所组织架构简介供电所组织架构简介供电所组织架构简介供电所组织架构简介供电所组织架构简介'},
            fsz:[{position:'副所长'},{position:'副所长'}]},
            complaint: [{title:123,value:23},{title:123,value:23}],
            operating: [{title:'当月售电',value:1000,unit:'kw/h'},{title:'当月售电',value:1000,unit:'kw/h'},{title:'当月售电',value:1000,unit:'kw/h'}],
            protection: [{title:123,value:132},{title:123,value:132},{title:123,value:132}],
            showAll: false,
            timestamp: '',
            data_protection: {},
            data_complaint: {},
            data_repair: {},
            data_operating: {},
            work_order_ready: false,
            metering_ready: false,
            XSInfo_ready: false,
            business_ready: false,
            others_ready: false,
            work_order_time: '',
            metering_time: '',
            XSInfo_time: '',
            business_time: '',
            others_time: '',
            dept_info: {},
            update_status: true,
            aletMsg: '', // 弹出框中的提示语
            displayStsates: 'none',
            staff_data_type:0,
            staff_detail_data:{},
            staff_info:{},
            version:''
        };
    },
    components: {
        leftTop,
        leftCenter,
        leftBottom,
        centerTop,
        centerBottom,
        rightTop,
        rightCenter,
        rightBottom,
        leftCenter1,
        leftCenter2,
        decoration5,
        decoration8,
        decoration6,
        leftList,
        operatingLeft,
        operatingRight,
        operatingCenter,
        protectionLeft,
        protectionRight,
        protectionBottom,
        complaintLeft,
        complaintRight,
        complaintCenter,
        repairLeft,
        repairRight,
        border,
        staffLeft,
        staffRight,
        basicLeft,
        basicRight
    },
    created: function () {
        debugger
    },
    mounted() {
        let that = this;
        that.getMetingInfo();
        
        setInterval(() => {
            that.getMetingInfo();
        }, 1000 * 60 * 10);
        that.getBusinessInfo();

        setInterval(() => {
            that.getBusinessInfo();
        }, 1000 * 60 * 10);
        that.getXSInfo();
        that.others_ready = true;
        ryAjax('初始化', config.inter.init, {
            data: {},
            successfn(resp) {
                that.getDeptInfo();
                that.getVersion();
                that.getWorkOrderInfo();
                setInterval(() => {
                    that.getWorkOrderInfo();
                }, 1000 * 60 * 10);

                that.getMetingInfo();
                setInterval(() => {
                    that.getMetingInfo();
                }, 1000 * 60 * 10);

                that.getBusinessInfo();

                setInterval(() => {
                    that.getBusinessInfo();
                }, 1000 * 60 * 10);

                that.getOperating();
                that.getProtection();
                that.getComplaint();
                that.getRepair();
                that.getOthersInfo();
                that.getXSInfo();

                setInterval(() => {
                    that.getOperating();
                    that.getProtection();
                    that.getComplaint();
                    that.getRepair();
                    that.getXSInfo();
                    that.getOthersInfo();
                }, 60 * 60 * 24 * 1000);
            }
        });

    },
    methods: {
        // 隐藏第一屏全部元素
        hideFirstScreen(e) {
            this.show.first_screen = false;
        },
        showFirstScreen() {
            this.show.first_screen = true;
        },
        // 隐藏左侧元素
        hideLeft: function () {
            this.show.left_bool = false;
            this.show.mid_bool = false;
        },
        hideMId: function () {
            this.show.mid_bool = false;
        },
        hideCover: function () {
            this.audio = false;
        },
        //子组件传递的方法
        showLeft(obj) {
            this.type = obj.key;
            this.click_index = obj.index;
            this.hideLeft();
        },
        hideLeftList: function () {
            this.show.left_bool = true;
            this.show.mid_bool = true;
        },
        goBack: function () {
            if (this.show.operating) {
                this.show.operating = false;
            }
            if (this.show.complaint) {
                this.show.complaint = false;
            }
            if (this.show.repair) {
                this.show.repair = false;
            }
            if (this.show.protection) {
                this.show.protection = false;
            }
            if (this.show.staff_detail) {
                this.show.staff_detail = false;
            }
            if (this.show.basic){
                this.show.basic = false;
            }
            this.show.first_screen = true;
        },
        showService: function (index) {
            if (index == 1) {
                this.hideFirstScreen();
                this.show.repair = true;
            }
            if (index == 0) {
                this.hideFirstScreen();
                this.show.complaint = true;
            }
        },
        showOperating: function () {
            this.hideFirstScreen();
            this.show.operating = true;
        },
        showProtection: function () {
            this.hideFirstScreen();
            this.show.protection = true;
        },
        showStaffDetail:function(obj){
            this.staff_info = obj;
            this.staff_data_type = 0;//解决异步请求 type值没有传入时的报错
            this.hideFirstScreen();
            this.show.staff_detail = true;
            this.show.staff_detail_left = true;
            this.show.staff_detail_right = true;

        },
        showSelectStaff:function(index){
            let that = this;
            this.show.staff_detail_right = false;
            this.staff_data_type = index;
            setTimeout(function(){
                 that.show.staff_detail_right = true;
            },1000)
           
        },
        deptInfoEdit:function(){
            this.getDeptInfo();
        },
        getWorkOrderInfo: function () {
            let that = this;
            ryAjax('获取首页工单数据', config.inter.getWorkOrderInfo, {
                data: {},
                successfn(resp) {
                    that.workOrder = resp.gd;
                    if (that.workOrder[1].value > 0) {
                        that.audio = true;
                    }
                    that.work_order_ready = true;
                    that.work_order_time = new Date().format("yyyy-MM-dd hh:mm:ss");
                }
            });
        },
        getMetingInfo: function () {
            let that = this;
            this.metering = {
                line:[{title:'21台区',value:1000},{title:'杨树湾台区',value:103},{title:123,value:123}]
            }
            this.metering_ready = true;
            that.metering_time = new Date().format("yyyy-MM-dd hh:mm:ss");
            // ryAjax('获取首页计量抄通数据', config.inter.getMetingInfo, {
            //     data: {},
            //     successfn(resp) {
            //         that.metering = resp.jlct;
            //         that.metering_ready = true;
            //         that.metering_time = new Date().format("yyyy-MM-dd hh:mm:ss");
            //     }
            // });
        },
        getXSInfo: function () {
            let that = this;
            that.XSInfo = {zyxs_num:1,zyxs:[{type:1,value:1},{type:1,value:1}],tqxs:[{type:1,value:1},{type:1,value:1},{type:1,value:1}]};
            that.XSInfo_ready = true;
            that.XSInfo_time = new Date().format("yyyy-MM-dd hh:mm:ss");
            ryAjax('获取首页今日线损数据', config.inter.getXSInfo, {
                data: {},
                successfn(resp) {
                    that.XSInfo = resp;
                    that.XSInfo_ready = true;
                    that.XSInfo_time = new Date().format("yyyy-MM-dd hh:mm:ss");
                }
            });
        },
        getDeptInfo: function () {
            let that = this;
            ryAjax('获取名称数据', config.inter.getDeptInfo, {
                data: {},
                successfn(resp) {
                    that.dept_info = resp;
                }
            });
        },
        getBusinessInfo: function () {
            let that = this;
            that.business = [{title:12,value:123},{title:12,value:123},{title:12,value:123}]
            that.business_ready = true;
            that.business_time = new Date().format("yyyy-MM-dd hh:mm:ss");
            ryAjax('获取首页业扩新装数据', config.inter.getBusinessInfo, {
                data: {},
                successfn(resp) {
                    that.business = resp.yk;
                    that.business_ready = true;
                    that.business_time = new Date().format("yyyy-MM-dd hh:mm:ss");
                }
            });
        },
        getOthersInfo: function () {
            let that = this;
            ryAjax('获取首页其他数据', config.inter.getOthersInfo, {
                data: {},
                successfn(resp) {
                    that.handleData(resp.yctq,that.area)
                    that.handleData(resp.sjfx,that.analysis)
                    that.handleData(resp.rj_sjfx,that.analysisrj)
                    that.handleData(resp.zzjg,that.persons)
                    that.handleData(resp.gdff,that.complaint)
                    that.handleData(resp.jyqk,that.operating)
                    that.handleData(resp.jcbz,that.protection)
                    // that.area = resp.yctq;
                    // that.analysis = resp.sjfx;
                    // that.analysisrj = resp.rj_sjfx;
                    // that.persons = resp.zzjg;
                    // that.complaint = resp.gdff;
                    // that.operating = resp.jyqk;
                    // that.protection = resp.jcbz;
                    that.others_ready = true;
                    that.others_time = new Date().format("yyyy-MM-dd hh:mm:ss");
                }
            });
        },
        // 此方法用来解决 vue 修改数组对象之后的 试图不更新问题
        handleData(data,obj){
            let that = this;
            if(typeof data == 'object'&&data.length){//数组
                data.map((item,index)=> {
                    that.$set(obj,index,item);
                })
            }
            if(typeof data == 'object'&&!data.length){//非数组对象
                for(let key in data){
                    that.$set(obj,key,data[key])
                }
            }
        },
        //获取抢修数据
        getRepair: function () {
            let that = this;
            ryAjax('获取抢修数据', config.inter.getRepair, {
                data: {},
                successfn(resp) {
                    that.data_repair = resp;
                }
            });
        },
        //获取基础保障
        getProtection: function () {
            let that = this;
            ryAjax('获取基础保障数据', config.inter.getProtection, {
                data: {},
                successfn(resp) {
                    that.data_protection = resp;
                }
            });
        },
        //获取投诉数据
        getComplaint: function () {
            let that = this;
            ryAjax('获取投诉数据', config.inter.getComplaint, {
                data: {},
                successfn(resp) {
                    that.data_complaint = resp;
                }
            });
        },
        //获取经营情况数据
        getOperating: function () {
            let that = this;
            that.data_operating = 
            ryAjax('获取售电量数据', config.inter.getOperating, {
                data: {},
                successfn(resp) {
                    that.data_operating = resp;
                }
            });
        },
        
        updateData: function () {
            this.update_status = false
            let that = this;  
            ryAjax('更新今日数据', config.inter.updateData, {
                data: {},
                successfn(resp) {
                    if (resp.result === 'ok') {
                        // 直接调用，会弹出两秒自动关闭
                        that.alertDia(true, '成功')
                        that.dept_info.update_time = '更新日期:' + that.getCurDay();
                        that.getOthersInfo()
                        that.update_status = true
                    } else if (resp.result === 'error') {
                        that.alertDia(false, resp.msg)
                        that.update_status = true
                    }
                }
            });
        },
        getCurDay: function () {
            var date = new Date();
            var seperator1 = "-";
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            var currentdate = year + seperator1 + month + seperator1 + strDate;
                return currentdate;
            },
        // 提示弹框
        alertDia(status, msg) {
            this.displayStsates = 'block'
            this.aletMsg = msg
            var time = 2000;
            if (!status) {
                time = 4000
            }
            // 延迟2秒后消失 自己可以更改时间
            window.setTimeout(() => {
                this.displayStsates = 'none'
            }, time)
        },
        showBasic(){
            this.hideFirstScreen();
            this.show.basic = true;
        },
        getVersion(){
            let that = this;
            ryAjax('获取抢修数据', config.inter.getVersion, {
                data: {},
                successfn(resp) {
                    that.version = resp.version;
                }
            });
        }
    }

}
</script>

<style scoped lang="scss">
    .dof-main {
        position: inherit;
        width: 100%;
        height: 100%;
        color: #fff;
    }
    .logo {
        font-size: 0.4rem;
        position: absolute;
        left: 1rem;
        bottom: 0;
        text-align: left;
        color: #0abda7;
    }
    .update .top {
        font-size: 0.3rem;
        position: absolute;
        right: 5.75rem;
        top: 1.4rem;
        bottom: 0;
        text-align: left;
        color: #0abda7;
    }
    .btn {
        width: 2.5rem;
        height: .89rem;
        line-height: .89rem;
        background-image: url("../../assets/img/btn.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        color: #1FE291;
        font-size: .22rem;
        position: absolute;
        bottom: 0;
        right: 1rem;
        cursor: pointer;
    }
    .update .botoom {
        position: absolute;
        right: 4.5rem;
        height: 1rem;
        // top: 1.5rem;
        bottom: 0;
        text-align: left;
        color: #0abda7;
    }
    .botoom:hover {
    //  background:  rgba(255, 255, 255, .1);
        transform: scale(1.1);
    }
    .version {
        font-size: .26rem;
        color: #28C083;
        font-weight: 300;
    }
    .header {
        height: 2.06rem;
        text-align: center;
        font-weight: 700;
    }
    .content {
        height: 18rem;
        position: relative;
        margin-left: 1rem;
        margin-right: 1rem;
    }
    .left {
        height: 17.99rem;
        width: 9rem;
        background: rgba(21, 87, 90, 0.4);
        border: 2px solid rgba(14, 120, 120, 0.4);
        padding: 0 0.44rem;
        box-sizing: border-box;
        position: absolute;
        left: 0;
    }
    .new-left {
        padding: 0;
        height: 17.99rem;
        width: 27rem;
        background: rgba(21, 87, 90, 0.4);
        border: 2px solid rgba(14, 120, 120, 0.4);
        padding: 0 0.44rem;
        box-sizing: border-box;
        position: absolute;
        left: 0;
    }
    .center {
        width: 17.6rem;
        height: 17.99rem;
        box-sizing: border-box;
        position: absolute;
        background: rgba(21, 87, 90, 0.4);
        border: 2px solid rgba(14, 120, 120, 0.4);
        padding: 0 0.44rem;
        left: 50%;
        transform: translateX(-50%);
    }
    .right {
        height: 17.99rem;
        width: 9rem;
        background: rgba(21, 87, 90, 0.4);
        border: 2px solid rgba(14, 120, 120, 0.4);
        box-sizing: border-box;
        padding: 0 0.4rem;
        position: absolute;
        right: 0;
    }
    .tit {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 4.12rem;
        height: 1.38rem;
        font-size: 0.42rem;
        font-family: FZLanTingHeiS-H-GB;
        font-weight: 700;
        color: rgba(10, 189, 167, 1);
        letter-spacing: 0.1em;
        position: relative;
    }
    .tit-center {
        text-align: center;
    }
    .header {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-shrink: 0;

    .header-center-decoration {
        width: 40%;
        height: 1.56rem;
        margin-top: 1.7%;
        color: #155a31;
    }

    .header-left-decoration,
    .header-right-decoration {
        width: 25%;
        height: 1.13rem;
    }

    .center-title {
        position: absolute;
        font-size: 0.72rem;
        font-weight: bold;
        left: 50%;
        top: 15px;
        transform: translateX(-50%);
        letter-spacing: 0.2em;
    }
    }
    .operating,
    .complaint,
    .repair,
    .staff,
    .basic {
        height: 100%;
        display: flex;
        justify-content: space-between;
    }
    .child-tit {
        display: flex;
        align-items: center;
        font-size: 0.42rem;
        color: #fff;
        position: absolute;
        left: 1rem;
    }
    .back,
    .child-tit .text {
        width: 3.3rem;
        height: 0.74rem;
        line-height: 0.74rem;
        background-image: url("../../assets/img/jiaobiao.png");
        background-repeat: no-repeat;
        background-size: cover;
        padding-left: 0.3rem;
        box-sizing: border-box;
    }
    .back {
        cursor: pointer;
    }
    .jiantou {
        width: 0.48rem;
        height: 0.34rem;
    }
    .jiantou img {
        width: 100%;
        height: 100%;
    }
    .fanhui {
        width: 0.4rem;
        height: 0.4rem;
        display: inline-block;
        cursor: pointer;
    }
    .protection {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .border {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .work-order-warn {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .work-order-warn .inner {
        text-align: center;
    }
    .work-order-warn .pic {
        width: 2.6rem;
        height: 2.6rem;
        display: inline-block;
    }
    .work-order-warn .pic img {
        width: 100%;
        height: 100%;
    }
    .work-order-warn .text {
        font-size: 0.68rem;
        color: #971022;
        line-height: 1.2rem;
    }
    .cover {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgba($color: #000000, $alpha: 0.7);
    }
    .loader {
        right: 4.6rem;
        top: 1rem;
        font-size: 10px;
        margin: 30% auto;
        text-indent: -9999em;
        width: 3em;
        height: 3em;
        border-radius: 50%;
        /* 线性渐变，从左到右，从白色到透明，0％代表起点和100％是终点 */
        background: linear-gradient(
            to right,
            #1FE291 10%,
            rgba(255, 255, 255, 0) 42%
        );
        position: relative;
        animation: load3 1.4s infinite linear;
    }
    .loader:before,
    .loader:after {
    content: "";
        position: absolute;
        top: 0;
        left: 0;
    }
    .loader:before {
        width: 50%;
        height: 50%;
        background: #1FE291;
        border-radius: 100% 0 0 0;
    }
    .loader:after {
        background:rgba($color: #04130C, $alpha: 1);
        width: 75%;
        height: 75%;
        border-radius: 50%;
        margin: auto;
        bottom: 0;
        right: 0;
    }
    @keyframes load3 {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    }
    .alsrtInfo {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;
        background: rgba(0, 0, 0, 0.1);
    .profPrompt_test {
        padding: 30px 10px;
        width: 480px;
        overflow: hidden;
        line-height: 28px;
        border: 1px solid #4eb6d3;
        color: #4eb6d3;
        position: absolute;
        background-color: #03381f;
        top: 10%;
        left: 50%;
        font-size: 14px;
        font-family: Gotham-Book;
        opacity: 1;
        /* z-index: 1; */
        text-align: center;
        transform: translate(-50%, -50%);
    }
    }
</style>
