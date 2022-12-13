import { createRouter, createWebHistory } from 'vue-router'
import StartGame from "@/components/StartGame.vue"
import GameView from '@/views/GameView.vue'
import GameEnd from '@/components/GameEnd.vue'

const routes = [
    {
        path: "/",
        name: "StartGame",
        component: StartGame
    },
    {
        path: '/views/GameView.vue',
        name: 'GameView',
        component: GameView
    },
    {
        path: '/components/GameEnd.vue',
        name: 'GameEnd',
        component: GameEnd
    }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router