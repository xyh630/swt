// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueFilter from './vueFilter'
import dataV from '@jiaminghi/data-view'
import echarts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css';
import { upload, Form,FormItem,Input,Button,tooltip,Select,Option } from 'element-ui';

Vue.prototype.$echarts = echarts;
Vue.use(upload);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Button);
Vue.use(tooltip);
Vue.use(Select);
Vue.use(Option)
Vue.config.productionTip = false;
Vue.use(dataV)
require('echarts-wordcloud')
// 全局过滤器
vueFilter();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
