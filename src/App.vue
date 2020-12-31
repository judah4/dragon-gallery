<template>
  <div id="app">
    <h1><router-link to="/">Judah's Original Characters</router-link></h1>

    <router-view></router-view>
    
    <br/>

    <div>
      Twitter: <a href="https://twitter.com/dragonjudah" >@DragonJudah</a>
    </div>
    <div>
      Mastodon: <a href="https://dragon.style/@cookie">@cookie@dragon.style</a>
    </div>
  </div>
</template>

<script>
    import VueRouter from 'vue-router'
    import Home from '@/components/views/Home'
    import CharacterSheet from '@/components/views/CharacterSheet'

    import CookieDragon from '@/js/dragon.js'
    import Doggy from '@/js/dog.js'
    import Fox from '@/js/fox.js'

    const routes = [
        { path: '/', component: Home },
        { path: '/dragon', component: CharacterSheet, props: { character: CookieDragon } },
        { path: '/dog', component: CharacterSheet, props: { character: Doggy } },
        { path: '/fox', component: CharacterSheet, props: { character: Fox } },
    ];

    const router = new VueRouter({
        routes // short for `routes: routes`
    });

export default {
  router,
  name: 'app',
  components: {

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
