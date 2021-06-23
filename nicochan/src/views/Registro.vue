<template>
  <div>
    <div
      class="container-fluid d-flex justify-content-center align-items-center"
    >
      <div class="row formulario text-center">
        <div class="col-12 pt-3">
          <h1>Crear tu cuenta de Nicochan</h1>
          <p class="lead">Comencemos!</p>
          <p>asegúrese de su correo electrónico para registrarse</p>
        </div>
        <div class="col-12 text-center">
          <form
            @submit.prevent="crearUsuario({ email: email, password: pass1 })"
            class="form__ "
          >
            <div class="form__focus">
              <input
                type="email"
                v-model="email"
                placeholder=" "
                class="form-control form__input"
                required
              />
              <label for="" class="form__label">Ingrese email</label>
            </div>
            <div class="form__focus">
              <input
                type="password"
                placeholder=" "
                v-model="pass1"
                class="form-control form__input"
                required
              />
              <label for="" class="form__label">Ingrese contraseña</label>
            </div>
            <div class="form__focus">
              <input
                type="password"
                placeholder=" "
                v-model="pass2"
                class="form-control form__input"
                required
              />
              <label for="" class="form__label">Repita contraseña</label>
            </div>
            <p>
              <small>Usa 6 O Más Caracteres Para Una Contraseña Segura</small>
            </p>
            <button
              type="submit"
              :disabled="!desactivar"
              class="btn btn-outline-success mt-2 rounded-pill"
            >
              Registrar
            </button>
          </form>
        </div>
      </div>
      <div class="text-center">
        <router-link
          to="/registro"
          v-if="!existeUsuario"
          class="text-decoration-none"
          id="nav"
          >Crear</router-link
        >
        <router-link
          to="/acceso"
          v-if="!existeUsuario"
          class="text-decoration-none"
          id="nav"
          >Ingresar</router-link
        >
      </div>
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  name: "Registro",
  data() {
    return {
      email: "",
      pass1: "",
      pass2: ""
    };
  },
  created() {},
  methods: {
    ...mapActions(["crearUsuario"]),
    ...mapActions(["cerrarSesion"])
  },
  computed: {
    ...mapState(["error"]),
    desactivar() {
      return (
        this.pass1 === this.pass2 &&
        this.pass1.trim() !== "" &&
        this.pass1.length > 5 &&
        this.email !== ""
      );
    },
    ...mapGetters(["existeUsuario"])
  }
};
</script>

<style scoped>
body {
  background: #fff;
  direction: ltr;
  font-size: 14px;
  line-height: 1.4286;
  margin: 0;
  padding: 0;
}

.container-fluid {
  height: 100vh;
}

h1 {
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

.formulario {
  width: 600px;
  height: 450px;
  border-style: solid;
  border-color: #fff;
  padding: 0 2.5rem;
}

.form__focus {
  position: relative;
  height: 48px;
  margin-bottom: 0.5rem;
}
.form__input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0.2rem;
  outline: none;
  padding: 1rem;
  background: none;
  border: 1px solid #dadce0;
  z-index: 1;
}
.form__label {
  position: absolute;
  left: 1rem;
  top: 0.7rem;
  padding: 0 0.25rem;
  background-color: #fff;
  font-size: 1rem;
  color: #80868b;
  transition: 0.15s;
}

.form__input:focus + .form__label {
  top: -0.5rem;
  left: 0.8rem;
  color: #04c56f;
  font-size: 0.75rem;
  font-weight: 500;
  z-index: 10;
}

/*Input focus sticky top label*/
.form__input:not(:placeholder-shown).form__input:not(:focus) + .form__label {
  top: -0.5rem;
  left: 0.8rem;
  font-size: 0.75rem;
  font-weight: 500;
  z-index: 10;
}

/*Input focus*/
.form__input:focus {
  border: 1.5px solid #04c56f;
}
.btn {
  border: 1px solid transparent;
  border-color: #198754;
}
</style>
