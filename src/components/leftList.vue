<template>
  <!-- 左侧列表 -->
  <div>
    <div class="leftList">
        <div class="tit" v-if="z_type=='workOrder'&&z_index==0">投诉工单
            <span @click="hideLeftList"><img src="../assets/img/quxiao.png" alt=""></span>
        </div>
        <div class="tit" v-if="z_type=='workOrder'&&z_index==1">抢修工单
            <span @click="hideLeftList"><img src="../assets/img/quxiao.png" alt=""></span>
        </div>
        <div class="tit" v-if="z_type=='workOrder'&&z_index==2">停电失败工单
            <span @click="hideLeftList"><img src="../assets/img/quxiao.png" alt=""></span>
        </div>
        <div class="tit" v-if="z_type=='workOrder'&&z_index==3">复电失败工单
            <span @click="hideLeftList"><img src="../assets/img/quxiao.png" alt=""></span>
        </div>
        <div class="tit" v-if="z_type=='workOrder'&&z_index==4">咨询工单
            <span @click="hideLeftList"><img src="../assets/img/quxiao.png" alt=""></span>
        </div>
        <div class="tit" v-if="z_type=='metering'&&z_index==0">未抄通的用户
            <span @click="hideLeftList"><img src="../assets/img/quxiao.png" alt=""></span>
        </div>
        <div class="tit" v-if="z_type=='metering'&&z_index==1">涉及的台区
            <span @click="hideLeftList"><img src="../assets/img/quxiao.png" alt=""></span>
        </div>
        <div class="tit" v-if="z_type=='business'&&z_index==0">已完成
            <span @click="hideLeftList"><img src="../assets/img/quxiao.png" alt=""></span>
        </div>
        <div class="tit" v-if="z_type=='business'&&z_index==1">待处理
            <span @click="hideLeftList"><img src="../assets/img/quxiao.png" alt=""></span>
        </div>
        <div class="tit" v-if="z_type=='business'&&z_index==2">小于3小时
            <span @click="hideLeftList"><img src="../assets/img/quxiao.png" alt=""></span>
        </div>
        <div class="tit" v-if="z_type=='business'&&z_index==3">大于40小时
            <span @click="hideLeftList"><img src="../assets/img/quxiao.png" alt=""></span>
        </div>
        <div class="tit" v-if="z_type=='abnormal'&&z_index==0">线路停电
            <span @click="hideLeftList"><img src="../assets/img/quxiao.png" alt=""></span>
        </div>
        <div class="tit" v-if="z_type=='abnormal'&&z_index==1">重过载明细
            <span @click="hideLeftList"><img src="../assets/img/quxiao.png" alt=""></span>
        </div>
        <div class="tit" v-if="z_type=='abnormal'&&z_index==2">三相不平衡明细
            <span @click="hideLeftList"><img src="../assets/img/quxiao.png" alt=""></span>
        </div>
        <div class="tit" v-if="z_type=='abnormal'&&z_index==3">低电压明细
            <span @click="hideLeftList"><img src="../assets/img/quxiao.png" alt=""></span>
        </div>
        <div class="tit" v-if="z_type=='zyxs'">中压线损
            <span @click="hideLeftList"><img src="../assets/img/quxiao.png" alt=""></span>
        </div>
        <div class="tit" v-if="z_type=='tqxs'&&z_index==0">台区线损---优良
            <span @click="hideLeftList"><img src="../assets/img/quxiao.png" alt=""></span>
        </div>
        <div class="tit" v-if="z_type=='tqxs'&&z_index==1">台区线损---正常
            <span @click="hideLeftList"><img src="../assets/img/quxiao.png" alt=""></span>
        </div>
        <div class="tit" v-if="z_type=='tqxs'&&z_index==2">台区线损---高损
            <span @click="hideLeftList"><img src="../assets/img/quxiao.png" alt=""></span>
        </div>
        <div class="tit" v-if="z_type=='tqxs'&&z_index==3">台区线损---负损
            <span @click="hideLeftList"><img src="../assets/img/quxiao.png" alt=""></span>
        </div>
        <!-- <div class="tit" v-if="z_type=='tqxs'&&z_index==3">台区线损---负损
            <span @click="hideLeftList"><img src="../assets/img/quxiao.png" alt=""></span>
        </div> -->
        <div class="tit" v-if="z_type=='staff'&&z_index==0">供电服务员工
            <span @click="hideLeftList"><img src="../assets/img/quxiao.png" alt=""></span>
        </div>
        <div v-if="z_type=='workOrder'&&z_index==0" class="content">
            <div class="item">
                <div>时间</div>
                <div>用户名称</div>
                <div>联系电话</div>
                <div>联系地址</div>
            </div>
            <div class="item" v-for="(item,index) in dataList" :key="index">
                <div>{{item.export_date}}</div>
                <div>{{item.cust_name}}</div>
                <div>{{item.tel}}</div>
                <div>{{item.addr}}</div>
            </div>
        </div>
        <div v-if="z_type=='workOrder'&&z_index==1" class="content">
            <div class="item">
                <div>时间</div>
                <div>用户名称</div>
                <div>联系电话</div>
                <div>抢修地址</div>
            </div>
            <div class="item" v-for="(item,index) in dataList" :key="index">
                <div>{{item.export_date}}</div>
                <div>{{item.cust_name}}</div>
                <div>{{item.tel}}</div>
                <div>{{item.addr}}</div>
            </div>
        </div>
        <div v-if="z_type=='workOrder'&&z_index==2" class="content">
            <div class="item">
                <div>时间</div>
                <div>台区名称</div>
                <div>用户编号</div>
                <div>用户名称</div>
                <div>台区责任人</div>
                <div>工单状态</div>
            </div>
            <div class="item" v-for="(item,index) in dataList" :key="index">
                <div>{{item.sg_time}}</div>
                <div>{{item.tg_name}}</div>
                <div>{{item.cons_no}}</div>
                <div>{{item.cons_name}}</div>
                <div>{{item.tqzrr}}</div>
                <div>{{item.ctr_mode}}</div>
            </div>
        </div>
        <div v-if="z_type=='workOrder'&&z_index==3" class="content">
            <div class="item">
                <div>时间</div>
                <div>台区编号</div>
                <div>用户编号</div>
                <div>用户名称</div>
                <div>台区责任人</div>
                <div>工单状态</div>
            </div>
            <div class="item" v-for="(item,index) in dataList" :key="index">
                <div>{{item.sg_time}}</div>
                <div>{{item.tg_name}}</div>
                <div>{{item.cons_no}}</div>
                <div>{{item.cons_name}}</div>
                <div>{{item.tqzrr}}</div>
                <div>{{item.ctr_mode}}</div>
            </div>
        </div>
        <div v-if="z_type=='workOrder'&&z_index==4" class="content">
            <div class="item">
                <div>时间</div>
                <div>用户名称</div>
                <div>联系电话</div>
                <div>联系地址</div>
            </div>
            <div class="item" v-for="(item,index) in dataList" :key="index">
                <div>{{item.export_date}}</div>
                <div>{{item.cust_name}}</div>
                <div>{{item.tel}}</div>
                <div>{{item.addr}}</div>
            </div>
        </div>
        <div v-if="z_type=='metering'&&z_index==0" class="content">
            <div class="item">
                <div>时间</div>
                <div>用户编号</div>
                <div>用户名称</div>
                <div>台区编号</div>
                <div>台区名称</div>
                <div>用电地址</div>
            </div>
            <div class="item" v-for="(item,index) in dataList" :key="index">
                <div>{{item.export_date}}</div>
                <div>{{item.cons_no}}</div>
                <div>{{item.cons_name}}</div>
                <div>{{item.tg_no}}</div>
                <div>{{item.tg_name}}</div>
                <div>{{item.elec_addr}}</div>
            </div>
        </div>
        <div v-if="z_type=='metering'&&z_index==1" class="content">
            <div class="item">
                <div>台区编号</div>
                <div>台区名称</div>
                <div>台区负责人</div>
                <div>未抄通户数</div>
            </div>
            <div class="item" v-for="(item,index) in dataList" :key="index">
                <div>{{item.tg_no}}</div>
                <div>{{item.tg_name}}</div>
                <div>{{item.tg_fzr}}</div>
                <div>{{item.num}}</div>
            </div>
        </div>
        <div v-if="z_type=='business'&&z_index!=0" class="content">
            <div class="item">
                <div>工单开始时间</div>
                <div>申请编号</div>
                <div>用电地址</div>
                <div>新装类型</div>
            </div>
            <div class="item" v-for="(item,index) in dataList" :key="index">
                <div>{{item.rcv_time}}</div>
                <div>{{item.app_no}}</div>
                <div>{{item.address}}</div>
                <div>{{item.process_title}}</div>
            </div>
        </div>
        <div v-if="z_type=='business'&&z_index==0" class="content">
            <div class="item">
                <div>归档日期</div>
                <div>申请单编号</div>
                <div>用电地址</div>
                <div>新装类型</div>
            </div>
            <div class="item" v-for="(item,index) in dataList" :key="index">
                <div>{{item.file_date}}</div>
                <div>{{item.apply_code}}</div>
                <div>{{item.address}}</div>
                <div>{{item.business_type}}</div>
            </div>
        </div>
        <div v-if="z_type=='abnormal'&&z_index==0" class="content">
            <div class="item">
                <div>序号</div>
                <div>时间</div>
                <div>大馈线线路名</div>
                <div>停电时间</div>
                <div>停电分类</div>
                <div>关联停电时户数（时·台）</div>
            <!-- <div>发生时长</div> -->
            </div>
            <div class="item" v-for="(item,index) in dataList" :key="index">
                <div>{{item.idx}}</div>
                <div>{{item.export_date}}</div>
                <div>{{item.p_dkxname}}</div>
                <div>{{item.tdsjbk}}</div>
                <div>{{item.fltypemc}}</div>
                <div>{{item.hours}}</div>
            </div>
        </div>
        <div v-if="z_type=='abnormal'&&z_index==1" class="content">
            <div class="item">
                <div>时间</div>
                <div>台区名称</div>
                <div>最大负载率</div>
                <div>异常次数</div>
                <div>发生时长</div>
            </div>
            <div class="item" v-for="(item,index) in dataList" :key="index">
                <div>{{item.export_date}}</div>
                <div>{{item.pbmc}}</div>
                <div>{{item.zdfzl}}</div>
                <div>{{item.yccs}}</div>
                <div>{{item.fssc}}</div>
            </div>
        </div>
        <div v-if="z_type=='abnormal'&&z_index==2" class="content">
            <div class="item">
                <div>时间</div>
                <div>台区名称</div>
                <div>最大不平衡度</div>
                <div>发生次数</div>
                <div>发生时长</div>
            </div>
            <div class="item" v-for="(item,index) in dataList" :key="index">
                <div>{{item.export_date}}</div>
                <div>{{item.pbmc}}</div>
                <div>{{item.rzdbphd}}</div>
                <div>{{item.fscs}}</div>
                <div>{{item.fssc}}</div>
            </div>
        </div>
        <div v-if="z_type=='abnormal'&&z_index==3" class="content">
            <div class="item">
                <div>时间</div>
                <div>台区名称</div>
                <div>最低电压值(伏)</div>
                <div>异常次数</div>
                <div>发生时长</div>
            </div>
            <div class="item" v-for="(item,index) in dataList" :key="index">
                <div>{{item.export_date}}</div>
                <div>{{item.pbmc}}</div>
                <div>{{item.zddyz}}</div>
                <div>{{item.yccs}}</div>
                <div>{{item.fssc}}</div>
            </div>
        </div>
        <div v-if="z_type=='zyxs'" class="content">
            <div class="item">
                <div>序号</div>
                <div>线路名称</div>
                <div>供电量</div>
                <div>售电量</div>
                <div>线损率</div>
                <div>理论线损</div>
                <div>是否合格</div>
            </div>
            <div class="item" v-for="(item,index) in dataList" :key="index">
                <div>{{index+1}}</div>
                <div>{{item.pms_line_name}}</div>
                <div>{{item.gong_dian_liang}}</div>
                <div>{{item.yong_dian_liang}}</div>
                <div>{{item.xian_sun_lv}}</div>
                <div>{{item.li_lun_xian_sun}}</div>
                <div>{{item.is_good}}</div>
            </div>
        </div>
        <div v-if="z_type=='tqxs'" class="content">
            <div class="item">
                <div>台区编码</div>
                <div>台区名称</div>
                <div>供电量</div>
                <div>售电量</div>
                <div>线损率</div>
                <div>线损类型</div>
                <div>负责人姓名</div>
            </div>
            <div class="item" v-for="(item,index) in dataList" :key="index">
                <div>{{item.tg_no}}</div>
                <div>{{item.chkunit_name}}</div>
                <div>{{item.ppq}}</div>
                <div>{{item.upq}}</div>
                <div>{{item.lineloss_rate}}</div>
                <div>{{item.loss_type}}</div>
                <div>{{item.resp_emp_name}}</div>
            </div>
        </div>
        <div class="content-person" v-if="z_type=='staff'">
        
            <div v-for="(item,index) in dataList" :key='index' class="item-person" @click="showStaffDetail(item)">
                <div class="pic">
                    <img :src="item.img_addr" alt="">
                </div>
                <div class="text">
                    <div class="position">{{item.position}}</div>
                    <div class="name">{{item.staff_name}}</div>
                </div>
            </div>
        </div>
        </div>
        <div class="btns">
            <page-component :page-config="pageConfigTotal" @changeCurrentPage="changePage"></page-component>
        </div>
    </div>
