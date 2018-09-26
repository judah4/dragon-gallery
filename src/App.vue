<template>
  <div id="app">
    <h1>Dragons</h1>
    <DragonGallery />
    <br/>

    <p>Images and references for my dragon. The Cookie Dragon</p>

    <div>
      Twitter: <a href="https://twitter.com/dragonjudah" >@DragonJudah</a>
    </div>
    <div>
      Mastodon: <a href="https://dragon.style/@cookie">@cookie@dragon.style</a>
    </div>
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
