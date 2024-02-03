import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CharacterSheet from '../views/CharacterSheetView.vue'

import CookieDragon from '../js/dragon.js'
import Doggy from '../js/dog.js'
import Fox from '../js/fox.js'

var characters = [CookieDragon, Doggy, Fox]

let routes = [
  { path: '/', name: 'home', component: HomeView, props: { characters: characters } },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  { path: CookieDragon.Route, component: CharacterSheet, props: { character: CookieDragon } }
]

var devMode = process.env.NODE_ENV == 'development'
if (devMode || !Doggy.Draft) {
  routes.push({ path: Doggy.Route, component: CharacterSheet, props: { character: Doggy } })
}
if (devMode || !Fox.Draft) {
  routes.push({ path: Fox.Route, component: CharacterSheet, props: { character: Fox } })
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
