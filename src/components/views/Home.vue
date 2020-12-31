<template>
    <div class="container">
      <div>
        <router-link to="/dragon">The Cookie Dragon</router-link>
      </div>
      <div>
        <router-link to="/fox">Untitled Fox</router-link>
      </div>
      <div>
        <router-link to="/dog">Untitled Dog</router-link>
      </div>
    </div>
</template>

<script>


export default {
  name: 'Home',
  components: {
  },
  props: {
  },
  data: function() {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
