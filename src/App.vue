<!-- Will dynamically render StartGame, "Rounds", or the GameEnd components -->

<template>
  <component :is="currentComponent" @beginGame="changeComponent('GameRound')" @newGame="changeComponent('StartGame')"></component>
</template>

<script>
import StartGame from './components/StartGame.vue';
import GameEnd from './components/GameEnd.vue';
import GameRound from './components/GameRound.vue';

export default {
  name: 'App',
  components: {
    'StartGame': StartGame,
    'GameEnd': GameEnd,
    'GameRound': GameRound
  },
  data() {
    return {
      currentComponent: 'GameEnd',
    }
  },
  methods:{
    changeComponent: function(component){
      this.currentComponent = component;
    }
  }
}
</script>

<style>
body {
  background-image: url("@/assets/bg-img-2.jpg");
  background-size: cover;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 400px;
}
</style>
