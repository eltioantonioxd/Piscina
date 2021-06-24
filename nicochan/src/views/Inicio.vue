<template>
  <div>
    <div class="d-flex">
      <div id="sidebar-container" class="bg-dark">
        <div class="logo">
          <h4 class="text-light font-weight-bold">PoolD</h4>
        </div>
        <div class="menu">
          <a href="#" class="d-block py-3 text-light text-center"
            ><i class="icon ion-md-apps me-2 lead"></i>Tablero</a
          >
          <a href="#" class="d-block py-3 text-light text-center"
            ><i class="icon ion-md-person me-2 lead"></i>Usuario</a
          >
        </div>
      </div>
      <div class="w-80 mx-auto">
        <nav
          class="navbar navbar-expand-lg navbar-light bg-light border-bottom"
        >
          <div class="container">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle "
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {{ usuario.email }}
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <button
                      @click="cerrarSesion"
                      v-if="existeUsuario"
                      class="dropdown-item"
                    >
                      Cerrar Sesión
                    </button>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div id="content">
          <!-- <section class="py-3">
            <div class="container">
              <div class="row">
                <div class="col-9">
                  <h1 class="text-primary">Bienvenid@</h1>
                </div>
                <div class="col-3 pt-3">
                  <button class="btn btn-primary w-100 align-self-center">
                    Revisa el clima!
                  </button>
                </div>
              </div>
            </div>
          </section>
          <div class="container">
            <div class="row">
              <article class="col-lg-4 col-md-6 card-effect mb-3 mb-md-0">
                <div class="card">
                  <img
                    src="https://presenterse.com/wp-content/uploads/2020/02/agua-po.jpg"
                    alt=""
                    class="card-img card-img-filter"
                  />
                  <div
                    class="card-img-overlay text-white d-flex flex-column justify-content-center text-center"
                  >
                    <h4>PH</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Iusto dolorem autem nemo sit unde laboriosam.
                    </p>
                    <a href="#" class="text-reset">Read more</a>
                  </div>
                </div>
              </article>
            </div>
            <div class="row justify-content-center">
              <article class="col-lg-4 col-md-6 card-effect mb-3 mb-md-0">
                <div class="card">
                  <img
                    src="https://www.puntoseguro.com/blog/wp-content/uploads/2018/03/Asi-es-como-el-sol-protege-el-sol-de-enfermedades-como-la-gripe.jpg"
                    alt=""
                    class="card-img card-img-filter"
                  />
                  <div
                    class="card-img-overlay text-white d-flex flex-column justify-content-center text-center"
                  >
                    <h4>que?</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Iusto dolorem autem nemo sit unde laboriosam.
                    </p>
                    <a href="#" class="text-reset">Read more</a>
                  </div>
                </div>
              </article>
            </div>

            <div class="row justify-content-end">
              <article class="col-lg-4 col-md-6 card-effect mt-md-4 mt-lg-0">
                <div class="card">
                  <img
                    src="https://momentospiscina.com/blog/wp-content/uploads/2015/03/mantenimiento-de-piscinas-girona2.jpg"
                    alt=""
                    class="card-img card-img-filter"
                  />
                  <div
                    class="card-img-overlay text-white d-flex flex-column justify-content-center text-center"
                  >
                    <h4>Pene</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Iusto dolorem autem nemo sit unde laboriosam.
                    </p>
                    <a href="#" class="text-reset">Read more</a>
                  </div>
                </div>
              </article>
            </div>
          </div> -->
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
