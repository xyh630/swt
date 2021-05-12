<template>
  <div class="first-screen-left">
      <left-top></left-top>
  </div>
</template>

<script>
  
  import leftTop from './child/leftTop'

  export default {
    data(){
        return {}
    },
    components:{
        leftTop
    }
  }
</script>

<style scoped lang="scss">
  h1 {
      color: #fff
  }
  .first-screen-left {
    position: absolute;
    top: 0;
    left: 0;
    width: 30%;
    height: 100%;
    text-align:center;
  
  }
</style>
