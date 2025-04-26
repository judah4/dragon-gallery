import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CharacterSheet from '../views/CharacterSheetView.vue'

import CookieDragon from '../js/dragon.js'
import Doggy from '../js/dog.js'
import Fox from '../js/fox.js'
import Otter from '../js/otter.js'

var characters = [CookieDragon, Doggy, Fox, Otter]

let routes = [
  { path: '/', name: 'home', component: HomeView, props: { characters: characters } },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  }
]

var devMode = process.env.NODE_ENV == 'development'

for(var i = 0; i < characters.length; i++) {
  var character = characters[i];
  if (devMode || !character.Draft) {
    routes.push({ path: character.Route, component: CharacterSheet, props: { character: character } })
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
