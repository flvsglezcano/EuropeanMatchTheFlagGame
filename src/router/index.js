import { createWebHistory, createRouter } from "vue-router"
import StartGame from "@/components/StartGame.vue"
import GameRound from "@/components/GameRound.vue"


const routes = [ 
    {
        path: "/",
        name: "StartGame",
        component: StartGame,
      },
      {
        path: '/components/GameRound.vue',
        name: "GameRound",
        component: GameRound,
        props: true
      },
 ]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router