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
      accessToken: "",
      apiBaseUrl: "https://chat.openai.com/api",
      backendApiBaseUrl: "https://chat.openai.com/backend-api",
      userAgent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
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
