<template>
  <div id="app">
    <h1>Dragons</h1>
    <router-link to="/">Home</router-link> <router-link to="/Feral">Feral</router-link> <router-link to="/Anthro">Anthro</router-link> 

    <router-view></router-view>
    
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
    import VueRouter from 'vue-router'
    import Home from '@/components/views/Home'
    import Feral from '@/components/views/Feral'
    import Anthro from '@/components/views/Anthro'
    const Foo = { template: '<div>foo</div>' };
    const Bar = { template: '<div>bar</div>' };

    const routes = [
        { path: '/', component: Home },
        { path: '/feral', component: Feral },
        { path: '/anthro', component: Anthro },
        { path: '/foo', component: Foo },
        { path: '/bar', component: Bar }
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
