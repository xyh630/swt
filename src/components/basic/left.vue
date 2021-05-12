<template>
    <div class="basic-left">
        <div class="super-top">
            <transition name="fade-left">
            <div class="top" v-if="edit_type=='list'" :class="!is_show_bottom?'top-more':''">
                <div class="tit">
                    供电所简介维护
                </div>
                <div v-if="is_show_bottom" class="btn" @click="showDialog">
                    <img src="../../assets/img/pic-1.png" alt="">
                    <span>修改</span>
                </div>
                <div v-if="!is_show_bottom" class="btn" @click="toBack">
                    <img src="../../assets/img/pic-1.png" alt="">
                    <span>返回</span>
                </div>
                <div class="content">
                    <div class="con-item1">
                        <div class="con-name">
                            <img src="../../assets/img/basic-1.png" alt="">
                            <span>供电所名称</span>
                        </div>
                        <div class="con-value">
                            {{data_info.dept_name}}
                        </div>
                    </div>
                    <div class="con-item1">
                        <div class="con-name">
                            <img src="../../assets/img/basic-2.png" alt="">
                            <span>星级</span>
                        </div>
                        <div class="con-value">
                            <img v-for="item in form.star_level" :key="item" src="../../assets/img/baisc-xingxing.png" alt="">
                        </div>
                    </div>
                    <div class="con-item1">
                        <div class="con-name">
                            <img src="../../assets/img/basic-3.png" alt="">
                            <span>经纬度</span>
                        </div>
                        <div class="con-value">
                            {{data_info.longitude_latitude?data_info.longitude_latitude:'暂无数据'}}
                        </div>
                    </div>
                    <div class="con-item">
                        <div class="con-name">
                            <img src="../../assets/img/basic-4.png" alt="">
                            <span>供电所简介</span>
                        </div>
                        <div  :class="is_show_bottom?'text con-value':'con-value1'">
                            {{data_info.base_info}}
                            <span v-if="is_show_bottom" class="more">...&nbsp <span @click="viewMore(data_info.base_info)">查看更多</span><img class="jiantou-img" src="../../assets/img/jiantou-y.png" alt=""></span>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        <transition name="fade-left">
        <div class="top" v-if="edit_type1=='edit'">
            <div class="tit">
                供电所简介维护
            </div>
            <div class="form1">
                <div class="item1">
                    <div class="name">供电所名称</div>
                    <div class="value">
                        <input type="text" placeholder="请输入供电所名称" v-model="viewForm.dept_name">
                    </div>
                </div>
                <div class="item1">
                    <div class="name">星级</div>
                    <div class="value">
                        
                        <span v-for="item in kongxingxing" :key="item" class="input-xing" @click="actionXing(item)">
                            <img v-if="item>viewForm.star_level" src="../../assets/img/basic-xing.png" alt="">
                            <img v-else src="../../assets/img/baisc-xingxing.png" alt="">
                        </span>
                        
                    </div>
                </div>
                <div class="item1">
                    <div class="name">经纬度</div>
                    <div class="value">
                        <input type="text" placeholder="请输入经纬度" v-model="viewForm.longitude_latitude">
                    </div>
                </div>
                <div class="item1">
                    <div class="name">简介</div>
                    <div class="value">
                        <input type="text" placeholder="请输入简介" v-model="viewForm.base_info">
                    </div>
                </div>
                <div class="btns">
                    <el-button type="primary" @click='submitForm'>确定</el-button>
                    <el-button @click="cancelForm">取消</el-button>
                </div>
            </div>
        </div>
        </transition>
        </div>
        <transition name="fade-bottom">
        <div v-if="is_show_bottom" class="super-bottom">
            <transition name="fade-bottom">
                <div v-if="dialog_type!='add'&&dialog_type!='edit'" class="bottom">
                    <div class="tit">业务系统账号维护</div>
                    <div  class="btn" @click="showFormDialog('','add')">
                        <img src="../../assets/img/btn-1.png" alt="">
                        <span>添加</span>
                    </div>
                    <ul  class="list">
                        <li class="data-header" >
                            <div>系统名称</div>
                            <div>账号</div>
                            <div>密码</div>
                            <div>业务系统组织机构编码</div>
                            <div>班组编码</div>
                            <div></div>
                            <div></div>
                            
                        </li>
                        <li class="data-li" v-for="item in data_list" :key="item.id">
                            <div>{{item.sys_name}}</div>
                            <div>{{item.account}}</div>
                            <div>{{item.password}}</div>
                            <div>{{item.source_dept_id}}</div>
                            <div>{{item.source_banzu_id}}</div>
                            <el-tooltip class="item" effect="dark" content="请慎重操作" placement="left" style="align:center">
                                <div @click="delItem(item)" class="action-btn">删除</div>
                            </el-tooltip>
                            
                            <div @click="showFormDialog(item,'edit')" class="action-btn">修改</div>
                        </li>
                    </ul>
                </div>
                </transition>
                <transition name="fade-bottom">
                    <div v-if="dialog_type=='add'||dialog_type=='edit'" class="bottom">
                        <div class="tit">业务系统账号维护</div>
                        <div class="form">
                            <div class="item1 sys_name">
                                
                                <div class="name">系统名称</div>
                                <div class="value">
                                    <el-select v-model="addForm.sys_name" placeholder="请选择">
                                        <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.name"
                                        :value="item.name">
                                        </el-option>
                                    </el-select>
                                    
                                </div>
                            </div>
                            <div class="item1">
                                <div class="name">账号</div>
                                <div class="value">
                                    <input type="text" placeholder="请输入账号" v-model="addForm.account">
                                </div>
                            </div>
                            <div class="item1">
                                <div class="name">密码</div>
                                <div class="value">
                                    <input type="text" placeholder="请输入密码" v-model="addForm.password">
                                </div>
                            </div>
                            <div class="item1">
                                <div class="name">资源id</div>
                                <div class="value">
                                    <input type="text" placeholder="请输入资源id" v-model="addForm.source_dept_id">
                                </div>
                            </div>
                            <div class="item1" v-if="addForm.sys_name=='供电服务平台'||addForm.sys_name=='供服'">
                                <div class="name">班组id</div>
                                <div class="value">
                                    <input type="text" placeholder="请输入班组id" v-model="addForm.source_banzu_id">
                                </div>
                            </div>
                            <div class="btns">
                                <el-button type="primary" @click='addItem'>确定</el-button>
                                <el-button @click="cancel">取消</el-button>
                            </div>
                        </div>
                    </div>
            </transition>
        </div>
         </transition>
    </div>
