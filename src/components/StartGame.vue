<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  
</template>

<script lang="ts">
import * as flagsJson from "@/assets/flags.json";
import FlagData from "@/classes/FlagData";
const imagePath = "@/assets/flag-images/";

export default {
  name: "StartGame",
  props: { msg: String },
  data() {
    return {
      flags: [],
      round1:[],
      answerRound1:'',
      round2:[],
      round3:[],
      round4:[],
      round5:[]
    };
  },
  methods: {
    getFlags: function () {
      const data = JSON.parse(JSON.stringify(flagsJson));
      data.array.forEach((element) => {
        this.flags.push(
          new FlagData(
            element.id,
            element.country,
            element.apiKeyPath,
            `${imagePath}${element.imagePath}`            
          )
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
  },
};
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
