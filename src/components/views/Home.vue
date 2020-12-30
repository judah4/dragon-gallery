<template>
    <DragonGallery :types="dragonTypes" />
</template>

<script>
import DragonGallery from '../DragonGallery.vue'


export default {
  name: 'Home',
  components: {
      DragonGallery
  },
  props: {
  },
  data: function() {
    return {
      dragonTypes: [],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
