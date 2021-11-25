import SuperTransition from './components/superTransition.vue'
import 'animate.css'
const vTransition = {
  install(Vue) {
    Vue.component('SuperTransition', SuperTransition)
  }
}

export default vTransition
