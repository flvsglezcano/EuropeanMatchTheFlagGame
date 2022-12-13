<template>
  <h1>choose a flag</h1>
  <div class="container game-box">
    <div class="row" v-for="flag in activeRoundFlags" :key="flag.id">
      <div class="col-6">
        <button
          @click="checkAnswer(flag.id)"
          class="flagBtn"
          :disabled="flag.isBntDisabled"
        >
          <img :src="flag.imagePath" :class="flag.classValidation" />
        </button>
        <p>Game Time:</p>
        <span v-show="flag.showCountryName">{{ flag.country }}</span>
      </div>
    </div>
  </div>
  <p id="AIresponse">AI Response</p>
  <button
    class="btn btn-primary"
    @click="moveToNextRound()"
    id="nextBtn"
    :disabled="inNextBtnDisable"
  >
    Next Round
  </button>
</template>

<script lang="js">

class flagModel {
    constructor (id,
        country,
        apiKeyWord,
        imagePath,
        isRoundAnswer,
        showCountryName,
        classValidation,
        isBtnDisabled)
        {
         this.id= id;
        this.country = country,
        this.apiKeyWord = apiKeyWord,
        this.imagePath = imagePath,
        this.isRoundAnswer =isRoundAnswer,
        this.showCountryName =showCountryName,
        this.classValidation =classValidation,
        this.isBtnDisabled= isBtnDisabled
      }
       setRoundAnswer(value)
       {
        this.isRoundAnswer = value;
       }
    }
