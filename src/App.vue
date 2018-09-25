<template>
  <div id="app">
    <DragonGallery />
  </div>
</template>

<script>
import DragonGallery from './components/DragonGallery.vue'

export default {
  name: 'app',
  components: {
      DragonGallery
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
