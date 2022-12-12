<!-- Show results, display "Play Again" Btn which will clear game session when clicked and route back to StartGame component -->

<template>
    <div id="results">
        <p>Game Results:</p>
        {{gameResults}}
    </div>
    <br/>
    <button class="btn btn-primary" @click="clearGameSession()">Play Again?</button>
</template>
  
<script>
export default {
    name: 'GameEnd',
    data(){
        return {
            gameResults: "5/5"
        }
    },
    methods:{
        clearGameSession(){
            //Clear Game Session and route to StartGame componenet

            this.$emit('newGame');
        }
    }
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
  