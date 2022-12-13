<template>
  <div>
    <h1>Match the Flag to the European Country!</h1>
    <button class="btn btn-primary" @click="$emit('beginGame')">Start Game</button>
  </div>
  
</template>

<script lang="ts">
import * as flagsJson from "@/assets/flags.json";
import FlagData from "@/store/FlagData";
const imagePath = "@/assets/flag-images/";

export default {
  name: 'StartGame',
  props: {
    msg: String
  },
  emits: ['beginGame']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
