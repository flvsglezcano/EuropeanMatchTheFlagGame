
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
           
        }
    },
    methods:{
        ifNoSelectionMade(){
            return true;
        }
    }
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
  