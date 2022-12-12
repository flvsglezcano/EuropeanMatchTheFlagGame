<!-- Will dynamically render StartGame, "Rounds", or the GameEnd components -->

<template> 
  <StartGame msg="Welcome to your Vue App!" />
</template>

<script>
import StartGame from './components/StartGame.vue';
// import GameEnd from './components/GameEnd.vue';
// import GameRound from './components/GameRound.vue';

export default {
  name: 'App',
  components: {
    StartGame
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
  margin-top: 60px;
}
</style>
