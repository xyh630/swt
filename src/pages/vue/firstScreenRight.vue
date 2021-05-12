<template>
  <div class="first-screen-right">
      <h1>right</h1>
  </div>
</template>

<script>
  
  import {isEmpty, compare} from "../../utils/ryutils";

  export default {
    data(){
        return {}
    },
    components:{
        
    }
  }
</script>

<style scoped lang="scss">
  h1 {
      color: #fff
  }
  .first-screen-right {
    position: absolute;
    top: 0;
    right: 0;
    width: 30%;
    height: 100%;
    text-align: center;
  }
</style>
