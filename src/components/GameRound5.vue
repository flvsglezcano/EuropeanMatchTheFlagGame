<template>
  <div class="container game-box"  >
    
    <!-- <div class="row">
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
    </div> -->

    <router-link class="btn btn-primary" :to="{ name: 'GameEnd', props: {flagData: flags} }">Next Round</router-link>

  </div>
</template>
<script>
export default {
  name: "GameRound5",
  props: ["flagData"],
  data() {
    return {
      round1: [],
      answerRound1: "",
      roundNumber: Number,
      activeRoundFlags: [],
      activeRoundAnswer: "",
      round2: [],
      round3: [],
      round4: [],
      round5: [],
    };
  },
  methods: {
    setFlagsPerRound: function () {
      this.flags.forEach((element) => {
        switch (element.id) {
          case "1":
          case "2":
          case "3":
          case "4":
            {
            this.round1.push(element);           
            let randomAnswer = this.getRandomInt(1,5);
            this.answerRound1 = this.round1.find(item=>item.id === randomAnswer);
            this.roundNumber= 1;
            break;
          }
         default:
          break;
        }
      });
    },
  },
  getRandomInt: function (minValue, maxValue) {
    minValue = Math.ceil(minValue);
    maxValue = Math.floor(maxValue);
    return Math.floor(Math.random() * (maxValue -minValue) + minValue); // The maximum is exclusive and the minimum is inclusive
  },
  ifNoSelectionMade() {
    return true;
  },
  updateSession(round) {
    if (round.isCorrectAnswer) {
      this.totalScore = this.totalScore + 20;
    }
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
