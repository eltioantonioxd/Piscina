import Dashboard from "@/pages/Dashboard.vue";
import Registro from "@/pages/Registro.vue";
import Acceso from "@/pages/Acceso.vue";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/registro",
    name: "Registro",
    component: Registro
  },
  {
    path: "/acceso",
    name: "Acceso",
    component: Acceso
  }
];

export default routes;
