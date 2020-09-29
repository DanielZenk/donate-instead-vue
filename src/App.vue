<template>
  <HelloWorld v-bind:msg="message" />
  <div v-if="randomInfo" id="coin-info">
    {{ randomInfo }} coins spent
  </div>
  <div v-if="randomInfo">
    If you bought coins at reddit's best rate (82,000 coins for 200 CAD), this amount of coins is equivalent to {{ randomInfo / 410 }} CAD!
  </div>
  <div v-if="randomInfo">
    If you bought coins at reddit's worst rate (500 coins for 2 CAD), this amount of coins is equivalent to {{ randomInfo / 250 }} CAD!
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import snoowrap from 'snoowrap';

const r = new snoowrap({
  userAgent: 'test',
  clientId: 'A8vxCsrmlmtJvA',
  clientSecret: 'kbj0llHkMaZQpliUge557AWLcbU',
  refreshToken: '58259128-BP93LKGhl0a2zR-zF5Qj1mXiaZk'
});

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      message: "Donate instead!",
      randomInfo: null
    }
  },
  mounted () {
    r.getSubmission("ix8x2m").fetch()
      .then(submission => {
        var moneySpent = 0;
        console.log(submission);
        const awards = submission.all_awardings;
        for (const award of awards) {
          moneySpent += award.coin_price;
        }
        this.randomInfo = moneySpent;
      });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
