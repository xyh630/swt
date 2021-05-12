<template>
  <div class="first-screen-center">
      <h1>center</h1>
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
  .first-screen-center {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 40%;
    height: 100%;
    text-align: center;
  }
</style>
