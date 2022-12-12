
<template>
    <div>
        
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
  