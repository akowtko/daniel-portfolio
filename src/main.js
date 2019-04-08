import "@fortawesome/fontawesome-free/css/all.css";
import "open-sans-fonts/open-sans.styl";

import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import moment from "moment";

import Vue from "vue";
import App from "./App.vue";

import "./stylus/main.styl";

Vue.prototype.moment = moment;
Vue.config.productionTip = false;

require("./stylus/main.styl");

Vue.use(Vuetify, {
  iconfont: "mdi" || "fa" || "fa4",
  theme: {
    primary: "#003142", //Want this to be dark blue instead
    accent: "#931F28",
    secondary: "#03BBC1",
    terciary: "#306b93",
    info: "#03A9F4",
    warning: "#FFB300",
    error: "#F44336",
    success: "#00C853",
    background: "#FFFFFF"
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
