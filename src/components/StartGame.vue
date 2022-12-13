<template>
  <div>
    <h1>Match the Flag to the European Country!</h1>
    <!-- <button class="btn btn-primary" @click="$emit('beginGame')">Start Game</button> -->
    <router-link class="btn btn-primary" :to="{ name: 'GameRound', props: {flagData: flags} }">Start Game</router-link>

  </div>
  
</template>

<script>
import axios from 'axios';
import * as flagsJson from "@/assets/flags.json";
import FlagData from "@/classes/FlagData";
const imagePath = "@/assets/flag-images/";

export default {
  name: "StartGame",
  props: { msg: String },
  data() {
    return {
      flags: []
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
    // this.getFlags();
    this.shuffle(JSON.parse(JSON.stringify(this.flags)));
    this.getConversation("Fun fact about Italy");
  },
  emits: ['beginGame']
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
