<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
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
      console.log(res.data);
      return res.data;
    },
  },
  created() {
    this.getConversation("Fun fact about Italy");
  }
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
