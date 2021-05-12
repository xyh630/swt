<template>
    <!-- 所务通左侧员工列表 -->
    <div>

    </div>
</template>

<script>
export default {
    // 自请求组件
    data(){
        return {
            staffList:[],//定义员工列表变量
        }
    },
    mounted:function(){
        this.getStaffList();
    },
    methods:{
        //获取员工数据
        getStaffList:function(){
            let that = this;
            ryAjax('获取员工列表', config.inter.getStaffList, {
                data: {
                    
                },
                successfn(resp) {
                    that.staffList = resp.data;
                }
            });
        }
    }
}
</script>

<style>
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

</style>