</template>

<script>
import ryAjax from './../../utils/ryajax'
import config from './../../config'
import yer from 'yer-y'
export default {
    data(){
        return {
            data_info:{},
            data_list:[],
            dialogVisible:false,
            dialog_title:'',
            form:{
                dept_name:'',
                star_level:'',
                longitude_latitude:'',
                base_info:'',
                jj_id:''
            },
            addForm:{
                sys_name: '',
                account: '',
                password: '',
                source_dept_id: '',
                source_banzu_id: ''
            },
            viewForm:{},
            kongxingxing:5,
            dialog_type:'',
            dialog_text:'',
            clickItem:{},
            edit_type:'list',
            edit_type1:'list',
            is_show_bottom:true,
            options:[
                {
                    name:'PMS系统',
                    value:1
                },
                {
                    name:'营销系统',
                    value:2
                },
                {
                    name:'电采系统',
                    value:3
                },
                {
                    name:'日挖掘系统',
                    value:4
                },
                {
                    name:'供电服务平台',
                    value:5
                },
                {
                    name:'营配调管控工具',
                    value:6
                },
                {
                    name:'采集运维闭环管理',
                    value:7
                },
                {
                    name:'大数据中心',
                    value:8
                },

            ]
        }
    },
    created(){
        this.viewDeptInfo();
        this.getAccessAcountList();
    },
    mounted(){
        
    },
    methods:{
        //表单验证
        checkForm:function(prams){
            if(prams=='form'){
                if(this.form.dept_name.trim().length<=0){
                    return false;
                }
                if(this.form.star_level.length<=0){
                    return false;
                }
               
                if(this.form.longitude_latitude.toString().length<=0){
                    return false;
                }
                 if(this.form.base_info.trim().length<=0){
                    return false;
                }
            }
            if(prams=='addForm'){
                if(this.addForm.sys_name.trim().length<=0){
                    return false;
                }
                if(this.addForm.account.trim().length<=0){
                    return false;
                }
                if(this.addForm.password.trim().length<=0){
                    return false;
                }
                if(this.addForm.source_dept_id.trim().length<=0){
                    return false;
                }
                if(this.addForm.sys_name=='供电服务平台'&&this.addForm.source_banzu_id.trim().length<=0){
                    return false;
                }
            }
            
            return true;
            
        },
        viewDeptInfo:function(){
            let that = this;
            ryAjax('获取供电所简介数据',config.inter.viewDeptInfo, {
                data: {
                   
                },
                successfn(resp){
                    that.data_info = resp;
                    that.form.dept_name = resp.dept_name;
                    that.form.base_info = resp.base_info;
                    that.form.star_level = Number(resp.star_level);
                    that.form.longitude_latitude = resp.longitude_latitude;
                    that.form.jj_id = resp.jj_id;
                    that.viewForm = JSON.parse(JSON.stringify(that.form));
                }
            });
        },
        getAccessAcountList:function(){
            let that = this;
            ryAjax('获取业务账号',config.inter.getAccessAcountList, {
                data: {
                   
                },
                successfn(resp){
                    that.data_list = resp.listdata;
                    
                }
            });
        },
        showDialog(){
            let that = this;
            this.edit_type = 'edit';
            setTimeout(function(){
               that.edit_type1 = 'edit'
            },700)
        },
        handleClose(done) {
            done();
        },
        submitForm(){
            if(!this.checkForm('form')){
                yer('[表单不能为空]', 0);
                return
            }
            let that = this;
            
            ryAjax('修改基本信息',config.inter.editDeptInfo, {
                data: {
                    jj_id:this.viewForm.jj_id,
                    dept_name:this.viewForm.dept_name,
                    star_level:this.viewForm.star_level,
                    longitude_latitude:this.viewForm.longitude_latitude,
                    base_info:this.viewForm.base_info,
                },
                type:'POST',
                successfn(resp){
                    if(resp.result=='ok'){
                        yer('[修改成功]', 1)
                        that.viewDeptInfo();
                        that.$emit('deptInfoEdit')
                    }else {
                        yer('[修改失败]', 0)
                    }
                    that.edit_type1 = 'list';
                    setTimeout(function(){
                        that.edit_type = 'list';
                    },700)
                }
            });
        },
        cancel(){
            this.dialog_type = 'list'
            this.addForm = {};
        },
        cancelForm(){
            let that = this;
            this.viewForm = JSON.parse(JSON.stringify(this.form));
            this.edit_type1 = 'list'
            setTimeout(function(){
                that.edit_type = 'list'
            },700)
        },
        viewMore(){
            this.is_show_bottom = false;
        },
        toBack(){
            this.is_show_bottom = true;
        },
        showFormDialog(obj,type){
            if(type=='edit'){
               this.addForm = {
                    sys_name: obj.sys_name,
                    account: obj.account,
                    password: obj.password,
                    source_dept_id: obj.source_dept_id,
                    source_banzu_id: obj.source_banzu_id,
                    jj_id:obj.jj_id
                },
                this.dialog_type = 'edit'; 
            }
            if(type=='del') {
                this.clickItem = obj;
                this.dialog_type = 'del';
            }
            if(type=='add'){
                this.dialog_type = 'add';
            }
        },
        delItem(item){
            
            let that = this;
            ryAjax('删除业务账号',config.inter.delAccessAcount, {
                data: {
                    jj_id:item.jj_id,
                },
                type:'POST',
                successfn(resp){
                    if(resp.result=='ok'){
                        yer('[删除成功]', 1)
                        that.getAccessAcountList();
                    }else {
                        yer('[删除失败]', 0)
                    }
                    that.dialogVisible = false;
                }
            });
        },
        addItem(){
            //todo  校验
            console.log(this.addForm)
            if(!this.checkForm('addForm')){
                yer('[表单不能为空]', 0);
                return
            }
            //组合数据
            
            this.options.map(item=> {
                if(item.name==this.addForm.sys_name){
                    this.addForm.sys_type = item.value;
                }
            })
            let that = this;
            if(this.dialog_type=='add'){
                ryAjax('添加',config.inter.addAccessAcount, {
                    data: this.addForm,
                    type:'POST',
                    successfn(resp){
                        if(resp.result=='ok'){
                            //添加成功
                            yer('[新增成功]', 1)
                            that.getAccessAcountList();
                        }else {
                             yer('[新增失败]', 0)
                        }
                        that.dialog_type = 'list'
                        that.addForm = {};
                    }
                });
            }
            if(this.dialog_type=='edit'){
                ryAjax('修改',config.inter.editAccessAcount, {
                    data: this.addForm,
                    type:'POST',
                    successfn(resp){
                        if(resp.result=='ok'){
                            //添加成功
                            yer('[修改成功]', 1)
                            that.getAccessAcountList();  
                        }else {
                             yer('[修改失败]', 0)
                        }
                        that.dialog_type = 'list'
                        that.addForm = {};
                    }
                });
            }
            
        },
        actionXing(num){
            this.viewForm.star_level = num;
        },
        
    }
}
</script>

