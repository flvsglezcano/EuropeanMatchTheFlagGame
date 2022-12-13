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
        props: true,
        component: StartGame
      },
      {
        path: '/components/GameRound1.vue',
        name: "GameRound1",
        props: true,
        component: GameRound1
      },
      {
        path: '/components/GameRound2.vue',
        name: "GameRound2",
        props: true,
        component: GameRound2
      },
      {
        path: '/components/GameRound3.vue',
        name: "GameRound3",
        props: true,
        component: GameRound3
      },
      {
        path: '/components/GameRound4.vue',
        name: "GameRound4",
        props: true,
        component: GameRound4
      },
      {
        path: '/components/GameRound5.vue',
        name: "GameRound5",
        props: true,
        component: GameRound5
      },
      {
        path: '/components/GameEnd.vue',
        name: "GameEnd",
        props: true,
        component: GameEnd
      }
 ]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router