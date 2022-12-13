<!-- Will dynamically render StartGame, "Rounds", or the GameEnd components -->

<template>
  <component :is="currentComponent" @beginGame="changeComponent('GameRound')" @newGame="changeComponent('StartGame')"></component>
</template>

<script>
import axios from 'axios';
import * as flagsJson from "@/assets/flags.json";
import FlagData from "@/classes/FlagData";
const imagePath = "@/assets/flag-images/";

export default {
  name: 'App',
  data() {
    return {
      flags: []
    };
  },
  methods: {
    getFlags: function () {
      const data = JSON.parse(JSON.stringify(flagsJson));
      console.log(data.default)
      data.default.forEach((element) => {
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
    },
    async getConversation(message) {
      const accessToken = "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";
      const body = {  
        model: "text-davinci-002",
        prompt:`${message}`,
      };
 
      const res = await axios.post('https://api.openai.com/v1/completions', body,
        {
          headers: {
            authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json", 
          },
        }
      );
      console.log(res.data.choices[0]);
      return res.data;
    },
  },
  created() {
    this.getFlags();
    this.shuffle(JSON.parse(JSON.stringify(this.flags)));
    this.getConversation("Fun fact about Italy");
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
}
</style>
