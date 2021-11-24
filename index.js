import SuperTransition from './components/superTransiton.vue'
import 'animate.css'
const vTransition = {
  install(Vue) {
    Vue.component('SuperTransition', SuperTransition)
  }
}

export default vTransition
