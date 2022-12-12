<!-- Show results, display "Play Again" Btn which will clear game session when clicked and route back to StartGame component -->

<template>
    <div id="results">
        
    </div>
    <button id="playAgain" @click="clearGameSession()">

    </button>
</template>
  
<script>
export default {
    name: 'GameEnd',
    data(){
        return {
            gameResults: ""
        }
    },
    methods:{
        clearGameSession(){
            //Clear Game Session and route to StartGame componenet
        }
    }
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
  