<template>
    <DragonGallery :types="dragonTypes" />
</template>

<script>
import DragonGallery from '../DragonGallery.vue'


export default {
  name: 'Feral',
  components: {
      DragonGallery
  },
  props: {
  },
  data: function() {
    return {
      dragonTypes: ['feral'],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
