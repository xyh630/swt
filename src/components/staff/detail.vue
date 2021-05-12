<template>
    <div class="page-detail">
        <div class="top">
            <div class="left">
                <border-color style="width:100%;height:6.33rem;margin-top:.44rem;">
                    <div class="content">
                        <div class="item">
                            <div class="pic">
                                <img src="../../assets/img/icon-1.png" alt="">
                            </div>
                            <div class="text">
                                {{staff_detail.gsl.type}}
                            </div>
                            <div class="line">
                                <span></span>
                            </div>
                            <div class="value">
                                {{staff_detail.gsl.value}}
                            </div>
                        </div>
                        <div class="item">
                            <div class="pic">
                                <img src="../../assets/img/icon-2.png" alt="">
                            </div>
                            <div class="text">
                                {{staff_detail.fsl.type}}
                            </div>
                            <div class="line">
                                <span></span>
                            </div>
                            <div class="value">
                                {{staff_detail.fsl.value}}
                            </div>
                        </div>
                        <div class="item">
                            <div class="pic">
                                <img src="../../assets/img/icon-3.png" alt="">
                            </div>
                            <div class="text">
                                {{staff_detail.ctl.type}}
                            </div>
                            <div class="line">
                                <span></span>
                            </div>
                            <div class="value">
                                {{staff_detail.ctl.value}}
                            </div>
                        </div>
                        <div class="item">
                            <div class="pic">
                                <img src="../../assets/img/icon-4.png" alt="">
                            </div>
                            <div class="text">
                                {{staff_detail.zhs.type}}
                            </div>
                            <div class="line">
                                <span></span>
                            </div>
                            <div class="value">
                                {{staff_detail.zhs.value}}
                            </div>
                        </div>
                        <div class="item">
                            <div class="pic">
                                <img src="../../assets/img/icon-5.png" alt="">
                            </div>
                            <div class="text" style="width:30%">
                                {{staff_detail.wcths.type}}
                            </div>
                            <div class="line" style="width:50%">
                                <span></span>
                            </div>
                            <div class="value">
                                {{staff_detail.wcths.value}}
                            </div>
                        </div>
                    </div>
                    
                </border-color>
            </div>
            <div class="right">
                <div class="tit">未抄通用户</div>
                <dv-scroll-board v-if="config1.data.length!=0"  :config="config1" style="width:100%;height:7rem;font-size:.3rem"/>
            </div>
        </div>
        <div class="bottom">
            <div class="left">
                <div class="tit">所属辖区</div>
                <dv-scroll-board v-if="config2.data.length!=0"  :config="config2" style="width:100%;height:7rem;font-size:.3rem"/>
            </div>
            <div class="center">
                <div class="tit">高损台区</div>
                <dv-scroll-board v-if="config3.data.length!=0"  :config="config3" style="width:100%;height:7rem;font-size:.3rem"/>
            </div>
            <div class="right">
                <div class="tit">负损台区</div>
                <dv-scroll-board v-if="config4.data.length!=0"  :config="config4" style="width:100%;height:7rem;font-size:.3rem"/>
            </div>
        </div>
    </div>
</template>

