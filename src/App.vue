<template>
  <div id="app">
    <panel :log="logIn"></panel>
    <div class="wrap">
      <div class="nav">
        <State></State>
        <router-link class="link" to="/Read">阅读文献</router-link>
        <router-link class="link"  to="/Upload">上传文献</router-link>
      </div>
      <div class="box">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Panel from './components/Panel'
import State from './components/State'

import './styles/reset.css'

export default {
  name: 'app',
  computed: {
    logIn: function () {
      return this.$store.state.userState.logState
    }
  },
  created () {
    this.$store.commit('storeUser')
  },
  components: {
    Panel,
    State
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 800px;
  overflow: hidden;
}

.nav {
  float: left;
  position: relative;
  width: 20%;
  max-width: 300px;
  height: 800px;
  margin-left: -18%;

  transition: margin-left 1s;
  -moz-transition: margin-left 1s;
  -webkit-transition: margin-left 1s;
  -o-transition: margin-left 1s;

  box-shadow: 0 0 10px #000;
}
.nav::after {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto 0;
  content: "";
  display: block;
  width: 30px;
  height: 30px;
  border-top: 1px solid #000;
  border-right: 1px solid #000;
  transform: rotate(45deg);
}
.nav:hover {
  margin-left: 0%;
}
.nav:hover::after {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto 0;
  content: "";
  display: block;
  width: 30px;
  height: 30px;
  border: none;
  border-bottom: 1px solid #000;
  border-left: 1px solid #000;
  transform: rotate(45deg);
}
.nav .link {
  display: block;
  margin: 50px auto 0 auto;
  text-decoration: none;
  height: 50px;
  line-height: 50px;
  border: 1px dotted #333;
}
.box {
  float: left;
  margin-right: -30%;
  width: 100%;
  height: 800px;
}
.wrap::after {
  content: "";
  display: block;
  visibility: hidden;
  clear: both;
}
</style>
