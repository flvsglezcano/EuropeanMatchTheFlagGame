<template>
  <div id="startSection">
    <h1>Match the Flag to the European Country!</h1>
    <router-link class="btn btn-primary" :to="{ name: 'GameView' }">Start Game</router-link>
  </div>
</template>

<script>
import flagsJson from "@/assets/flags.json";
export default {
  name: "StartGame",
  props: { msg: String },
  emits: ["beginGame"],
  data() {
    return {
      flags: [],
    };
  },
  methods: {
    getFlags: function () { 
      flagsJson.forEach((element) => {
        this.flags.push(element);
      });     
    },
    shuffle: function (array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }
  },
  created() {    
    this.getFlags();
    this.shuffle(this.flags);    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#startSection {
  margin-top: 400px;
}
</style>
