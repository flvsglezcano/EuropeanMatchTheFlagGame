<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <div class="container game-box">
    <div class="row">
      <div class="col-6">
        <img src="@/assets/flags-images/Cyprus.png" class="img-invalid" />
      </div>
      <div class="col-6">
        <img src="@/assets/flags-images/Germany.png" class="img-valid" />
      </div>

      <div class="col-6">
        <img src="@/assets/flags-images/Monaco.png"  />
      </div>
      <div class="col-6">
        <img src="@/assets/flags-images/Norway.png"  />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StartGame",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
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
