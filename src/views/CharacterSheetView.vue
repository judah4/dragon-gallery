<template>
  <div>
    <p v-if="character.Draft"><b>Draft</b></p>
    <h1>{{ character.Name }}</h1>
    <p>{{ character.Description }}</p>
    <ul>
      <li v-for="(val, index) in character.Attributes" v-bind:key="index">
        {{ val.id }} - {{ val.value }}
      </li>
    </ul>
    <DragonLightGallery :types="character.Types" :images="character.Images" />
  </div>
</template>

<script>
import DragonLightGallery from '../components/DragonLightGallery.vue'

export default {
  name: 'CharacterSheet',
  components: {
    DragonLightGallery
  },
  props: ['character'],
  data: function () {
    return {}
  }
}
</script>
