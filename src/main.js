import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';
import VueAxios from 'vue-axios';
import './assets/css/index.scss';
import API from './api/api.js';
Vue.use(VueAxios,axios);
// Vue.mixin(API);
Vue.prototype.API = API;
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");


