import Vue from "vue"
export default function () {
  Vue.filter('upperCase',function(value){
    return (value==undefined||value==null||value=="")?"-":value.toUpperCase();
  });
  Vue.filter('isEmptyText', function(value){
    return (value==undefined||value==null||value=="")?"--":value;
  });
}
