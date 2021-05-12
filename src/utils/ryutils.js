"use strict"
/************************************************  时间工具   *********************************************************/

/** * 对Date的扩展，将 Date 转化为指定格式的String * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q)
 可以用 1-2 个占位符 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) * eg: * (new
 Date()).pattern("yyyy-MM-dd hh:mm:ss.S")==> 2006-07-02 08:09:04.423
 * (new Date()).pattern("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04
 * (new Date()).pattern("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04
 * (new Date()).pattern("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04
 * (new Date()).pattern("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18
 */
Date.prototype.pattern=function(fmt) {
  let o = {
    "M+" : this.getMonth()+1, //月份
    "d+" : this.getDate(), //日
    "h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时
    "H+" : this.getHours(), //小时
    "m+" : this.getMinutes(), //分
    "s+" : this.getSeconds(), //秒
    "q+" : Math.floor((this.getMonth()+3)/3), //季度
    "S" : this.getMilliseconds() //毫秒
  };
  let week = {
    "0" : "天",
    "1" : "一",
    "2" : "二",
    "3" : "三",
    "4" : "四",
    "5" : "五",
    "6" : "六"
  };
  if(/(y+)/.test(fmt)){
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
  }
  if(/(E+)/.test(fmt)){
    fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "星期" : "周") : "")+week[this.getDay()+""]);
  }
  for(let k in o){
    if(new RegExp("("+ k +")").test(fmt)){
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    }
  }
  return fmt;
}

/**
 * 时间截转换为格式化时间
 * @param time		时间截
 * @param fmt		格式化字符
 */
function coverToryDate(time, fmt) {
  return new Date(time).pattern(fmt);
}

/**
 * 当前日期减去多少天
 * @param date 		日期对象
 * @param days 		减去的天数
 * @param fmt 		输出格式
 */
function reduceDays(date, days, fmt){
    return new Date(date.setDate(date.getDate() - days)).pattern(fmt);
}


/**
 * 秒  转换为  00+:00:00格式
 * @param seconds   秒
 */
function timeFormatter(seconds) {
  // 时
  let h = parseInt(seconds/3600);
  h = h < 10?"0"+h:h;

  // 分
  let m = parseInt((seconds-Number(h)*3600)/60);
  m = m < 10?"0"+m:m;

  // 秒
  let s = parseInt(seconds%60);
  s = s < 10?"0"+s:s;

  return h + ":" + m + ":" + s;
}

/************************************************  数组工具   *********************************************************/

/**
 * 数组 取最大值
 */
Array.prototype.max = function() {
  let max = this[0];
  this.forEach(function(v, i){
    if(v > max){
      max = v;
    }
  });
  return max;
}

/**
 * 数组 取最小值
 */
Array.prototype.min = function() {
  let min = this[0];
  this.forEach(function(v, i){
    if(v < min){
      min = v;
    }
  });
  return min;
}

/**
 * 数组 排除重复项
 */
Array.prototype.rmRepeat = function(){
  let res = [];
  let json = {};
  this.forEach(function(v, i){
    if(!json[v]){
      res.push(v);
      json[v] = 1;
    }
  });
  return res;
}

/**
 * 数组 判断是否包含某个元素
 * @param str   需要判断的元素
 */
Array.prototype.containIt = function (str) {
  let result = false;
  this.forEach(function(v, i){
    if(v == str){
      result = true;
      return;
    }
  });
  return result;
}


/**
 * 数组 对象排序
 * @param prop   被排序的属性
 * ps：
 * 用法: Array.sort(compare([属性名]));
 *
 */
let compare = function (prop) {
  return function (obj1, obj2) {
    let val1 = obj1[prop];
    let val2 = obj2[prop];
    if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
      val1 = Number(val1);
      val2 = Number(val2);
    }
    if (val1 < val2) {
      return -1;
    } else if (val1 > val2) {
      return 1;
    } else {
      return 0;
    }
  }
}

/************************************************  字符串工具   *********************************************************/
/**
 * 数字格式化   每三位一个逗号
 * @num 数字
 * @poNum 小数点位数
 */
