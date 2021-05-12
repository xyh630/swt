<template>
    <!-- 自定义弹框组件 两种数据形式 1、自定义内容，适用于表单  2、字符串内容 适用于文字内容的展示-->
    <div>
        <div class="popup-tit">
            {{obj.title}}
        </div>  
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    props:{
        obj:{//内容字段
            type:Object
        },
        pattern:{//样式参数 
            type:Object
        }
    }
}
</script>

<style>

</style>