export default {
  name: "GameRound",
  props: ["flags", "roundNum"],
  data() {
    return {
      flagData:[],
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

      isBntDisabled:Boolean, 
      aiResponse:"",
      totalScore:0
    };
  },
  computed:{
    ifNoSelectionMade() {
      return true;
    },
  },
  methods: {
    setflagModel: function (
      id,
      country,
      apiKeyWord,
      imagePath,
      isRoundAnswer,
      showCountryName,
      classValidation,
      isBtnDisabled) {
      return new flagModel(id,
        country,
        apiKeyWord,
        imagePath,
        isRoundAnswer,
        showCountryName,
        classValidation,
        isBtnDisabled
      )
    },
    setFlagsPerRound: function () {
      this.flags.forEach((flagJson) => {
        let flag = JSON.parse(JSON.stringify(flagJson));
        console.log(flag)
        console.log(flag.id);
        let element = this.setflagModel(flag.id, flag.country, flag.apiKeyWord, require(`../assets/flags-images/${flag.image}`), false, false, "", false);
        this.flagData.push(element);
      });

      this.round1 = this.flagData.slice(0, 4);
      this.round2 = this.flagData.slice(4, 8);
      this.round3 = this.flagData.slice(8, 12);
      this.round4 = this.flagData.slice(12, 16);
      this.round5 = this.flagData.slice(16, 20);

      this.answerRound1 = this.getRandomInt(this.round1);
      let correctAnswer1 = this.round1.filter(
        (e) => e.id === this.answerRound1
      );
      correctAnswer1.isRoundAnswer = true;

      this.answerRound2 = this.getRandomInt(this.round2);
      let correctAnswer2 = this.round2.filter(
        (e) => e.id === this.answerRound2
      );
      correctAnswer2.isRoundAnswer = true;

      this.answerRound3 = this.getRandomInt(this.round3);
      let correctAnswer3 = this.round3.filter(
        (e) => e.id === this.answerRound3
      );
      correctAnswer3.isRoundAnswer = true;

      this.answerRound4 = this.getRandomInt(this.round4);
      let correctAnswer4 = this.round4.filter(
        (e) => e.id === this.answerRound4
      );
      correctAnswer4.isRoundAnswer = true;

      this.answerRound5 = this.getRandomInt(this.round5);
      let correctAnswer5 = this.round5.filter(
        (e) => e.id === this.answerRound5
      );
      correctAnswer5.isRoundAnswer = true;
    },
    getRandomInt: function (round) {
      console.log(round);
      let ids= round.map (a=>a.id);
      //var minValue = Math.min(ids);
      //var maxValue = Math.max(ids);
      return ids[Math.floor(Math.random() * ids.length)];
      //return Math.floor(Math.random() * (maxValue - minValue) + minValue); // The maximum is exclusive and the minimum is inclusive
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
            this.aiResponse=this.getConversation(answerFlag1.apiKeyWord); 
            // disable all buttons
            // enable "Next button"
            //set session
            this.setSession();
          } else {
            //TODO ....
            answerFlag1.classValidation = "img-invalid";
          }
          this.disableRoundButtons(this.round1);
           this.isBntDisabled= false;
          break;
        }
        case 2: {
          let answerFlag2 = this.round2.find((e) => e.id === id);
          if (answerFlag2.isRoundAnswer === true) {
            answerFlag2.showCountryName = true;
            answerFlag2.classValidation = "img-valid";
            //TODO ....
            // call AI
            this.aiResponse=this.getConversation(answerFlag2.apiKeyWord);
            // disable all buttons
            // enable "Next button"
            //set session
            this.setSession();
          } else {
            //TODO ....
            answerFlag2.classValidation = "img-invalid";
          }
          this.disableRoundButtons(this.round2);
           this.isBntDisabled= false;

          break;
        }
        case 3: {
          let answerFlag3 = this.round3.find((e) => e.id === id);
          if (answerFlag3.isRoundAnswer === true) {
            answerFlag3.showCountryName = true;
            answerFlag3.classValidation = "img-valid";
            //TODO ....
            // call AI
            this.aiResponse=this.getConversation(answerFlag3.apiKeyWord);
            // disable all buttons
            // enable "Next button"
            //set session
            this.setSession();
          } else {
            //TODO ....
            answerFlag3.classValidation = "img-invalid";
          }
          this.disableRoundButtons(this.round3);
           this.isBntDisabled= false;

          break;
        }
        case 4: {
          let answerFlag4 = this.round4.find((e) => e.id === id);
          if (answerFlag4.isRoundAnswer === true) {
            answerFlag4.showCountryName = true;
            answerFlag4.classValidation = "img-valid";
            //TODO ....
            // call AI 
            this.aiResponse=this.getConversation(answerFlag4.apiKeyWord);
            // disable all buttons
            // enable "Next button"
            //set session
            this.setSession();
          } else {
            //TODO ....
            answerFlag4.classValidation = "img-invalid";
          }
          this.disableRoundButtons(this.round4);
           this.isBntDisabled= false;

          break;
        }
        case 5: {
          let answerFlag5 = this.round5.find((e) => e.id === id);
          if (answerFlag5.isRoundAnswer === true) {
            answerFlag5.showCountryName = true;
            answerFlag5.classValidation = "img-valid";
            //TODO ....
            // call AI         
            this.aiResponse=this.getConversation(answerFlag5.apiKeyWord);
            //set session
            this.setSession();
          } else {

            answerFlag5.classValidation = "img-invalid";
             //TODO ....
             //set session score = 0 an

          }
          this.disableRoundButtons(this.round5);
           this.isBntDisabled= false;
          break;
        }
      }
    },
    moveToNextRound: function () {
      this.setActiveRound(this.roundNum);
      this.$emit('nextBtnClicked')
      // TODO gianmarco....
    },
    getConversation:async function(message) { 
      var accessToken = "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";
      var body = {
          model: "text-davinci-003",
          prompt: "".concat(message),
      };
      const axios=require("axios");
      var res = await axios.post('https://api.openai.com/v1/completions', body, {
          headers: {
              authorization: "Bearer ".concat(accessToken),
              "Content-Type": "application/json",
          },
      }); 
      this.aiResponse=res.data.choices[0].text;
      return res.data.choices[0].text;
    },
    setSession:function(){ 
        this.totalScore=this.totalScore+20;  
    },
    
    disableRoundButtons: function(data)
    {
      data.forEach( element => {
            element.isBtnDisabled = true;
           })
    }
  },
  created() {
    this.getConversation("Fun fact about Italy");
    this.setFlagsPerRound();
    this.setActiveRound(1);
    this.isBntDisabled = true;
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
