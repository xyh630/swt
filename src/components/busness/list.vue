<template>
    <div>
        <!-- 列表组件  -->
        <ul>
            <li>
                <div v-for="(item,index) in data_header" :key="index" :style="{width:item.width}">

                </div>
            </li>
            <li>
                <div></div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    props:{
        //是否分页
        is_page:{
            type:Boolean
        },
        //表头数据
        data_header:{
            type:Array,
            default:[
                {
                    name:'title1',
                    width:'20%'
                }
            ]
        },
        //列表数据
        data_list:{
            type:Array
        },
        //TODO: 组件样式控制

    },
    methods:{
        //计算每列宽度
        calculate:function(){
            //TODO 暂时没思路 后面再研究 暂时使用样式传入的方式
        } 
    }

}
</script>

<style>

</style>