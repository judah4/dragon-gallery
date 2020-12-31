<template>
<div>
    <p>{{character.Description}}</p>
    <DragonGallery :types="character.Types" :images="character.Images" />

</div>
</template>

<script>
import DragonGallery from '../DragonGallery.vue'


export default {
  name: 'CharacterSheet',
  components: {
      DragonGallery
  },
  props: ['character'],
  data: function() {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
