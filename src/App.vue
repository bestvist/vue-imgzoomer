<template>
  <div id="app">
    <v-imgzoomer></v-imgzoomer>
  </div>
</template>

<script>
import VImgzoomer from './components/VImgzoomer.vue'

export default {
  name: 'app',
  components: {
    VImgzoomer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
