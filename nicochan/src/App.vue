<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script></script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  font-weight: bold;
  color: #2c3e50;
}

#nav.router-link-exact-active {
  color: #42b983;
  padding: 1rem 2rem;
}
</style>
