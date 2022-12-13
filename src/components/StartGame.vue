<template>
  <div id="startSection">
    <h1>Match the Flag to the European Country!</h1>
    <router-link class="btn btn-primary" :to="{ name: 'GameView' }">Start Game</router-link>
  </div>
</template>

<script>
export default {
  name: "StartGame"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#startSection {
  margin-top: 400px;
}
</style>
