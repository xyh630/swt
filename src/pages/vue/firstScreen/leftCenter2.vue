<template>
  <div class="left-center">
    <div class="tit">今日线损
      <span>更新于{{XSInfo_time}}</span>
    </div>
    <div class="content">
      <div class="jr">
        <div class="child-tit">
          中压线损{{XSInfo.zyxs_num}}
          <img class="child-download" src="../../../../static/img/excel.png" alt="" @click="downLoadZyxs()">
        </div>
        <div class="child-con">
          <div class="item" v-for="(item,index) in XSInfo.zyxs" :key="index" @click="showLeft('zyxs')">
            <div class="text">{{item.type}}</div>
            <div class="value">{{item.value}}</div>
          </div>
        </div>
      </div>
      <div class="tq">
        <div class="child-tit">
          台区线损{{XSInfo.tqxs_num}}
          <img class="child-download" src="../../../../static/img/excel.png" alt="" @click="downLoadTqxs()">
        </div>
        <div class="child-con">
          <div class="item" v-for="(item,index) in XSInfo.tqxs" :key="index" @click="showLeft(index)">
            <div class="text">{{item.type}}</div>
            <div class="value">{{item.value}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

//   import {isEmpty, compare} from "../../utils/ryutils";

import ryAjax from './../../../utils/ryajax'
import config from './../../../config'
export default {
  data() {
    return {
    }
  },
  props: [
    'XSInfo',
    'XSInfo_time'
  ],
  components: {
  },
  methods: {
    showLeft: function (index) {
      if (index == 'zyxs') {
        this.$emit('showLeft', { key: 'zyxs' })
      } else {
        this.$emit('showLeft', { key: 'tqxs', index: index })
      }

    },

    downLoadZyxs: function () {
      let url = config.inter.loadZyxsExcelAll
      //导出excel
      window.location.href = url
    },

    downLoadTqxs: function () {
      let url = config.inter.loadTqxsExcelAll
      //导出excel
      window.location.href = url
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
  height: 3.4rem;
  padding-top: 0.45rem;
  box-sizing: border-box;
  border-bottom: 0.1rem solid rgba(21, 87, 90, 0.6);
}
.content {
  display: flex;
  justify-content: space-between;
  margin-top: 0.25rem;
}
.content .jr {
  padding-top: 0.1rem;
}
.content .tq {
  padding-top: 0.1rem;
}
.content .jr .child-tit {
  height: 20px;
  font-size: 0.32rem;
  color: #fedb93;
  text-align: center;
}
.content .jr .child-con {
  display: flex;
  justify-content: center;
  padding-top: 0.1rem;
  margin-top: 0.1rem;
  background-image: url("../../../assets/img/kuang-big.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.content .tq .child-tit {
  height: 20px;
  font-size: 0.32rem;
  color: #fedb93;
  text-align: center;
  padding-right: 0.1rem;
}
.child-download {
  height: 20px;
  width: 20px;
  float: right;
}
.child-download:hover {
  cursor: pointer;
  transform: scale(1.2);
}
.content .tq .child-con {
  display: flex;
  justify-content: center;
  padding-top: 0.1rem;
}
.item {
  cursor: pointer;
  transition: all 0.3s;
  width: 2rem;
  height: 1.18rem;
  font-size: 0.3rem;
  position: relative;
  text-align: center;
  margin: 0 0.1rem;
}
.tq .item {
  background-image: url("../../../assets/img/xs-kuang.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.item:hover {
  transform: scale(1.1);
}
.item .text {
  font-size: 0.26rem;
  width: 100%;
  color: #fff;
  position: absolute;
  top: 0.2rem;
  left: 50%;
  transform: translateX(-50%);
}
.item .value {
  font-size: 0.32rem;
  color: #4ec66c;
  position: absolute;
  bottom: 0.2rem;
  left: 50%;
  transform: translateX(-50%);
}
</style>
