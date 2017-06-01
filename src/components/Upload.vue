<template>
  <div>
    <form enctype="multipart/form-data" action="../back/upload.php" method="post">
      <input type="text" name="user" :value="account" v-show="false" />
      <label>
        <h5>文件:</h5>
        <input type="file" name="file" @change="uploadfile" />
      </label>
      <label>
        <h5>总结:</h5>
        <textarea name="note"></textarea>
      </label>
      <input type="submit" value="上传" />
    </form>
    <win :link="src"></win>
  </div>
</template>

<script>
import Win from './parts/win'
import {mapGetters} from 'vuex'

export default {
  data () {
    return {
      src: 'https://xueshu.baidu.com/'
    }
  },
  computed: mapGetters([
    'account'
  ]),
  methods: {
    uploadfile: function (event) {
      let file = event.target.files[0]
      let _self = this

      if (file.type.indexOf('pdf') !== -1) {
        if (window.FileReader) {
          let fileReader = new FileReader()
          fileReader.readAsDataURL(file)
          fileReader.onloadend = function (e) {
            _self.src = this.result
          }
        }
      } else {
        alert('对不起，兄弟，只支持pdf！')
      }
    }
  },
  components: {
    Win
  }
}
</script>

<style scoped>
div {
  width: 100%;
  background: #e5e5e5;
}
label {
  position: relative;
  width: 500px;
  height: 50px;
  display: block;
  margin: 0 auto;
}
h5 {
  position: absolute;
  top: 10px;
  left: 0;
}
input, textarea {
  width: 300px;
}
</style>
