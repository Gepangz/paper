<template>
    <div>
        <table @click="read">
            <tr>
                <th>文献</th>
                <th>总结</th>
            </tr>
            <tr v-for="item in information">
                <td :name="item.link">
                    {{ item.paper }}
                </td>
                <td>
                    {{ item.note }}
                </td>
            </tr>
        </table>
        <Win :src="src"></Win>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Win from './parts/win'

export default {
  data () {
    return {
      src: ''
    }
  },
  computed: mapGetters([
    'information'
  ]),
  mounted () {
    this.$store.dispatch('syncInfor')
  },
  methods: {
    read: function (event) {
      let target = event.target
      let _src = target.getAttribute('name')

      if (_src && this.src !== _src) {
        this.src = _src
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
    background: #e5e5e5;
}
table {
    display: inline-block;
    width: auto;
    height: 150px;
    overflow: scroll;
    background: #f5f5f5;
}
td {
    width: 450px;
    padding: 10px 10px;
    word-wrap: normal;
    border-bottom: 1px solid #000;
}
iframe {
    width: 100%;
    height: 800px;
}
</style>
