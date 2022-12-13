<template>
  <h1>choose a flag</h1>
  <div class="container game-box">
    <div class="row" v-for="flag in activeRoundFlags" :key="flag.id">
      <div class="col-6" :id="flag.id">
        <button @click="checkAnswer(flag.id)" :disabled="flag.isBtnDisabled">
          <img :src="flag.imagePath" :class="flag.classValidation" />
        </button>
        <!-- <p>Game Time:</p>
        <span v-show="flag.showCountryName">{{ flag.country }}</span> -->
      </div>
    </div>
  </div>
  <p id="AIresponse">{{aiResponse}}</p>
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
const imagesFolder = "../assets/flags-images/";
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
        isBtnDisabled)
        {
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
      console.log(this.flags);
      this.flags.forEach((flagJson) => {
        let flag = JSON.parse(JSON.stringify(flagJson));
        console.log(flag)
        console.log(flag.id);
        var fullpath=`${imagesFolder}${flag.image}`;
        console.log("fullpath");
        console.log(fullpath);
        let element = this.setflagModel(flag.id, flag.country, flag.apiKeyWord, require(`../assets/flags-images/${flag.image}`) , false, false, "", false);
        this.flagData.push(element);
      });
      this.round1 = this.flagData.slice(0, 4);
      this.round2 = this.flagData.slice(4, 8);
      this.round3 = this.flagData.slice(8, 12);
      this.round4 = this.flagData.slice(12, 16);
      this.round5 = this.flagData.slice(16, 20);

      console.log("Round1");
      console.log(this.round1);
      this.answerRound1 = this.getRandomInt(this.round1); 
      console.log("Answer Round1");
      console.log(this.answerRound1);
      let correctAnswer1 = this.round1.find(
        (e) => e.id === this.answerRound1
      );
      console.log("correct answer1");
      console.log(correctAnswer1);
      correctAnswer1.setRoundAnswer(true);
      console.log(correctAnswer1.isRoundAnswer);


      console.log(this.round2);
      this.answerRound2 = this.getRandomInt(this.round2); 
      let correctAnswer2 = this.round2.find(
        (e) => e.id === this.answerRound2
      );
      correctAnswer2.setRoundAnswer(true);


      console.log(this.round3);
      this.answerRound3 = this.getRandomInt(this.round3); 
      let correctAnswer3 = this.round3.find(
        (e) => e.id === this.answerRound3
      );
      correctAnswer3.setRoundAnswer(true);


      console.log(this.round4);
      this.answerRound4 = this.getRandomInt(this.round4); 
      let correctAnswer4 = this.round4.find(
        (e) => e.id === this.answerRound4
      );
      correctAnswer4.setRoundAnswer(true);



      console.log(this.round5);
      this.answerRound5 = this.getRandomInt(this.round5); 
      let correctAnswer5 = this.round5.find(
        (e) => e.id === this.answerRound5
      );
      correctAnswer5.setRoundAnswer(true);

    },
    getRandomInt: function (round) {
      let ids=round.map(a=>a.id);
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
      console.log("button clicked");
      console.log(this.activeRoundNumber);
      switch (this.activeRoundNumber) {
        case 1: {
          let answerFlag1 = this.round1.find((e) => e.id === id);
          console.log(answerFlag1);
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
           //this.round1.forEach((flag)=>{
            //$('#'+flag.id).attr('disabled','disabled');
           //})
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
      this.$emit('nextBtnClicked',this.totalScore);
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
      if(localStorage.getItem("totalScore")===null|| localStorage.getItem("totalScore") === undefined){
        localStorage.setItem("totalScore","0");
      }
      var totalScore=localStorage.getItem("totalScore")+20;
      localStorage.setItem("totalScore",totalScore) ;
    },
    
    disableRoundButtons: function(data)
    {
      data.forEach( element => {
            element.isBtnDisabled = true;
           })
    }
  },
  created() {
    //this.getConversation("Fun fact about Italy");
    this.setFlagsPerRound();
    this.setActiveRound(this.roundNum);
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
