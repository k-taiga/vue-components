import Vue from 'vue'

// Components
// import AnchorLink from './components/AnchorLink.vue'

// new Vue({
//   el: '#app',
//   components: {
//     AnchorLink
//   }
// })


// Components
import EventButtons from './components/EventButtons.vue'

const app = new Vue({
  el: '#app',
  data: {
    arguments: []
  },
  components: {
    EventButtons
  },
  methods: {
    onEventOne () {
      alert('Event 1')
    },
    onEventTwo (argument) {
      this.arguments = []
      this.arguments.push(argument)
    },
    onEventThree (arg1, arg2) {
      this.arguments = []
      this.arguments.push(arg1)
      this.arguments.push(arg2)
    }
  }
})
