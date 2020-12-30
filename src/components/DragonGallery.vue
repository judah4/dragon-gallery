<template>
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
</template>

<script>
    import VueGallery from 'vue-gallery';
    export default {
        name: "DragonGallery",
        components: {
            'gallery': VueGallery
        },
        props: ['types'],
        computed: {
            filteredImages : function() {

                if(!this.types || !this.types.length)
                    return this.images;

                var imgs = [];
                for(var cnt = 0; cnt < this.images.length; cnt++) {
                    if(this.types.indexOf( this.images[cnt].type) !== -1) {
                        imgs.push(this.images[cnt]);
                    }
                }

                return imgs;
            }
        },
        data: function () {
            return {
                images: [
                    {
                        title: 'The Cookie Dragon',
                        href: 'images/commission___baby_dragon_by_raizy-d6xqz3x.png',
                        description: 'Original Commission from Chu. And most of these images are from Chu.',
                        type: "feral",
                    },
                    {
                        title: 'The Cookie Dragon',
                        href: 'images/9-judah.png',
                        type: "feral",
                    },
                    {
                        title: 'Dragon April 2016',
                        href: 'images/chu_dragon_April_2016.png',
                        type: "feral",
                    },
                    {
                        title: 'Dragon May 2016',
                        href: 'images/chu_dragon_May_2016.png',
                        type: "feral",
                    },
                    {
                        title: 'Cookie Dragon',
                        href: 'images/dragon1Apple.png',
                        description: 'Commissioned from Appledapple!',
                        type: "feral",
                    },
                    {
                        title: 'Christmas Cookie Dragon',
                        href: 'images/dragonChristmas.png',
                        description: 'Commissioned from Appledapple!',
                        type: "feral",
                    },
                    /*{
                        title: 'Old Cookie Dragon Games Logo',
                        href: 'images/cookieDragonGames_RGB.png',
                        description: 'The old logo for my game stuff',
                        type: "feral",
                    },*/
                    {
                        title: 'Halloween Cookie Dragon',
                        href: 'images/holloweenDragon.png',
                        description: 'Dragon dressed as a charmander for halloween',
                        type: "feral",
                    },
                    {
                        title: 'Christmas Cookie Dragon',
                        href: 'images/judah4-christmas_cookie_dragon.png',
                        type: "feral",
                    },
                    {
                        title: 'Sleeping Dragon',
                        href: 'images/judah4---sleeping-dragon-animation.gif',
                        description: 'Animated sleeping dragon. Very tired.',
                        type: "feral",
                    },
                    {
                        title: 'ZZZ... Dragon',
                        href: 'images/UpsideDownDragon.jpg',
                        description: 'The dragon is even more tired.',
                        type: "feral",
                    },
                    {
                        title: 'Circel Dragon',
                        href: 'images/judah-circle_dragon.png',
                        type: "feral",
                    },
                    /*{
                        title: 'Cookie Dragon Games Logo',
                        href: 'images/CookieDragon2_Color.png',
                        description: 'The logo for my single person game studio!',
                        type: "feral",
                    },*/
                    {
                        title: 'Lineless Icon',
                        href: 'images/2018/10_12_1judahlineless.png',
                        description: 'Icon from @faunbutt',
                        type: "feral",
                    },
                    {
                        title: 'Neon Badge',
                        href: 'images/2019/1-JudahNeonBadge.jpg',
                        description: 'Badge from https://twitter.com/Lumaberry',
                        type: "feral",
                    },
                    {
                        title: 'Chibi Dragon',
                        href: 'images/2020/frogbuttdragon.png',
                        description: 'From https://twitter.com/TheFrogButt. January 2020',
                        type: "feral",
                    },
                    {
                        title: 'Dragon Emotes',
                        href: 'images/2020/frostDragonEmotes.jpg',
                        description: 'From https://twitter.com/Elegant_frost. March 2020',
                        type: "feral",
                    },
                    {
                        title: 'Cookie Dragon With Cookies',
                        href: 'images/2020/OtherEric_CookieDragon_Commish.png',
                        description: 'From TheOtherEric. December 2020',
                        type: "anthro",
                    },

                ],
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
