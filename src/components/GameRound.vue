<template>
  <h1> choose a flag </h1>
  <div class="container game-box">
    <div class="row" v-for="flag in activeRoundFlags" :key="flag.id">
      <div class="col-6">
        <button @click="checkAnswer(flag.id)">
          <img src="flag.imagePath" class="flag.classValidation" />
        </button>
        <p>Game Time:</p>
        <span v-show="flag.showCountryName">{{ flag.country }}</span>
      </div>
    </div>
  </div>
  <p id="AIresponse">AI Response</p>
  <button class="btn btn-primary">
    <!-- :disabled="ifNoSelectionMade"> -->
    Next Round
  </button>
</template>
<script lang="js">

const imagesFolder = "./assets/flag-images/";
export default {
  name: "GameRound",
  props: ["flags"],
  data() {
    return {
      activeRoundFlags: [],
      nextRound: Number,
      round1: [],
      answerRound1: Number,
      round2: [],
      answerRound2: Number,
      round3: [],
      answerRound3: Number,
      round4: [],
      answerRound4: Number,
      round5: [],
      answerRound5: Number,
      flagModel:{
        id: Number,
        country: String,
        apiKeyWord: String,
        imagePath: String,
        isRoundAnswer:Boolean,
        showCountryName:Boolean,
        classValidation:String
      }
    };
  },
  computed:{
    ifNoSelectionMade() {
      return true;
    },
  },
  methods: {
    setFlagsPerRound: function () {
      this.flags.forEach((flagData) => {
        let flag = JSON.parse(flagData);
        console.log(flag.id);
        let element = this.flagModel(flag.id, flag.country, flag.apiKeyWord, `${imagesFolder}${flag.imagePath}`, false, false,"");
        switch (flag.id) {
          case 1:
          case 2:
          case 3:
          case 4: {
            this.round1.push(element);
            this.answerRound1 = this.getRandomInt(1, 5);
            let correctAnswer = this.round1.find(
              (e) => e.id === this.answerRound1.id
            );
            correctAnswer.setActiveRound(true);
            break;
          }
          case 5:
          case 6:
          case 7:
          case 8: {
            this.round2.push(element);
            this.answerRound2 = this.getRandomInt(5, 9);
            let correctAnswer = this.round1.find(
              (e) => e.id === this.answerRound2.id
            );
            correctAnswer.setActiveRound(true);

            break;
          }
          case 9:
          case 10:
          case 11:
          case 12: {
            this.round3.push(element);
            this.answerRound3 = this.getRandomInt(9, 13);
            let correctAnswer = this.round1.find(
              (e) => e.id === this.answerRound3.id
            );
            correctAnswer.setActiveRound(true);

            break;
          }
          case 13:
          case 14:
          case 15:
          case 16: {
            this.round4.push(element);
            this.answerRound4 = this.getRandomInt(13, 17);
            let correctAnswer = this.round1.find(
              (e) => e.id === this.answerRound4.id
            );
            correctAnswer.setActiveRound(true);

            break;
          }
          case 17:
          case 18:
          case 19:
          case 20: {
            this.round5.push(element);
            this.answerRound5 = this.getRandomInt(17, 21);
            let correctAnswer = this.round1.find(
              (e) => e.id === this.answerRound5.id
            );
            correctAnswer.isRoundAnswer = true;
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
    setActiveRound: function (round) {
      switch (round) {
        case 1: {
          this.activeRoundNumber = 1;
          this.activeRoundFlags = this.round1;
          this.nextRound = 2;
          break;
        }
        case 2: {
          this.activeRoundNumber = 2;
          this.activeRoundFlags = this.round2;
          this.nextRound = 3;
          break;
        }
        case 3: {
          this.activeRoundNumber = 3;
          this.activeRoundFlags = this.round3;
          this.nextRound = 4;
          break;
        }
        case 4: {
          this.activeRoundNumber = 4;
          this.activeRoundFlags = this.round4;
          this.nextRound = 5;
          break;
        }
        case 5: {
          this.activeRoundNumber = 5;
          this.activeRoundFlags = this.round5;
          this.nextRound = -1;
          break;
        }
        default:
          break;
      }
    },
    checkAnswer: function (id) {
      switch (this.activeRoundNumber) {
        case 1: {
          let answerFlag1 = this.round1.find((e) => e.id === id);
          if (answerFlag1.isRoundAnswer === true) {
            answerFlag1.showCountryName = true;
            answerFlag1.classValidation = "img-valid";
            //TODO ....
            // call AI
            // disable all buttons
            // enable "Next button"
          } else {
            //TODO ....
            answerFlag1.classValidation = "img-invalid";
          }
          break;
        }
        case 2: {
          let answerFlag2 = this.round2.find((e) => e.id === id);
          if (answerFlag2.isRoundAnswer === true) {
            answerFlag2.showCountryName = true;
            answerFlag2.classValidation = "img-valid";
            //TODO ....
            // call AI
            // disable all buttons
            // enable "Next button"
          } else {
            //TODO ....
            answerFlag2.classValidation = "img-invalid";
          }
          break;
        }
        case 3: {
          let answerFlag3 = this.round2.find((e) => e.id === id);
          if (answerFlag3.isRoundAnswer === true) {
            answerFlag3.showCountryName = true;
            answerFlag3.classValidation = "img-valid";
            //TODO ....
            // call AI
            // disable all buttons
            // enable "Next button"
          } else {
            //TODO ....
            answerFlag3.classValidation = "img-invalid";
          }
          break;
        }
        case 4: {
          let answerFlag4 = this.round2.find((e) => e.id === id);
          if (answerFlag4.isRoundAnswer === true) {
            answerFlag4.showCountryName = true;
            answerFlag4.classValidation = "img-valid";
            //TODO ....
            // call AI
            // disable all buttons
            // enable "Next button"
          } else {
            //TODO ....
            answerFlag4.classValidation = "img-invalid";
          }
          break;
        }
        case 5: {
          let answerFlag5 = this.round2.find((e) => e.id === id);
          if (answerFlag5.isRoundAnswer === true) {
            answerFlag5.showCountryName = true;
            answerFlag5.classValidation = "img-valid";
            //TODO ....
            // call AI         
            // set session score = 2
          } else {
           
            answerFlag5.classValidation = "img-invalid";
             //TODO ....
             //
          }
           // disable all buttons
           // enable "Next button"
            //  save session data
            // set session score = 0

          break;
        }
      }
    },
    moveToNextRound: function (next) {
      this.setActiveRound(next);
      // TODO; ....
    },


  },
  create() {
    this.setFlagsPerRound();
    this.setActiveRound(1);
  },
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
