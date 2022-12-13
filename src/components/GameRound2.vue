<template>
  <div class="container game-box"  >
    
    <div class="row">
      <div class="col-6">
        <button >
          <img src="@/assets/flags-images/Cyprus.png" class="img-invalid" />
        </button>        
      </div>
      <div class="col-6">
        <img src="@/assets/flags-images/Germany.png" class="img-valid" />
      </div>

      <div class="col-6">
        <img src="@/assets/flags-images/Monaco.png" />
      </div>
      <div class="col-6">
        <img src="@/assets/flags-images/Norway.png" />
      </div>
    </div>

    {{round2}}
    <br/><br/>
    Answer:
    {{answerRound2.country}}
    <br/>

    <router-link class="btn btn-primary" :to="{ name: 'GameRound3', props: {flagData: flags} }">Next Round</router-link>
  </div>
</template>
<script>
export default {
  name: "GameRound2",
  props: ["flagData"],
  data() {
    return {
      flags: this.flagData,
      round2: [],
      answerRound2: "",
      roundNumber: Number,
      activeRoundFlags: [],
      activeRoundAnswer: ""
    };
  },
  methods: {
    setFlagsPerRound: function () {
      this.flags.forEach((element) => {
        switch (element.id) {
          case 5:
          case 6:
          case 7:
          case 8:
            {
              this.round2.push(element);
              let randomAnswer = this.getRandomInt(5, 9);
              this.answerRound2 = this.round2.find(item => item.id === randomAnswer);
              this.roundNumber = 2;
              break;
            }
          default:
            break;
        }
      });
    },
    getRandomInt: function (minValue, maxValue) {
      minValue = Math.ceil(minValue);
      maxValue = Math.floor(maxValue);
      return Math.floor(Math.random() * (maxValue - minValue) + minValue); // The maximum is exclusive and the minimum is inclusive
    },
    ifNoSelectionMade() {
      return true;
    },
    updateSession(round) {
      if (round.isCorrectAnswer) {
        this.totalScore = this.totalScore + 20;
      }
    }
  },
  mounted(){
    this.setFlagsPerRound();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  margin: 1rem;
  border: 5px solid rgb(244, 242, 248);
  border-radius: 5px;
  padding: 1rem;
  width: 360px !important;
  height: 260px !important;
}
.img-valid {
  border: 15px solid rgb(4, 127, 12);
}
.img-invalid {
  border: 15px solid rgb(167, 9, 46);
}

.game-box {
  position: relative;
  max-width: 840px;
  background-color: rgb(93, 210, 236);
  border: 5px solid rgb(244, 242, 248);
}
</style>
