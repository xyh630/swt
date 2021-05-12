<template>
    <div class="basic-right">
        <transition name="fade-right">
        <div v-if="!is_hide_list" class="right">
            <div class="tit">供电所人员维护</div>
            <div class="btn" @click="showAdd()">
                <img src="../../assets/img/btn-1.png" alt="">
                <span>添加</span>
            </div>
            <ul class="list">
                <li class="data-header">
                    <div>序号</div>
                    <div>头像</div>
                    <div>姓名</div>
                    <div>职位</div>
                    <div></div>
                    <div></div>
                </li>
                <li class="data-li" v-for="item in data_list" :key="item.id">
                    <div>{{item.idx_sort}}</div>
                    <div class="img-box">
                        <img class="header-img" :src="item.img_addr" alt="">
                    </div>
                    <div>{{item.staff_name}}</div>
                    <div>{{item.position}}</div>
                    <el-tooltip class="item" effect="dark" content="请慎重操作" placement="left">
                        <div v-if="item.position!='供电服务员工'" @click="del(item)">删除</div>
                        <div v-else></div>
                    </el-tooltip>
                    <div @click="showEdit(item)">修改</div>
                </li>
            </ul>
            <div class="btns" >
                <page-component :page-config="pageConfigTotal" @changeCurrentPage="changePage"></page-component>
            </div>
        </div>
        </transition>
        <transition name="fade-right">
        <div v-if="is_show_add" class="right">
            <div class="tit">供电所人员维护</div>
            <div class="form">
                <div class="header">
                    <div class="name">上传头像</div>
                    <div class="value">
                        <div v-if="form.img_addr==''" class="icon" @click="selectImg">
                            <span class="el-icon-plus"></span>
                        </div>
                        <input type="file" name="file" id="file" @change="fileUpload" style="display:none">
                        <div v-if="form.img_addr!=''" class="icon">
                            <img :src="form.img_addr" alt="">
                            <img class="quxiao" src="../../assets/img/del.png" alt="" @click="delHeaderImg">
                        </div>
                    </div>
                </div>
                <!-- <div class="item1" v-if="staff_type=='others'&&type=='add'">
                    <div class="name">员工序号</div>
                    <div class="value">
                        <input type="text" placeholder="请输入员工序号" v-model="form.idx_sort">
                    </div>
                </div> -->
                <div class="item1" v-if="staff_type=='others'">
                    <div class="name">员工姓名</div>
                    <div class="value">
                        <input type="text" placeholder="请输入员工姓名" v-model="form.staff_name">
                    </div>
                </div>
                <div class="item1 pos" v-if="staff_type=='others'">
                    <div class="name">员工职位</div>
                    <div class="value">
                        <el-select v-model="form.position" placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.name"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div class="btns1">
                    <el-button type="primary" @click='submitForm'>确定</el-button>
                    <el-button @click="cancel">取消</el-button>
                </div>
            </div>
        </div>
        </transition>
    </div>
</template>

