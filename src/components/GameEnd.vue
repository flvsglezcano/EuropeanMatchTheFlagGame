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
            gameResults: ""
        }
    },
    methods:{
        clearGameSession(){
            //Clear Game Session and route to StartGame componenet
            localStorage.setItem("totalScore","0");
        },
        getResults(){
            if(localStorage.getItem("totalScore")===null|| localStorage.getItem("totalScore") === undefined){
                localStorage.setItem("totalScore","0");
            }
            console.log(localStorage.getItem("totalScore"));
            var totalScore=localStorage.getItem("totalScore");
            this.gameResults = totalScore+"/100";
        }
    },
    created(){
        this.getResults();
    }
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
  