<template>
<div>
    <p v-if="character.Draft" ><b>Draft</b></p>
    <h1>{{character.Name}}</h1>
    <p>{{character.Description}}</p>
    <ul>
      <li v-for="(val, index) in character.Attributes" v-bind:key=index >
        {{val.id}} - {{val.value}}
      </li>
    </ul>
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
