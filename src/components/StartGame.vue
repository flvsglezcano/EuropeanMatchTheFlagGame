<template>
  <div id="gameStartSection">
    <h1>Match the Flag to the European Country!</h1>
    <router-link class="btn btn-primary" :to="{ name: 'GameRound1' }">Start Game</router-link>
  </div>
</template>

<script>


export default {
  name: "StartGame"
};
</script>

<style scoped>
#gameStartSection {
  margin-top: 400px;
}
</style>
