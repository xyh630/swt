<template>
  <div id="app">
    <transition name="fade" >
      <router-view/>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="scss">
  @import "./utils/ryutils.scss";
  /* LED数字字体导入 */
  @font-face {
    font-family: NumFam;
    src: url(./font/numstyle.otf);  /* 待完善 */
  }
  * {
    box-sizing: border-box;
  }
  html,
  body{
    height: 100%;
  }
  html {
    min-height: 684px;
    min-width: 1279px;
    // background-color: #1b2b4d;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: auto;
    background-image: url('./assets/bg.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
  #app{
    position: relative;
    height: 100%;
  }
  /**
    日期样式
   */

  .vdatetime-input {
    display: block;
    height: 100%;
    width: 100%;
    padding-left: 5%;
    padding-top: 4px;
    padding-bottom: 4px;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.1);
    border: 1px solid #424242;
    color: #fff;
    outline: none;
    cursor: pointer;
  }
  .vdatetime-input:focus {
    border-color: #fff;
  }
  .ry-animate {
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -ms-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

/************************************************ vue-transition动画 ***************************************************/
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}
.slide-left-enter {
  transform: translateX(30%);
  opacity: 0;
}
.slide-left-leave-to {
  transform: translateX(-30%);
  opacity: 0;
}
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all .3s;
}
.slide-right-enter {
  transform: translateX(-30%);
  opacity: 0;
}
.slide-right-leave-to {
  transform: translateX(30%);
  opacity: 0;
}
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all .3s;
}


.select-enter {
  transform: translateY(-20%);
  opacity: 0;
}
.select-leave-to {
  opacity: 0;
}
.select-enter-active,
.select-leave-active {
  transition: all .5s;
}
.select-move {
  transition: transform 0.5s;
}



/**
  向下渐现
 */
.fade-down-enter,
.fade-down-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.fade-down-enter-active,
.fade-down-leave-active {
  transition: all 1s;
}

.fade-down-move {
  transition: transform 0.5s;
}

/**
 向左渐现
 */
.fade-right-enter,
.fade-right-leave-to {
  opacity: 0;
  transform: translateX(50%);
}

.fade-right-enter-active,
.fade-right-leave-active {
  transition: all 1s cubic-bezier(0.68,-0.4, 0.57, 1.46);
}

.fade-right-move {
  transition: transform 0.5s;
}
/**
 向右渐现
 */
.fade-left-enter,
.fade-left-leave-to {
  opacity: 0;
  transform: translateX(-50%);
}

.fade-left-enter-active,
.fade-left-leave-active {
  transition: all 1s cubic-bezier(0.68,-0.4, 0.57, 1.46);
}

.fade-left-move {
  transition: transform 0.5s;
}
/**:
反转 

*/
.fade-reverse-enter,.fade-reverse-leave-to {
  opacity: 0;
  transform: rotateY(180deg)
}
.fade-reverse-enter-active,.fade-reverse-leave-active {
  transition: all 1s cubic-bezier(0.68,-0.4, 0.57, 1.46);
}
/**
 放大并且透明
 */
.scale-enter,
.scale-leave-to {
  opacity: 0;
  transform: scale(3) translateY(-10%);
}
.scale-enter-active,
.scale-leave-active {
  transition: all .5s;
}

/**
  向上渐现
 */
.fade-bottom-enter,
.fade-bottom-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

.fade-bottom-enter-active,
.fade-bottom-leave-active {
  transition: all 1s cubic-bezier(0.68,-0.4, 0.57, 1.46);
}
.fade-bottom-move {
  transition: transform 0.5s;
}
</style>