<style scoped>
    .basic-left {
        width: 21rem;
        height: 100%;
    }
    .super-top {
        width: 100%;
        height: 6.4rem;
        margin-bottom: .4rem;
    }
    .basic-left .top {
        height: 6.4rem;
        font-size: .3rem;
        border: .1rem solid rgba(21,87,90,.6);
        background:rgba(21,87,90,.4);
        
        padding: .4rem;
    }
    .basic-left .top-more {
        height: 10rem;
    }
    .tit {
        font-size: .42rem;
        text-align: center;
        font-weight: bold;
    }
    .con-name img {
        width: .48rem;
        height: .48rem;
    }
    .input-xing img {
        width: .48rem;
        height: .48rem;
    }
    .con-value img {
        width: .48rem;
        height: .48rem;
    }
    .btn {
        width: 1.8rem;
        height: .8rem;
        border-radius: .8rem;
        border: 2px solid #F5B83B;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #F5B83B;
        cursor: pointer;
    }
    .btn img {
        width: .48rem;
        height: .48rem;
    }
    .top .content  {
        display: flex;
        flex-wrap: wrap;
        margin-top: .2rem;
    }
    .top .content .con-item1 {
        display: flex;
        align-items: center;
    }
    .top .content .con-item1:nth-child(1) {
        width: 30%;
    }
    .top .content .con-item1:nth-child(2) {
        width: 30%;
    }
    .top .content .con-item1:nth-child(3) {
        width: 40%;
    }
    .top .content .con-item1 .con-name {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #28C083;
        margin-right: .3rem;
    }
    .top .content .con-item {
        margin-top: .4rem;
    }
    .top .content .con-item .con-name {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: #28C083;
    }
    .top .content .con-item .con-value {
        margin-top: .2rem;
        line-height: .8rem;
        padding-left: .6rem;
        padding-right: 1rem;
        word-break: break-all;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
    .top .content .con-item .con-value1 {
        margin-top: .2rem;
        line-height: .8rem;
        padding-left: .6rem;
        padding-right: 1rem;
    }
    .top .content .con-name img {
        margin-right: .12rem;
    }
    .bottom {
        height: 11.2rem;
        border: .1rem solid rgba(21,87,90,.6);
        background:rgba(21,87,90,.4);
        padding: .4rem;
        font-size: .24rem;
    }
    .bottom .btn {
        margin-top: .4rem;
    }
    .bottom ul li{
        display: flex;
        justify-content: space-between;
    }
    .bottom ul li div {
        text-align: center;
    }
    .bottom ul li div:nth-child(1) {
        width: 14%;
    }
    .bottom ul li div:nth-child(2) {
        width: 16%;
    }
    .bottom ul li div:nth-child(3) {
        width: 10%;
    }
    .bottom ul li div:nth-child(4) {
        width: 28%;
        word-wrap:break-word;
    }
    .bottom ul li div:nth-child(5) {
        width: 16%;
    }
    .bottom ul li div:nth-child(6) {
        width: 8%;
        color: #F5B83B;
        font-size: .22rem;
       
    }
    .bottom ul li div:nth-child(7) {
        width: 8%;
        color: #F5B83B;
        font-size: .22rem;
    }
    .bottom .list {
        margin-top: .4rem;
        height: 8.2rem;
        overflow: auto;
    }
    .list::-webkit-scrollbar {display:none}
    .bottom .data-header {
        background: #28C083;
        color: #0A322F;
        height: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .bottom .data-li {
        color: #fff;
        height: .9rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .bottom .data-li:nth-child(2n) {
        background: #0A3222;
    }
    .bottom .data-li:nth-child(2n-1) {
        background: #005130;
    }
    .form {
        margin-top: 2rem;
    }
    .form1 {
        margin-top: .1rem;
    }
    .btns {
        text-align: center;
        margin-top: .4rem;
    }
    .item1 {
        display: flex;
        height: .9rem;
        padding:.1rem 0;
        align-items: center;
    }
    .item1 .name {
        width: 10%;
        text-align: right;
        margin-right: .5rem;
    }
    .item1 .value {
        height: 100%;
        border: 1px solid #005130;
        border-radius: .1rem;
        width: 80%;
    }
    .item1 .value input {
        height: 100%;
        width: 100%;
        outline: 0;
        border: 0;
        background: inherit;
        color: #fff;
        padding-left: .1rem;
    }
    .text {
        position: relative;
    }
    .more {
        position: absolute;
        right: 0rem;
        width: 6rem;
        bottom: 0;
        padding-left: .2rem;
        background:#11362F;
        display: flex;
        align-items: center;
    }
    .more span {
        cursor: pointer;
        color: #F5B83B;
        margin-left: .3rem;
    }
    .jiantou-img {
        width: .48rem;
        height: .48rem;
    }
    .el-form-item__label {
        width: 200px;
    }
    .action-btn {
        cursor: pointer;
        text-align: center;
    }
    .el-button--primary {
        background: #28C083;
        border: 0;
    }
    .el-button {
        border: 0;
        padding-top: .2rem;
        padding-bottom: .2rem;
    }
    .sys_name .value {
        border:0;
        
    }
    .sys_name /deep/ .el-input__inner {
        background:inherit;
        font-size:.3rem;
        border: 1px solid #005130;
        color: #fff;
    }
    .sys_name /deep/ input {
        height:.7rem;
        line-height:.7rem;
    }
    .sys_name /deep/ .el-input__icon {
        line-height:.7rem;
    }
    .sys_name /deep/ .el-select-dropdown__item {
        font-size: .3rem;
    }
    .sys_name /deep/ input::-webkit-input-placeholder {
        color: #fff;
        opacity: .5;
    }
    input::-webkit-input-placeholder {
        color: #fff;
        opacity: .5;
    }
</style>
