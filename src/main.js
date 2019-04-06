import '@fortawesome/fontawesome-free/css/all.css'
import Vue from "vue";
import Vuetify from "vuetify";
import './plugins/vuetify'
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  iconfont: 'mdi' || 'fa' || 'fa4',
  theme: {
    primary: '#0D47A1',
    accent: '#1E88E5',
    secondary: '#BBDEFB',
    info: '#03A9F4',
    warning: '#FFB300',
    error: '#F44336',
    success: '#00C853',
    background: '#E3F2FD',
  },
});

new Vue({
  render: h => h(App)
}).$mount("#app");
