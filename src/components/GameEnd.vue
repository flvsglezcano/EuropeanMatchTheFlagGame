<!-- Show results, display "Play Again" Btn which will clear game session when clicked and route back to StartGame component -->
<template>
    <div id="resultsSection">
        <p>Game Results:</p>
        {{gameResults}}
    </div>
    <br/>
    <router-link class="btn btn-primary" :to="{ name: 'StartGame', props: {flagData: flags} }"  @click="clearGameSession()">Play Again?</router-link>

</template>
  
<script>
export default {
    name: 'GameEnd',
    data(){
        return {
            //Get results from local storage?
            gameResults: "5/5"
        }
    },
    methods:{
        clearGameSession(){
            //Clear Game Session Data
        }
    }
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#resultsSection{
    margin-top: 400px;
}
</style>
  