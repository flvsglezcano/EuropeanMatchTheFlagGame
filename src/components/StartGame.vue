<template>
  <div>
    <h1>Match the Flag to the European Country!</h1>
    <button class="btn btn-primary" @click="$emit('beginGame')">Start Game</button>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  
</template>

<script lang="ts">
import * as flagsJson from "@/assets/flags.json";
import FlagData from "@/classes/FlagData";
const imagePath = "@/assets/flag-images/";
import { defineComponent } from "vue";  
import axios from 'axios';
export default defineComponent({
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
      },
  data() {
    return { 
    }
      return array;
      },
  methods: { 
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
  },
 
  created() {
    this.getFlags();
    this.shuffle(JSON.parse(JSON.stringify(this.flags)));
  },
};
      );
      console.log(res.data);
      return res.data;
    },
  },
  created() {
    this.getConversation("Fun fact about Italy");
  },
  emits: ['beginGame']
})
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
