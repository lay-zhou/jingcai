import Vue from 'vue';
import App from './App.vue';
import router from './router';
import echarts from 'echarts';
import VueScroller from 'vue-scroller'

import './assets/css/border.css';
import './assets/css/reset.css';
import './assets/css/iconfont.css';

Vue.use(VueScroller)
Vue.prototype.$echarts = echarts //引入组件
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