<script>
import pageComponent from "@/components/tools/pageComponent"
import ryAjax from './../../utils/ryajax'
import config from './../../config'
import yer from 'yer-y'
import $ from 'jquery'
export default {
    data(){
        return {
             pageConfigTotal: {
                total: 10,
                pageSize: 10,
                pageNo: 1
            },
            data_list:[],
            form:{
                jj_id: '',
                staff_name: '',
                position: '',
                img_addr: '',
                dept_id: '',
                dept_name: '',
                idx_sort: ''
            },
            clickItem:{},
            is_hide_list:false,
            is_show_add:false,
            uploadUrl:'',
            type:'list',
            imgUrl:'',
            options:[
                {
                    name:'所长',
                    value:'所长'
                },
                {
                    name:'客户服务员',
                    value:'客户服务员'
                },
                {
                    name:'运监技术员',
                    value:'运监技术员'
                },
                {
                    name:'安全质量员',
                    value:'安全质量员'
                },
                

            ],
            staff_type:'others'
        }
    },
    components:{
        pageComponent
    },
    created(){
        this.getStaffPageList();
        this.uploadUrl = config.inter.uploadHeaderImg;
    },
    methods:{
        showList:function(){
            let that = this;
            that.is_show_add = false;
            setTimeout(function(){
                that.is_hide_list = false;
                
            },300)
            
        },
        //表单验证
        checkForm:function(prams){
            //prams 用来扩展 暂时不需要
            if(this.form.staff_name.trim().length<=0){
                return false;
            }
            if(this.form.position.trim().length<=0){
                return false;
            }
           
            if(this.form.img_addr.trim().length<=0){
                return false;
            }
            return true;
            
        },
        changePage(page) {
            this.pageConfigTotal.pageNo = page;
            this.data_list = [];
            this.getStaffPageList();
        },
        getStaffPageList:function(){
            let that = this;
            ryAjax('获取供电所员工列表',config.inter.getStaffPageList, {
                data: {
                    page:that.pageConfigTotal.pageNo,
                    length:that.pageConfigTotal.pageSize
                },
                successfn(resp){
                    that.data_list = resp.data;
                    that.pageConfigTotal.total = resp.recordsTotal;
                }
            });
        },
        showAdd(){
            
            let that = this;
            this.type = 'add';
            this.staff_type = 'others';
            this.is_hide_list = true;
            setTimeout(function(){
                that.is_show_add = true;
            },500)
        },
        addItem(){
            if(!this.checkForm()){
                yer('表单内容不能为空', 0);
                return
            }
            let that = this;
            let obj = {};
            obj.staff_name = this.form.staff_name;
            obj.position = this.form.position;
            obj.img_addr = this.form.img_addr;
            obj.idx_sort = this.form.idx_sort;
            ryAjax('新增员工',config.inter.addStaff, {
                data: obj,
                type:'POST',
                successfn(resp){
                    if(resp.result=='ok'){
                        //提示增加成功
                        yer('[新增成功]', 1)
                        that.getStaffPageList();
                    }else {
                        yer('[新增失败]', 0)
                    }
                    that.showList();
                    that.clearForm();
                }
            });
        },
        editItem(){
            if(!this.checkForm()){
                yer('表单内容不能为空', 0);
                return
            }
            let that = this;
            ryAjax('修改员工',config.inter.editStaff, {
                data: this.form,
                type:'POST',
                successfn(resp){
                    if(resp.result=='ok'){
                        //提示增加成功
                        yer('[修改成功]', 1)
                        that.getStaffPageList();
                    }else {
                        yer('[修改失败]', 0)
                    }
                    that.showList();
                    that.clearForm();
                }
            });
        },
        submitForm(){
            if(this.type=='edit'){
                this.editItem();
            }
            if(this.type=='add'){
                this.addItem();
            }
        },
        cancel(){
            let that = this;
            this.is_show_add = false;
            this.form = {
                jj_id: '',
                staff_name: '',
                position: '',
                img_addr: '',
                dept_id: '',
                dept_name: '',
                idx_sort: ''
            };
            setTimeout(function(){
                that.is_hide_list = false;
            },1000)
        },
        clearForm:function(){
            this.form = {
                jj_id: '',
                staff_name: '',
                position: '',
                img_addr: '',
                dept_id: '',
                dept_name: '',
                idx_sort: ''
            }
        },
        selectImg(){
            $("#file").trigger("click");
            
            
        },
        fileUpload(){
            console.log($("#file")[0].value)
            let  _fileName = $("#file")[0].value.substring($("#file")[0].value.lastIndexOf(".") + 1).toLowerCase();
            console.log(_fileName)
            if(_fileName!='jpg'&&_fileName!='png'){
                yer('[图片格式异常]', 0)
                return
            }
            let formData = new FormData();
            let that = this;
            formData.append('file', $('#file')[0].files[0]);
            $.ajax({
                url : config.inter.uploadHeaderImg,//这里写你的url
                type : 'POST',
                data : formData,
                contentType: false,// 当有文件要上传时，此项是必须的，否则后台无法识别文件流的起始位置
                processData: false,// 是否序列化data属性，默认true(注意：false时type必须是post)
                dataType: 'json',//这里是返回类型，一般是json,text等
                clearForm: true,//提交后是否清空表单数据
                success: function(data) {   //提交成功后自动执行的处理函数，参数data就是服务器返回的数据。
                   if(data.result=='ok'){
                       that.form.img_addr =  config.inter.urlAndress+data.msg.path
                   }
                },
                error: function(data, status, e) {  //提交失败自动执行的处理函数。
                    console.error(e);
                }
            });

        },
        del(item){
            let that = this;
            ryAjax('删除员工',config.inter.delStaff, {
                data:{
                    jj_id:item.jj_id,
                },
                successfn(resp){
                    if(resp.result=='ok'){
                        //提示增加成功
                        yer('[删除成功]', 1)
                        that.getStaffPageList();
                    }else {
                        yer('[删除失败]', 0)
                    }
                    that.showList();
                    that.clearForm();
                }
            });
        },
        delHeaderImg:function(){
            this.form.img_addr = '';
        },
        showEdit(item){
            let that = this;
            this.type = 'edit';
            this.form = item;
            if(item.position=='供电服务员工'){
                this.staff_type='special'
            }else {
                this.staff_type='others'
            }
            this.is_hide_list = true;
            setTimeout(function(){
                that.is_show_add = true;
            },500)
        }
    }
}
</script>

