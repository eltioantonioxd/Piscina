import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import MaterialDashboard from "./material-dashboard";

import Chartist from "chartist";
Vue.prototype.$Chartist = Chartist;

Vue.config.productionTip = false;
Vue.use(MaterialDashboard);

import { auth } from "./firebase";

auth.onAuthStateChanged(user => {
  if (user) {
    // console.log(user);
    const detectoUsuario = {
      email: user.email,
      uid: user.uid
    };
    store.dispatch("detectarUsuario", detectoUsuario);
  } else {
    // console.log(user);
    store.dispatch("detectarUsuario", user);
  }
  new Vue({
    router,
    store,
    data: {
      Chartist: Chartist
    },
    render: h => h(App)
  }).$mount("#app");
});
