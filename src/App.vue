<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/"><h1>Judah's Original Characters Gallery</h1></RouterLink>
  </header>

  <RouterView />

  <br />
  <footer>
    <div>
      <RouterLink to="/about">About</RouterLink>
    </div>
    <div>
      Mastodon:
      <a href="https://social.foxis.dev/@foxis">@foxis@social.foxis.dev</a>
    </div>
    <div>
      Website:
      <a href="https://www.inconsistent.software">inconsistent.software</a>
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
