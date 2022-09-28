<template>
    <div>
        <button v-on:click="filterType=''" >All</button>
        <template v-for="(type, typeIndex) in types" :key="typeIndex">
            <button  v-on:click="filterType=type" >{{type}}</button>

        </template>
    </div>
    <lightgallery
        :settings="{ speed: 500, plugins: plugins }"
        :onInit="onInit"
        :onBeforeSlide="onBeforeSlide"
        >

        <a class="gallery-item" v-for="(image, imageIndex) in filteredImages" :key="imageIndex" 
        :data-src="(image.href ? image.href : image)" 
        :data-sub-html="image.description"
        >
            <img class="img-responsive thumb" :alt="image.title" 
            :src="(image.href ? image.href : image)"
             />
        </a>
        
    </lightgallery>
</template>

<script>
    import Lightgallery from 'lightgallery/vue';
    import lgThumbnail from 'lightgallery/plugins/thumbnail';
    import lgZoom from 'lightgallery/plugins/zoom';

    export default {
        components: {
            Lightgallery,
        },
        props: { types: Array, images: Array },
        computed: {
            filteredImages : function() {

                if(!this.filterType)
                    return this.images;

                var imgs = [];
                for(var cnt = 0; cnt < this.images.length; cnt++) {
                    if(this.filterType == this.images[cnt].type) {
                        imgs.push(this.images[cnt]);
                    }
                }

                return imgs;
            }
        },
        data() { 
            return {
                plugins: [lgThumbnail, lgZoom],
                filterType: '',
            }
        },
        methods: {
            onInit: () => {
                console.log('lightGallery has been initialized');
            },
            onBeforeSlide: () => {
                console.log('calling before slide');
            },
        },
    }

</script>
<style lang="css">

    @import 'lightgallery/css/lightgallery.css';
    @import 'lightgallery/css/lg-thumbnail.css';
    @import 'lightgallery/css/lg-zoom.css';

    .gallery-item {
        margin: 5px;
    }

    .thumb {
        max-width: 250px;
        max-height: 250px;
    }

</style>