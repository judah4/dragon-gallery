<template>
    <div class="container">
        <gallery :images="images" :index="index" @close="index = null"></gallery>
        <div
                class="image"
                v-for="(image, imageIndex) in images"
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
        data: function () {
            return {
                images: [
                    {
                        title: 'The Cookie Dragon',
                        href: 'images/commission___baby_dragon_by_raizy-d6xqz3x.png',
                        description: 'Original Commission from Chu. And most of these images are from Chu.'
                    },
                    {
                        title: 'The Cookie Dragon',
                        href: 'images/9-judah.png',
                    },
                    'images/chu_dragon_April_2016.png',
                    'images/chu_dragon_May_2016.png',
                    {
                        title: 'Cookie Dragon',
                        href: 'images/dragon1Apple.png',
                        description: 'Commissioned from Appledapple!'
                    },
                    {
                        title: 'Christmas Cookie Dragon',
                        href: 'images/dragonChristmas.png',
                        description: 'Commissioned from Appledapple!'
                    },
                    {
                        title: 'Old Cookie Dragon Games Logo',
                        href: 'images/cookieDragonGames_RGB.png',
                        description: 'The old logo for my game stuff'
                    },
                    {
                        title: 'Halloween Cookie Dragon',
                        href: 'images/holloweenDragon.png',
                        description: 'Dragon dressed as a charmander for halloween'
                    },
                    'images/judah4-christmas_cookie_dragon.png',
                    {
                        title: 'Sleeping Dragon',
                        href: 'images/judah4---sleeping-dragon-animation.gif',
                        description: 'Animated sleeping dragon. Very tired.'
                    },
                    {
                        title: 'ZZZ... Dragon',
                        href: 'images/UpsideDownDragon.jpg',
                        description: 'The dragon is even more tired.'
                    },
                    'images/judah-circle_dragon.png',
                    {
                        title: 'Cookie Dragon Games Logo',
                        href: 'images/CookieDragon2_Color.png',
                        description: 'The logo for my single person game studio!'
                    },
                    {
                        title: 'Lineless Icon',
                        href: 'images/2018/10_12_1judahlineless.png',
                        description: 'Icon from @faunbutt'
                    },
                    {
                        title: 'Neon Badge',
                        href: 'images/2019/1-JudahNeonBadge.jpg',
                        description: 'Badge from https://twitter.com/Lumaberry'
                    },
                    {
                        title: 'Chibi Dragon',
                        href: 'images/2020/frogbuttdragon.png',
                        description: 'From https://twitter.com/TheFrogButt. January 2020'
                    },
                    {
                        title: 'Dragon Emotes',
                        href: 'images/2020/frostDragonEmotes.jpg',
                        description: 'From https://twitter.com/Elegant_frost. March 2020'
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
