<template>
  <div>
    <h1>Match the Flag to the European Country!</h1>
   <button class="btn btn-primary" @click="$emit('beginGame')">
      Start Game
    </button>
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
      data.array.forEach((element) => {
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
    },
  },
  created() {
    this.getFlags();
    this.shuffle(JSON.parse(JSON.stringify(this.flags)));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
