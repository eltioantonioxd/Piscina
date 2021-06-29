import Vue from "vue";
import VueRouter from "vue-router";
import { auth } from "../firebase";

import Registro from "../views/Registro.vue";
import Dashboard from "../views/Dashboard.vue";
import Inicio from "../views/Inicio.vue";
import Acceso from "../views/Acceso.vue";
import { mapActions, mapGetters, mapState } from "vuex";

Vue.use(VueRouter);

const routes = [
  {
    path: "/registro",
    name: "Registro",
    component: Registro
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
    // () =>
    // import(/* webpackChunkName: "about" */ "../views/Dashboard.vue")
  },
  {
    path: "/",
    name: "Inicio",
    component: Inicio,
    meta: { requiresAuth: true }
  },
  {
    path: "/acceso",
    name: "Acceso",
    component: Acceso
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const usuario = auth.currentUser;
    // console.log(usuario);
    if (!usuario) {
      next({
        path: "/acceso"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
