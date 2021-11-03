import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueParticles from "vue-particles";
import "./registerServiceWorker";
import './registerServiceWorker'

const instance = axios.create({});

Vue.use(VueAxios, instance);
Vue.use(VueParticles);
Vue.config.productionTip = false;
Vue.config.silent = true;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
