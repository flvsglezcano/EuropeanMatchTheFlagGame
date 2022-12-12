
<template>
    <div>
        <p>Game Time:</p>

        <button class="btn btn-primary" :disabled="ifNoSelectionMade()">Next Round</button>
    </div>
</template>
  
<script>
export default {
    name: 'GameRound',
    data(){
        return {
           totalScore:0
        }
    },
    methods:{ 
        ifNoSelectionMade(){
            return true;
        },
        getSession(){

        },
        updateSession(round){
            if(round.isCorrectAnswer){
                this.totalScore=this.totalScore+20;
            }
        }
    }
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
  