</template>

<script>
import ryAjax from '../utils/ryajax'
import config from '../config'
import pageComponent from "@/components/tools/pageComponent"
export default {
    data() {
        return {
            z_index: this.index,
            z_type: this.type,
            dataList: [],
            pageConfigTotal: {
                total: 0,
                pageSize: 10,
                pageNo: 1
            },
        }
    },
    props: ['type', 'index', 'list'],
    components: {
        'page-component': pageComponent
    },
    created: function () {
        let that = this;
        //投诉工单 抢修工单 咨询工单
        if (this.z_type == 'workOrder' && (this.z_index == 0 || this.z_index == 1 || this.z_index == 4)) {
            this.dataList = [];
            let params = {};
            params.page = that.pageConfigTotal.pageNo;
            params.length = that.pageConfigTotal.pageSize;
            if (this.z_index == 0) {
                params.busi_type_code = '005'
            }
            if (this.z_index == 1) {
                params.busi_type_code = '001'
            }
            if (this.z_index == 4) {
                params.busi_type_code = '003'
            }
            this.getRepairList(params);
        }
    //停电失败工单
        if (this.z_type == 'workOrder' && this.z_index == 2) {
            this.dataList = [];
            this.getWorkOrderList();
        }
    //负电失败
        if (this.z_type == 'workOrder' && this.z_index == 3) {
            this.dataList = [];
            this.getFdList();
        }
    //未抄通用户
        if (this.z_type == 'metering' && this.z_index == 0) {
            this.dataList = [];
            this.getMetingUserList();
        }
    //s涉及台区
        if (this.z_type == 'metering' && this.z_index == 1) {
            this.dataList = [];
            this.getMetingAreaList();
        }
    //业扩新装
        if (this.z_type == 'business') {
            this.dataList = [];
            let params = {};
            params.page = that.pageConfigTotal.pageNo;
            params.length = that.pageConfigTotal.pageSize;
            if (this.z_index == 0) {
                this.getBusinessDoneList(params)
            } else {
                if (this.z_index == 1) {
                    params.type = '01'
                }
                if (this.z_index == 2) {
                    params.type = '02'
                }
                if (this.z_index == 3) {
                    params.type = '03'
                }
                this.getBusinessList(params)
            }
        }
    //异常台区
        if (this.z_type == 'abnormal') {
            this.dataList = [];
            let params = {};
            params.page = that.pageConfigTotal.pageNo;
            params.length = that.pageConfigTotal.pageSize;
            this.getAbnormalAreaList(params)
        }
    //中压线损
        if (this.z_type == 'zyxs') {
            this.dataList = [];
            let params = {};
            params.page = that.pageConfigTotal.pageNo;
            params.length = that.pageConfigTotal.pageSize;
            this.getZyxs(params);
        }
    //台区线损
        if (this.z_type == 'tqxs') {
            this.dataList = [];
            let params = {};
            params.page = that.pageConfigTotal.pageNo;
            params.length = that.pageConfigTotal.pageSize;
            if (this.z_index == '0') {
                params.loss_type = '优良'
            }
            if (this.z_index == '1') {
                params.loss_type = '正常'
            }
            if (this.z_index == '2') {
                params.loss_type = '高损'
            }
            if (this.z_index == '3') {
                params.loss_type = '负损'
            }
            this.getTqxs(params);
        }
       
        if(this.z_type=='staff'){
            this.dataList = [];
            this.getStaffList();
        }
    },
    methods: {
        hideLeftList: function () {
            this.$emit('hideLeftList')
        },
        getWorkOrderList: function () {
            let that = this;
            ryAjax('获取工单列表数据', config.inter.getWorkOrderList, {
                data: {
                    page: that.pageConfigTotal.pageNo,
                    length: that.pageConfigTotal.pageSize
                },
                successfn(resp) {
                    that.pageConfigTotal.total = resp.recordsTotal;
                    that.dataList = resp.data;
                }
            });
        },
        getRepairList: function (params) {
            let that = this;
            ryAjax('获取抢修工单列表', config.inter.getRepairList, {
                data: params,
                successfn(resp) {
                    that.pageConfigTotal.total = resp.recordsTotal;
                    that.dataList = resp.data;
                }
            });
        },
        getFdList: function () {
            let that = this;
            ryAjax('获取负电列表', config.inter.getFdList, {
                data: {
                    page: that.pageConfigTotal.pageNo,
                    length: that.pageConfigTotal.pageSize
                },
                successfn(resp) {
                    that.pageConfigTotal.total = resp.recordsTotal;
                    that.dataList = resp.data;
                }
            });
        },
        getMetingUserList: function () {
            let that = this;
            ryAjax('获取计量抄通列表', config.inter.getMetingUserList, {
                data: {
                    page: that.pageConfigTotal.pageNo,
                    length: that.pageConfigTotal.pageSize
                },
                successfn(resp) {
                    that.pageConfigTotal.total = resp.recordsTotal;
                    that.dataList = resp.data;
                }
            });
        },
        getMetingAreaList: function () {
            let that = this;
            ryAjax('获取异常台区列表', config.inter.getMetingAreaList, {
                data: {
                    page: that.pageConfigTotal.pageNo,
                    length: that.pageConfigTotal.pageSize
                },
                successfn(resp) {
                    that.pageConfigTotal.total = resp.recordsTotal;
                    that.dataList = resp.data;
                }
            });
        },
        getBusinessList: function (params) {
            let that = this;
            ryAjax('获取异常台区列表', config.inter.getBusinessList, {
                data: params,
                successfn(resp) {
                    that.pageConfigTotal.total = resp.recordsTotal;
                    that.dataList = resp.data;
                }
            });
        },
        getBusinessDoneList: function (params) {
            let that = this;
            ryAjax('获取异常台区列表', config.inter.getBusinessDoneList, {
                data: params,
                successfn(resp) {
                    that.pageConfigTotal.total = resp.recordsTotal;
                    that.dataList = resp.data;
                }
            });
        },
        getAbnormalAreaList: function (params) {
            let that = this;
            if (this.z_index == 0) {
                ryAjax('获取线路停电', config.inter.getTingDianList, {
                  data: params,
                  successfn(resp) {
                    that.pageConfigTotal.total = resp.recordsTotal;
                    that.dataList = resp.data;
                  }
                });
            }
            if (this.z_index == 1) {
                ryAjax('获取异常台区列表', config.inter.getAbnormalAreaFirstList, {
                    data: params,
                    successfn(resp) {
                        that.pageConfigTotal.total = resp.recordsTotal;
                        that.dataList = resp.data;
                    }
                });
            }
            if (this.z_index == 2) {
                ryAjax('获取异常台区列表', config.inter.getAbnormalAreaSecondList, {
                    data: params,
                    successfn(resp) {
                        that.pageConfigTotal.total = resp.recordsTotal;
                        that.dataList = resp.data;
                    }
                });
            }
            if (this.z_index == 3) {
                ryAjax('获取异常台区列表', config.inter.getAbnormalAreaThirdList, {
                    data: params,
                    successfn(resp) {
                        that.pageConfigTotal.total = resp.recordsTotal;
                        that.dataList = resp.data;
                    }
                });
            }
        },
        getZyxs: function (params) {
            let that = this;
            ryAjax('获取首页中压线损', config.inter.getZyxs, {
                data: params,
                    successfn(resp) {
                    that.pageConfigTotal.total = resp.recordsTotal;
                    that.dataList = resp.data;
                }
            });
        },
        getTqxs: function (params) {
            let that = this;
            ryAjax('获取首页台区线损', config.inter.getTqxs, {
                data: params,
                successfn(resp) {
                    that.pageConfigTotal.total = resp.recordsTotal;
                    that.dataList = resp.data;
                }
            });
        },
        changePage(page) {
            this.pageConfigTotal.pageNo = page;
            if (this.z_type == 'workOrder' && this.z_index == 2) {
                this.dataList = [];
                this.getWorkOrderList();
            }
            if (this.z_type == 'workOrder' && this.z_index == 3) {
                this.dataList = [];
                this.getFdList();
            }
        //抢修工单
            if (this.z_type == 'workOrder' && (this.z_index == 0 || this.z_index == 1 || this.z_index == 4)) {
                this.dataList = [];
                let params = {};
                params.page = that.pageConfigTotal.pageNo;
                params.length = that.pageConfigTotal.pageSize;
                if (this.z_index == 0) {
                    params.busi_type_code = '005'
                }
                if (this.z_index == 1) {
                    params.busi_type_code = '001'
                }
                if (this.z_index == 4) {
                    params.busi_type_code = '003'
                }
                this.getRepairList(params);
            }
        //未抄通用户
            if (this.z_type == 'metering' && this.z_index == 0) {
                this.dataList = [];
                this.getMetingUserList();
            }
        //涉及台区
            if (this.z_type == 'metering' && this.z_index == 1) {
                this.dataList = [];
                this.getMetingAreaList();
            }
        //未完成业扩新装

            if (this.z_type == 'business') {
                this.dataList = [];
                let params = {};
                params.page = this.pageConfigTotal.pageNo;
                params.length = this.pageConfigTotal.pageSize;
                if (this.z_index == 0) {
                    params.type = '01'
                    this.getBusinessDoneList(params)
                } else {
                    if (this.z_index == 1) {
                        params.type = '01'
                    }
                    if (this.z_index == 2) {
                        params.type = '02'
                    }
                    if (this.z_index == 3) {
                        params.type = '03'
                    }
                    this.getBusinessList(params)
                }
            }

        //异常台区
            if (this.z_type == 'abnormal') {
                this.dataList = [];
                let params = {};
                params.page = this.pageConfigTotal.pageNo;
                params.length = this.pageConfigTotal.pageSize;
                this.getAbnormalAreaList(params)
            }
        //中压线损
            if (this.z_type == 'zyxs') {
                this.dataList = [];
                let params = {};
                params.page = this.pageConfigTotal.pageNo;
                params.length = this.pageConfigTotal.pageSize;
                this.getZyxs(params)
            }
        //台区线损
            if (this.z_type == 'tqxs') {
                this.dataList = [];
                let params = {};
                params.page = this.pageConfigTotal.pageNo;
                params.length = this.pageConfigTotal.pageSize;
                if (this.z_index == 0) {
                    params.loss_type = '优良'
                }
                if (this.z_index == 1) {
                    params.loss_type = '正常'
                }
                if (this.z_index == 2) {
                    params.loss_type = '高损'
                }
                if (this.z_index == 3) {
                    params.loss_type = '负损'
                }
                this.getTqxs(params)
            }
        },
        //获取供电所员工列表数据
        getStaffList:function(){
            
            let that = this;
            ryAjax('获取员工列表', config.inter.getStaffList, {
                data: {
                    
                },
                successfn(resp) {
                    that.dataList = resp;
                }
            });
        },
        getLineFailList:function(){
            ryAjax('获取员工列表', config.inter.getTingDianList, {
                data: {
                    
                },
                successfn(resp) {
                    that.dataList = resp;
                }
            });
        },
        showStaffDetail:function(obj){
            this.$emit('showStaffDetail',obj)
        }
        
    }
}
</script>

