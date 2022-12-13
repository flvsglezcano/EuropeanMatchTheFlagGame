<template>
  <div id="gameStartSection">
    <h1>Match the Flag to the European Country!</h1>
    <router-link class="btn btn-primary" :to="{ name: 'GameRound1', props: {flagData: flags} }">Start Game</router-link>
  </div>
</template>

<script> 
import * as flagsJson from "@/assets/flags.json";
const imagesFolder = "./assets/flag-images/";
import FlagData from "@/classes/FlagData"
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
      const data = JSON.parse(JSON.stringify(flagsJson));
      console.log(data);
      data.default.forEach((element) => {
        this.flags.push(
          new FlagData({
            id: element.id,
            country: element.country,
            apiKeyWord: element.apiKeyPath,
            imagePath: `${imagesFolder}${element.imagePath}`,
            isRoundAnswer: false,
            showCountryName: false,
            classValidation: ""
          })
        );
      });
    },
    shuffle: function (array) {
      for (let i = this.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    }
  },
 
  created() {
    this.getFlags();
    this.shuffle(JSON.parse(JSON.stringify(this.flags))); 
  }
};
</script>

<style scoped>
#gameStartSection {
  margin-top: 400px;
}
</style>