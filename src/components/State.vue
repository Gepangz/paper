<template>
  <div>
    <h5>欢迎：{{ account }}</h5>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters([
    'account'
  ])
}
</script>

<style scoped>
div {
  background: url(http://www.inhave.cc/image/batman.jpg);
  background-size: 100% 100%;
  width: 100%;
  height: 170px;
  padding-top: 20px;
}
</style>