<style scoped>
    .tit {
        font-size: 0.4rem;
        color: #fff;
        padding: 0.3rem 0.2rem;
        display: flex;
        justify-content: space-between;
    }
    .tit span {
        display: inline-block;
        width: 0.5rem;
        height: 0.5rem;
        cursor: pointer;
    }
    .tit span img {
        width: 100%;
        height: 100%;
    }
    
    .content {
        font-size: 0.3rem;
    }
    .content .item {
        display: flex;
        padding: 0.33rem 0;
    }
    .content .item > div {
        width: 16.6%;
        text-align: center;
    }
    .item:nth-child(2n-1) {
        background: #0b4d31;
    }
    .item:first-child {
        font-size: 0.31rem;
        background: #269262;
        color: #0a322f;
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
    .content-person {
        display: flex;
        justify-content:start;
        flex-wrap: wrap;
        padding-top: .2rem;
    }
    .item-person {
        text-align: center;
        width: 16.666%;
        margin-top: .4rem;
        cursor: pointer;
        transition: all .3s;
    }
    .item-person:hover {
        transform: scale(1.1);
    }
    .item-person .pic {
        width: .83rem;
        height: 1.1rem;
        display: inline-block;
    }
    .item-person .pic img {
        width: 100%;
        height: 100%;
        display: inline-block;
    }
    .item-person .text {
        font-size: .3rem;
    }
    .item-person .text .position {
        font-size: .26rem;
        padding: .2rem 0;
    }
</style>
