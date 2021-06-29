<template>
  <div>
    <div class="d-flex">
      <div id="sidebar-container" class="bg-dark">
        <div class="logo">
          <h4 class="text-light font-weight-bold text-center">PoolD</h4>
        </div>
        <div class="menu">
          <router-link to="/" class="d-block py-3 text-light ms-2"
          id="nav"><i class="icon ion-md-apps me-2 lead"></i>Tablero</router-link>

          <div  class="d-block py-3 text-light ms-2"
            ><i class="icon ion-md-person me-2 lead"></i>{{ usuario.email }}</div
          >
          <a  href=""   @click="cerrarSesion"
                      v-if="existeUsuario"
                      class="d-block py-3 text-light ms-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-down me-2" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
  <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg>Cerrar Sesión   
            </a>
        </div>
      </div>
      <div class="container-fluid mt-5">
       
        <div id="content">
          
          <dashboard />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import Dashboard from "./Dashboard.vue";
export default {
  components: { Dashboard },
  name: "Inicio",
  computed: {
    ...mapState(["usuario"]),
    ...mapGetters(["existeUsuario"])
  },
  methods: {
    ...mapActions(["cerrarSesion"])
  }
};
</script>

<style>
:root {
  --primary: #111b54;
  --ligth: #fff;
  --grey: #efefef;
}
.h1 {
  color: #04c56f;
  padding-bottom: 0;
  padding-top: 16px;
  font-family: "Google Sans", "Noto Sans Myanmar UI", arial, sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.3333;
  margin-bottom: 0;
  margin-top: 0;
}
body {
  overflow: hidden;
  font-family: "Muli";
  font-weight: 300;
  color: var(--primary);
}
.bg-primary {
  background-color: var(--primary) !important;
}
.btn {
  border: 0;
}
.btn-primary {
  background-color: var(--primary) !important;
}
.btn-primary:hover {
  background-color: var(--primary) !important;
}
#sidebar-container {
  min-height: 100vh;
}
#sidebar-container .logo {
  padding: 0.875rem 1.25rem;
}
#sidebar-container .menu {
  width: 18rem;
}
a {
  text-decoration: none;
}
#content {
  overflow-y: auto;
  height: 100vh;
  padding-bottom: 5rem;
}
/* Sección experiencias */
.card {
  transition-duration: 0.6s;
  clip-path: polygon(
    50% 0,
    100% 0,
    100% 50%,
    100% 100%,
    50% 100%,
    0% 100%,
    0 50%,
    0 0
  );
}
.card-effect:hover .card {
  clip-path: polygon(
    50% 0,
    50% 0,
    100% 50%,
    100% 50%,
    50% 100%,
    50% 100%,
    0 50%,
    0 50%
  );
}
.card-img-overlay {
  transition-duration: 0.6s;
}
.card-effect:hover .card-img-overlay {
  transform: scale(0.9);
}
.card-img-filter {
  filter: brightness(0.5);
}
@media (max-width: 768px) {
  #sidebar-container {
    display: none;
  }
}
</style>
