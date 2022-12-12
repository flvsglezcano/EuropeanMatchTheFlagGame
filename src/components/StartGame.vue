<template>
  <div>
    <h1>Match the Flag to the European Country!</h1>
    <button class="btn btn-primary" @click="$emit('beginGame')">Start Game</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";  
import axios from 'axios';
export default defineComponent({
  name: 'StartGame',
  props: {
    msg: String
  },
  data() {
    return { 
    }
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
      );
      console.log(res.data.choices[0]);
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
