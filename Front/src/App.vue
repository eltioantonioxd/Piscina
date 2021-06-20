<template>
  <div id="app">
    <div class="container-fluid d-flex justify-content-center align-items-center" >
      <div>
      <router-link to="/" v-if="existeUsuario" class="text-decoration-none">Inicio</router-link> 
      <div class="row">
        <div class="col-3 pestaña py-2">
          <router-link to="/registro" v-if="!existeUsuario" class="text-decoration-none" id="nav">Crear</router-link> 
        </div>
        <div class="col-3 py-2">
          <router-link to="/acceso" v-if="!existeUsuario" class="text-decoration-none" id="nav">Ingresar</router-link>
        </div> 
      </div>
      <button @click="cerrarSesion" v-if="existeUsuario" class="text-decoration-none">Cerrar Sesión</button>
    <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  methods:{
    ...mapActions(['cerrarSesion'])
  },
  computed:{
    ...mapGetters(['existeUsuario'])
  }
}
</script>

<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


#nav {
  font-weight: bold;
  color: #2c3e50;
}

.pestaña.router-link-exact-active{
  border-style: solid;
  border-color: #42b983;
  border-width: 1px;
  border-bottom: 0;
  border-radius: 3px;
 
}

#nav.router-link-exact-active {
  color: #42b983;
  padding: 1rem 2rem;
  border-style: solid;
  border-color: #42b983;
  border-width: 1px;
  border-bottom: 0;
  border-radius: 3px;
  
}
</style>