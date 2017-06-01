<template>
    <div v-if="log">
        <form v-on:submit.prevent="logIn" @change="userIn">
            <label name="account">
                <input id="account" name="account" v-model="account" placeholder="账号" />
            </label>
            <label name="sercet">
                <input id="sercet" name="sercet" type="password" v-model="password" placeholder="密码"/>
            </label>
            <input type="submit" value="登陆" />
        </form>
    </div>
</template>
<script>
import handlecookie from '../unit/cookie'

export default {
  data () {
    return {
      account: '',
      password: ''
    }
  },
  props: {
    'log': Boolean
  },
  methods: {
    userIn: function (event) {
      this.$store.commit('userIn', this.$data)
    },
    logIn: function (event) {
      if (this.account && this.password) {
        handlecookie.set('account', this.account, 7)
        handlecookie.set('password', this.password, 7)
        this.$store.dispatch('logIn').then(() => {
          this.$store.dispatch('syncInfor', this.account)
        })
      }
    }
  }
}
</script>
<style scoped>
div {
    position: absolute;
    top: 0;
    width: 100%;
    height: 900px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    z-index: 3;
}
form {
    position: absolute;
    top: 10%;
    left: 0;
    right: 0;
    margin: auto auto;
    width: 40%;
    max-width: 450px;
    height: 40%;
    background: rgba(3, 3, 3, 1);
    box-shadow: 0px 0px 10px #000;
    text-align: center;
}
label {
    display: block;
    margin: 50px auto;
    font-size: 30px;
}
input {
    width: 70%;
    height: 50px;
}
</style>