function numFmtCmapo (num, point) {
  point = (point==null || point=="" || typeof(point)=="undefined")?0:point;
  return (num.toFixed(point) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
}

/**
 * 是否为空判断
 * @params str
 * return boolean
 */
function isEmpty(str) {
  return (str == "" || typeof str === "undefined" || str == null)?true:false;
}

/**
 * UUID
 * @param len   UUID长度
 */
let UUID = function(len){
  return new UUID.prototype.init(len);
}
UUID.prototype = {
  constructor: UUID,
  /**
   * 字符
   */
  chars: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(''),
  /**
   * 初始化
   */
  init: function (len) {
    this.len = len || 32;
    this.uuid = [];
  },
  /**
   * 生成UUID
   */
  getUUID: function () {
    let _self = this;
    for (let i = 0; i < _self.len; i++) _self.uuid.push(_self.chars[0 | parseInt(Math.random()*32)]);
    return _self.uuid.join("");
  }
};
UUID.prototype.init.prototype = UUID.prototype;

/**
 * 数字 转 中文
 */
let Number_Cover = function (number) {
  return new Number_Cover.prototype.init(number);
}
Number_Cover.prototype = {
  constructor: Number_Cover,
  /**
   * 相关参数
   */
  ary0:["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
  ary1:["", "十", "百", "千"],
  ary2:["", "万", "亿", "兆"],
  /**
   * 初始化
   */
  init: function (number) {
    this.number = (((number + "").split("")).reverse()).join("");
  },
  /**
   * 转换
   */
  cover_through: function () {
    let _self = this;
    if(isNaN(Number(_self.number))){
      console.error( _self.number + "不是一个数字");
      return;
    }
    let zero = ""
    let newary = ""
    let i4 = -1
    for (let i = 0; i < _self.number.length; i++) {
      if (i % 4 == 0) { //首先判断万级单位，每隔四个字符就让万级单位数组索引号递增
        i4++;
        newary = _self.ary2[i4] + newary; //将万级单位存入该字符的读法中去，它肯定是放在当前字符读法的末尾，所以首先将它叠加入$r中，
        zero = ""; //在万级单位位置的“0”肯定是不用的读的，所以设置零的读法为空

      }
      //关于0的处理与判断。
      if (_self.number[i] == '0') { //如果读出的字符是“0”，执行如下判断这个“0”是否读作“零”
        switch (i % 4) {
          case 0:
            break;
          //如果位置索引能被4整除，表示它所处位置是万级单位位置，这个位置的0的读法在前面就已经设置好了，所以这里直接跳过
          case 1:
          case 2:
          case 3:
            if (_self.number[i - 1] != '0') {
              zero = "零"
            }
            ; //如果不被4整除，那么都执行这段判断代码：如果它的下一位数字（针对当前字符串来说是上一个字符，因为之前执行了反转）也是0，那么跳过，否则读作“零”
            break;

        }

        newary = zero + newary;
        zero = '';
      }
      else { //如果不是“0”
        newary = _self.ary0[parseInt(_self.number[i])] + _self.ary1[i % 4] + newary; //就将该当字符转换成数值型,并作为数组ary0的索引号,以得到与之对应的中文读法，其后再跟上它的的一级单位（空、十、百还是千）最后再加上前面已存入的读法内容。
      }

    }
    if (newary.indexOf("零") == 0) {
      newary = newary.substr(1)
    }//处理前面的0
    return newary;
  }
};
Number_Cover.prototype.init.prototype = Number_Cover.prototype;


/************************************************  cookie工具   ********************************************************/
//设置cookie
function setCookie(c_name,value,expiredays){
  let exdate=new Date();
  exdate.setDate(exdate.getDate()+expiredays);
  document.cookie=c_name+ "=" + value + ((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
}

//取回cookie
function getCookie(c_name){
  if (document.cookie.length > 0){
    let c_start = document.cookie.indexOf(c_name + "=")
    if (c_start != -1){
      c_start = c_start + c_name.length + 1 ;
      let c_end = document.cookie.indexOf(";", c_start)
      if (c_end == -1) c_end=document.cookie.length;
      return decodeURI(document.cookie.substring(c_start, c_end))
    }
  }
  return ""
}


/*********************************************  localStorage工具   ****************************************************/

/**
 * localstorage 存储对象
 * @param key
 * @param value
 * @returns
 */
function lsSet(key, value){
  if(typeof Storage !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    alert("浏览器不支持web存储,请使用其它浏览器浏览！！！");
  }
}

/**
 * localstorage 取数据
 * @param key		键
 * @returns
 */
function lsGet(key){
  if(typeof Storage !== "undefined") {
    return JSON.parse(localStorage.getItem(key));
  }else {
    alert("浏览器不支持web存储,请使用其它浏览器浏览！！！");
  }
}

/**
 * localstorage 删除key对应数据
 * @params key
 * @returns
 */
function lsRemove(key) {
  if(typeof Storage !== "undefined") {
    localStorage.removeItem(key);
  } else {
    alert("浏览器不支持web存储,请使用其它浏览器浏览！！！");
  }

}
export {
  coverToryDate,
  reduceDays,
  timeFormatter,
  compare,
  numFmtCmapo,
  isEmpty,
  UUID,
  Number_Cover,
  setCookie,
  getCookie,
  lsSet,
  lsGet,
  lsRemove
};
