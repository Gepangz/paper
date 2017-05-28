import Vue from 'vue'
import VueRouter from 'vue-router'
import Upload from '../components/Upload'
import Read from '../components/Read'

Vue.use(VueRouter)

const routers = [
  { path: '/Upload', component: Upload },
  { path: '/Read', component: Read }
]

export default new VueRouter({
  routes: routers
})
