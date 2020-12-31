<template>
    <div>
        <div>
            <button v-on:click="filterType=''" >All</button>
            <template v-for="(type, typeIndex) in types">
                <button :key="typeIndex" v-on:click="filterType=type" >{{type}}</button>

            </template>
        </div>
        <div class="container">
        

        <gallery :images="filteredImages" :index="index" @close="index = null"></gallery>
            <div
                    class="image"
                    v-for="(image, imageIndex) in filteredImages"
                    :key="imageIndex"
                    @click="index = imageIndex"
                    :style="{ backgroundImage: 'url(' + (image.href ? image.href : image) + ')', width: '300px', height: '200px' }"
            ></div>
        </div>
    </div>
</template>

<script>
    import VueGallery from 'vue-gallery';
    export default {
        name: "DragonGallery",
        components: {
            'gallery': VueGallery
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
        data: function () {
            return {
                filterType: '',
                index: null
            };
        }


    }
</script>

<style scoped>

    .container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .image {

        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        border: 1px solid #ebebeb;
        margin: 5px;
    }
</style>
