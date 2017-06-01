<template>
  <iframe :src="link">
  </iframe>
</template>
<script>
export default {
  props: {
    link: String
  }
}
</script>
<style scoped>
iframe {
  margin-top: 30px;
  width: 80%;
  height: 800px;
}
</style>
