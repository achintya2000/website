import Vue from 'vue'
const VueParticles = () => import('vue-particles')

export default () => {
  Vue.use(VueParticles)
}