<!-- Will dynamically render StartGame, "Rounds", or the GameEnd components -->
<template>
        <div v-if="this.roundNumber <= 5">
            <GameRound :key="roundNumber" :flags="flags" :roundNum="roundNumber" @nextBtnClicked="updateRoundNumber()" />
        </div>
        <div id="gameEndSection" v-else>
            <GameEnd :results="totalScore" />
        </div>
</template>
  
<script>
import GameRound from '../components/GameRound.vue';
import GameEnd from '../components/GameEnd.vue'
import flagsJson from "@/assets/flags.json";

export default {
    name: 'GameView',
    components: {
        'GameRound': GameRound,
        'GameEnd': GameEnd
    },
    data() {
        return {
            flags: [],
            roundNumber: 1,
            totalScore:0
        };
    },
    methods: {
        getFlags: function () {
            flagsJson.forEach((element) => {
                this.flags.push(element);
            });
        },
        shuffle: function (array) {
            var currentIndex = array.length,
                temporaryValue,
                randomIndex;
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            return array;
        },
        updateRoundNumber(totalScore){
            this.roundNumber += 1;
            this.totalScore=totalScore;
        }
    },
    created() {
        this.getFlags();
        this.shuffle(this.flags);
    }
}
</script>
  
<style scoped>
#gameEndSection{
    margin-top: 400px;
}
</style>
  