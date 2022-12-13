<!-- Show results, display "Play Again" Btn which will clear game session when clicked and route back to StartGame component -->

<template>
    <div id="results">
        <p>Game Results:</p>
        {{gameResults}}
    </div>
    <br/>
    <router-link :to="{ name: 'StartGame' }" class="btn btn-lg btn-primary" @click="clearGameSession()">Play Again?</router-link>
</template>
  
<script>
export default {
    name: 'GameEnd',
    props:["results"],
    data(){
        return {
            gameResults: this.results+"/100"
        }
    },
    methods:{
        clearGameSession(){
            //Clear Game Session and route to StartGame componenet
            this.gameResults = "0/5"
        }
    }
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
  