// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//全局css
require('../static/css/reset.css');

import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'



import axios from 'axios'
Vue.prototype.$http = axios;


Vue.use(MintUi);


Vue.filter('normalData', function (time) {
  let oDate = new Date(parseInt(time) * 1000);
  return oDate.getFullYear() + '-' + (oDate.getMonth() + 1) + '-' + oDate.getDate() + ' ' + oDate.getHours() + ':' + oDate.getMinutes() + ':' + oDate.getSeconds();
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
