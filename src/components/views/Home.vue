<template>
    <div class="container">
      <div v-for="(character, index) in charFiltered" v-bind:key="index">
        <router-link v-bind:to="character.Route">{{character.Name}}</router-link>
      </div>
    </div>
</template>

<script>


export default {
  name: 'Home',
  components: {
  },
  props: {
    characters: Array
  },
  computed: {
    charFiltered: function() {

      var devMode =process.env.NODE_ENV == "development";
      var filtered = [];

      for(let cnt = 0; cnt < this.characters.length; cnt++) {
        if(devMode || !this.characters[cnt].Draft) {
          filtered.push(this.characters[cnt]);
        }
      }

      return filtered;
    }
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
