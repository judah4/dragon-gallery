<template>
  <div>
    <button v-on:click="filterType = ''">All</button>
    <template v-for="(type, typeIndex) in types" :key="typeIndex">
      <button v-on:click="filterType = type">{{ type }}</button>
    </template>
  </div>
  <lightgallery
    :settings="{
      speed: 500,
      plugins: plugins,
      licenseKey: '5C5BD778-B4CF-472F-B979-3270B90BB9F4',
    }"
    :onInit="onInit"
    :onBeforeSlide="onBeforeSlide"
  >
    <a
      class="gallery-item"
      v-for="(image, imageIndex) in filteredImages"
      :key="imageIndex"
      :data-src="image.href ? image.href : image"
      :data-sub-html="genDescription(image)"
    >
      <img
        class="img-responsive thumb"
        :alt="image.title"
        :src="image.thumb ? image.thumb : image.href"
      />
    </a>
  </lightgallery>
</template>

<script>
import Lightgallery from "lightgallery/vue";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
let lightGallery = null;
export default {
  components: {
    Lightgallery,
  },
  props: { types: Array, images: Array },
  watch: {
    filteredImages() {
      this.$nextTick(() => {
        lightGallery.refresh();
      });
    },
  },
  computed: {
    filteredImages: function () {
      if (!this.filterType) return this.images;

      var imgs = [];
      for (var cnt = 0; cnt < this.images.length; cnt++) {
        if (this.filterType == this.images[cnt].type) {
          imgs.push(this.images[cnt]);
        }
      }

      return imgs;
    },
  },
  data() {
    return {
      plugins: [lgThumbnail, lgZoom],
      filterType: "",
    };
  },
  methods: {
    onInit: (detail) => {
      lightGallery = detail.instance;
    },
    onBeforeSlide: () => {
      console.log("calling before slide");
    },
    genTitle: (imageData) => {
      return imageData.description;
    },
    genDescription: (imageData) => {
      var data = "<h2>" + imageData.title;
      if (imageData.year) {
        data += ` (${imageData.year})`;
      }
      data += "</h2>";
      data += "<p>" + imageData.description + "</p>";
      return data;
    },
  },
};
</script>
<style lang="css">
@import "lightgallery/css/lightgallery.css";
@import "lightgallery/css/lg-thumbnail.css";
@import "lightgallery/css/lg-zoom.css";

.gallery-item {
  margin: 5px;
}

.thumb {
  max-width: 250px;
  max-height: 250px;
}

.lg-sub-html {
  font-size: 1em;
}

.lg-sub-html p {
  font-size: 1em;
}
</style>
