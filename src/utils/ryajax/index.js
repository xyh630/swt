const config = require('./../../config')
const $ = require('jquery')
import yer from 'yer-y'

/**
 * jquery - ajax 再封装
 * @param url_desc
 * @param url
 * @param optionse cxzfe  cs c c c  c c cc c c c  x cc c c c c ccccc cc c cx c c c c c c c c c cc  c c c c c c c c c c  c cfccccfcf cc f c cx ccc ccccffc c  csxxcc cf ccc ffc cfxc c ccfff ccc cff cfccffffcc cfccfcc cc cffffcc cc cc c cfcc ccccc cfcc c c c c c
 * @return {ryAjax.init}
 */
const ryAjax = function (url_desc, url, options) {
  return new ryAjax.prototype.init(url_desc, url, options);
}

ryAjax.prototype = {
  constructor: ryAjax,
  init(url_desc, url, options){
    
    if(url==''||url==null||typeof url === 'undefined'||typeof url !== 'string'){
      console.error('the url is not error!');
      return;
    }

    if(url_desc==''|| url_desc==null || typeof url_desc === 'undefined'){
      url_desc = '接口';
    }

    this.url_desc = url_desc;
    this.url = url;
    // 请求接口返回数据格式配置
    this.ajaxConfig = config.ajax;

    // 默认配置
    this.options = {
      data:{},
      successfn: undefined,
      errorfn: undefined,
      completefn: undefined,
      async: true,
      type: 'GET',
      dataType: 'json',
      cache: false,
     
    };


    // 传入配置继承默认配置
    if (options && typeof options === 'object') {
      for (let key in options) {
        if (this.options.hasOwnProperty(key) && this.options[key] !== null) {
          this.options[key] = options[key];
        }
      }
    }

    // 默认调用方法
    this.ajax();
  },
  /**
   * ajax请求数据
   */
  ajax(){
    let _self = this;
    $.ajax({
      type: _self.options.type,
      async: _self.options.async,
      data: _self.options.data,
      url: _self.url,
      cache: _self.options.cache,
      dataType: _self.options.dataType,
      xhrFields:{
        withCredentials:true
      },
      success(resp){
        // 转换为JSON格式
        if(typeof resp === "string"){
          resp = JSON.parse(resp);
        }
        // // 请求状态 [ 失败 ]  == 》 执行方法
        // if(resp[_self.ajaxConfig.STATE.NAME] !== _self.ajaxConfig.STATE.SUCVAL){
        //   yer('[ ' + _self.url_desc + ' ] 接口 ' + resp[_self.ajaxConfig.MESSAGE], 5);
        //   return;
        // }
        // // 请求状态 [ 成功 ]  == 》 执行方法
        // if(_self.options.successfn == undefined){
        //   console.error('[ ' + _self.url_desc + ' ] 接口 未定义请求成功执行方法~');
        //   return;
        // }
        
        _self.options.successfn(resp);
      },
      complete(XMLHttpRequest){
        let status = XMLHttpRequest.status;
        switch (status) {
          case 404: yer("[ " + _self.url_desc + " ] 接口 404~", 0);break;
          case 500: _self.options.errorfn!=undefined?_self.options.errorfn():yer("[ " + _self.url_desc + " ] 接口 系统异常~", 0);break;
          case 504: yer("[ " + _self.url_desc + " ] 接口 请求超时~", 0);break;
          default: _self.options.completefn!=undefined?_self.options.completefn(XMLHttpRequest):'';
        }
      }
    });
  }
};

ryAjax.prototype.init.prototype = ryAjax.prototype;

export default ryAjax;
