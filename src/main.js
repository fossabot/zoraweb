import Vue from "vue";
import App from "./App.vue";
import router from './router'

require("./assets/css/skeleton.css");
require("./assets/css/normalize.css");
require("./assets/css/main.css");

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");