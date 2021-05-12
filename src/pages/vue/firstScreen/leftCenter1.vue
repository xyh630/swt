<template>
  <div class="left-center">
    <div class="tit">今日业扩
      <span>更新于{{business_time}}</span>
    </div>
    <div class="content">
      <div class="item" style="width:50%;display: inline-block;" v-for="(item,index) in business" :key="index" @click="showLeft(index)">
        <div class="pic" style="display: inline-block;">
          <img src="../../../assets/img/zuo.png" alt="">
        </div>
        <div class="text" style="text-align: center;display: inline-block;"><span class="text-l">{{item.title}}</span><span class="text-r">{{item.value}}</span>个</div>
        <div class="pic" style="display: inline-block;">
          <img src="../../../assets/img/you.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

//   import {isEmpty, compare} from "../../utils/ryutils";

export default {
  data() {
    return {
    }
  },
  props: [
    'business',
    'business_time'
  ],
  components: {

  },
  methods: {
    showLeft: function (index) {
      this.$emit('showLeft', { key: 'business', index: index })
    }
  }
}
</script>

<style scoped lang="scss">
.tit {
  font-size: 0.4rem;
  color: #fff;
}
.tit span {
  color: #0abda7;
  font-size: 0.24rem;
  margin-left: 0.2rem;
}
.left-center {
  height: 3.8rem;
  padding-top: 0.45rem;
  box-sizing: border-box;
  border-bottom: 0.1rem solid rgba(21, 87, 90, 0.6);
}
.content {
  margin-top: 0.25rem;
}
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.2rem;
  cursor: pointer;
  transition: all 0.3s;
}
.item:hover {
  //  background:  rgba(255, 255, 255, .1);
  transform: scale(1.1);
}
.item .text {
  width: 4rem;
  height: 0.85rem;
  font-size: 0.3rem;
  background-image: url("../../../assets/img/kuang.png");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  line-height: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item .text .text-l {
  width: 40%;
  text-align: right;
}
.item .text .text-r {
  font-size: 0.5rem;
  margin: 0 0.3rem;
  color: #4d99fc;
}
.item .pic {
  width: 1.4rem;
  height: 0.34rem;
}
.item .pic img {
  width: 100%;
  height: 100%;
}
</style>
