<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <RouterLink to="/"><h1>Judah's Dragon Gallery</h1></RouterLink>
  </header>

  <RouterView />

  <br/>
  <footer> 
    <div>
      <RouterLink to="/about">About</RouterLink>
    </div>
    <div>
      Twitter: <a href="https://twitter.com/dragonjudah" >@DragonJudah</a>
    </div>
    <div>
      Mastodon: <a href="https://dragon.style/@cookie">@cookie@dragon.style</a>
    </div>
    <div>
      Website: <a href="https://www.judahperez.com">judahperez.com</a>
    </div>
  </footer>
  

</template>

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