<script>
import borderColor from '@/components/tools/borderColor'
import ryAjax from '../../utils/ryajax'
import config from '../../config'
export default {
    data(){
        return {
            staff_detail:{},
            config1:{
                header: [
                    '<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;color:#fff">#<span>', 
                    '<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;color:#0A322F">用户编号<span>',
                    '<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;color:#0A322F">用户名称<span>', 
                    '<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;color:#0A322F">台区名称<span>',
                    '<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;color:#0A322F">用电地址<span>',
                    
                ],
                data: [
                
                ],
                
                align: ['center'],
                headerHeight:fontSize(.94),
                headerBGC:'#28C0B4',
                oddRowBGC:'#00514A',
                evenRowBGC:'#0A322F',
                rowNum:6
            },
            config2:{
                header: [
                    '<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;color:#fff">#<span>', 
                    '<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;color:#0A322F">台区编号<span>', 
                    '<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;color:#0A322F">台区名称<span>',
                    
                ],
                data: [
                
                ],
                
                // columnWidth: [50],
                align: ['center'],
                headerHeight:fontSize(.94),
                headerBGC:'#28C0B4',
                oddRowBGC:'#00514A',
                evenRowBGC:'#0A322F',
                rowNum:6
            },
            config3:{
                header: [
                    '<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;color:#fff">#<span>', 
                    '<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;color:#0A322F">台区编号<span>', 
                    '<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;color:#0A322F">台区名称<span>',
                    
                ],
                data: [
                
                ],
                
                // columnWidth: [50],
                align: ['center'],
                headerHeight:fontSize(.94),
                headerBGC:'#28C0B4',
                oddRowBGC:'#00514A',
                evenRowBGC:'#0A322F',
                rowNum:6
            },
            config4:{
                header: [
                    '<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;color:#fff">#<span>', 
                    '<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;color:#0A322F">台区编号<span>', 
                    '<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;color:#0A322F">台区名称<span>',
                    
                ],
                data: [
                
                ],
                
                // columnWidth: [50],
                align: ['center'],
                headerHeight:fontSize(.94),
                headerBGC:'#28C0B4',
                oddRowBGC:'#00514A',
                evenRowBGC:'#0A322F',
                rowNum:6
            },
        }
    },
    props:{
        staff_id:{
            type:String
        }
    },
    components:{
        borderColor
    },
    mounted:function(){
        // if(this.staff_id){
            this.getStaffDetail();
        // }
    },
    methods:{
        // 获取员工详情数据
        getStaffDetail:function(){
            let that = this;
            ryAjax('获取员工详情', config.inter.getStaffDetail, {
                data: {
                    'jj_id':1
                },
                successfn(resp) {
                    that.staff_detail = resp;
                   
                    that.handleData();
                }
            });
        },
        handleData:function () {
        let that = this;
      
        that.staff_detail.wcths_list.value.map((item,index)=> {
           
            let arr = []
            arr.push('<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;padding:.04rem .05rem;background:#28C0B4;border-radius:5px;overflow: hidden">'+(index+1)+'<span>')
            arr.push('<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;">'+item.yhbh+'<span>')
            arr.push('<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;">'+item.yhmc+'<span>')
            arr.push('<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;">'+item.tqmc+'<span>')
            arr.push('<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;">'+item.yddz+'<span>')
           
            that.config1.data.push(arr)
        })
        that.staff_detail.fstq.value.map((item,index)=> {
            let arr = [];
            arr.push('<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;padding:.04rem .05rem;background:#28C0B4;border-radius:5px;overflow: hidden">'+(index+1)+'<span>')
            arr.push('<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;">'+item.tqbh+'<span>')
            arr.push('<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;">'+item.tqmc+'<span>')
           
            that.config2.data.push(arr)
        })
        that.staff_detail.gstq.value.map((item,index)=> {
            let arr = []
            arr.push('<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;padding:.04rem .05rem;background:#28C0B4;border-radius:5px;overflow: hidden">'+(index+1)+'<span>')
            arr.push('<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;">'+item.tqbh+'<span>')
            arr.push('<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;">'+item.tqmc+'<span>')
            
            that.config3.data.push(arr)
        })
        that.staff_detail.sstq.value.map((item,index)=> {
            let arr = []
            arr.push('<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;padding:.04rem .05rem;background:#28C0B4;border-radius:5px;overflow: hidden">'+(index+1)+'<span>')
            arr.push('<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;">'+item.tqbh+'<span>')
            arr.push('<span style="padding:.3rem 0;font-size:.3rem;dispay:inline-block;">'+item.tqmc+'<span>')
            
            that.config4.data.push(arr)
        })  
    },
    }
}
</script>

<style scoped>

    .page-detail {
        width: 100%;
        height: 100%;
        border: .1rem solid rgba(21,87,90,.6);
        background:rgba(21,87,90,.4);
        padding:0 .4rem .2rem;
    }
    .top {
        width: 100%;
        height: 50%;
        display: flex;
        justify-content:space-between;
        padding-top: .4rem
    }
    .top .left {
        width: 35%;
        height: 100%;
    }
    .top .right {
        width: 60%;
        height: 100%;
    }
    .bottom {
        width: 100%;
        height: 50%;
        display: flex;
        padding-top: .4rem;
        justify-content:space-between;
    }
    .bottom > div {
        width: 30%;
    }
    .item {
        display: flex;
        align-items: center;
        font-size: .42rem;
        width: 100%;
        justify-content:flex-start;
        padding: .2rem 0;
    }
    .pic {
        width: .6rem;
        height: .6rem;
        text-align: center;
    }
    .pic img {
        width: .6rem;
        height: .6rem;
        display: inline-block;
    }
    .line {
        width: 60%;
        position: relative;
    }
    .line span {
        display: block;
    }
    .line span::after {
        content: '';
        width: 100%;
        height: .1rem;
        /* background: #0ABDA7; */
        border-top: 1px dashed #0ABDA7;
        position: absolute;
    }
    .text {
        width: 20%;
        text-align: left;
        padding-left: .3rem;
    }
    .value {
        width: 15%;
        text-align: center;
    }
    .content {
        padding: .5rem .6rem;
        margin-top: .2rem;
    }
    .tit {
        margin-bottom: .33rem;
        font-size: .4rem;
        text-align: center;
    }
    .dv-scroll-board /deep/ .header .header-item {
       
        text-align: center;
    }
    .dv-scroll-board /deep/ .rows .ceil  {
        text-align: center;
    }
   

</style>