<style scoped>
    .basic-right {
        width: 15rem;
        height: 100%;
        
    }
    .right {
        width: 100%;
        height: 100%;
        border: .1rem solid rgba(21,87,90,.6);
        background:rgba(21,87,90,.4);
        font-size: .3rem;
        padding: .4rem;
        position: relative;
    }
    .tit {
        font-size: .42rem;
        text-align: center;
        font-weight: bold;
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
    .btn {
        margin-top: .4rem;
    }
    ul li{
        display: flex;
        justify-content: space-between;
    }
    ul li div {
        text-align: center;
    }
    ul li div:nth-child(1) {
        width: 15%;
    }
    ul li div:nth-child(2) {
        width: 20%;
    }
    ul li div:nth-child(3) {
        width: 25%;
    }
    ul li div:nth-child(4) {
        width: 20%;
    }
    ul li div:nth-child(5) {
        width: 10%;
        color: #F5B83B;
        font-size: .26rem;
    }
    ul li div:nth-child(6) {
        width: 10%;
        color: #F5B83B;
        font-size: .26rem;
    }
    .list {
        margin-top: .4rem;
    }
    .data-header {
        background: #28C083;
        color: #0A322F;
        height: 1.2rem;
        line-height: 1.2rem;
    }
    .data-li {
        color: #fff;
        height: 1.2rem;
        line-height: 1.2rem;
    }
    .data-li:nth-child(2n) {
        background: #0A3222;
    }
    .data-li:nth-child(2n-1) {
        background: #005130;
    }
    .img-box {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .header-img {
        width: .78rem;
        height: 1.04rem;
        line-height: 1.04rem;
        display: block;
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
    .form {
        margin-top: 2rem;
    }
    .item1 {
        display: flex;
        height: .9rem;
        padding:.1rem 0;
        align-items: center;
        margin-top: 1rem;
    }
    .header {
        display: flex;
        align-items: center;
    }
    .header .value {
        display: flex;
        align-items: center;
    }
    .item1 .name, .header .name {
        width: 15%;
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
    .btns1 {
        text-align: center;
        margin-top: 2rem;
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
    .icon {
        border: .02rem dashed #005130;
        width: 1.4rem;
        height: 1.4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .icon img {
        width: 100%;
        height: 100%;
        display: block;
    }
    /* .upload /deep/ .el-upload--picture-card {
        width: 2rem;
        height: 2rem;
        line-height: 2rem;
        background-color: inherit;
        border: .02rem dashed  #005130;
    }
    .upload /deep/ .el-upload--picture-card i {
        color: #28c0b4;
        font-size: .4rem;
    } */
    .pos .value {
        border:0;
        
    }
    .pos /deep/ .el-input__inner {
        background:inherit;
        font-size:.3rem;
        border: 1px solid #005130;
        color: #fff;
    }
    .pos /deep/ input {
        height:.7rem;
        line-height:.7rem;
    }
    .pos /deep/ .el-input__icon {
        line-height:.7rem;
    }
    .pos /deep/ .el-select-dropdown__item {
        font-size: .3rem;
    }
    .pos /deep/ input::-webkit-input-placeholder {
        color: #fff;
        opacity: .5;
    }
    input::-webkit-input-placeholder {
        color: #fff;
        opacity: .5;
    }
    .icon .quxiao {
        position: absolute;
        top: -.2rem;
        right: -.2rem;
        width: .4rem;
        height: .4rem;
        cursor: pointer;
    }

</style>
