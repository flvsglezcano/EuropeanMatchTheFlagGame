import { createWebHistory, createRouter } from "vue-router"
import StartGame from "@/components/StartGame.vue"
import GameRound1 from "@/components/GameRound1.vue"
import GameRound2 from "@/components/GameRound2.vue"
import GameRound3 from "@/components/GameRound3.vue"
import GameRound4 from "@/components/GameRound4.vue"
import GameRound5 from "@/components/GameRound5.vue"
import GameEnd from "@/components/GameEnd.vue"

const routes = [ 
      {
        path: "/",
        name: "StartGame",
        component: StartGame,
      },
      {
        path: '/components/GameRound1.vue',
        name: "GameRound1",
        component: GameRound1,
        props: true
      },
      {
        path: '/components/GameRound2.vue',
        name: "GameRound2",
        component: GameRound2,
        props: true
      },
      {
        path: '/components/GameRound3.vue',
        name: "GameRound3",
        component: GameRound3,
        props: true
      },
      {
        path: '/components/GameRound4.vue',
        name: "GameRound4",
        component: GameRound4,
        props: true
      },
      {
        path: '/components/GameRound5.vue',
        name: "GameRound5",
        component: GameRound5,
        props: true
      },
      {
        path: '/components/GameEnd.vue',
        name: "GameEnd",
        component: GameEnd,
        props: true
      }
 ]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router