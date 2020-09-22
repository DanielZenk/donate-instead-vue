<template>
  <HelloWorld v-bind:msg="message" />
  <div>
    {{ randomInfo }} coins spent
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
      message: "heyoooo",
      randomInfo: null
    }
  },
  mounted () {
    r.getSubmission("ix8x2m").fetch()
      .then(submission => {
        var moneySpent = 0;
        const awards = submission.all_awardings
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
