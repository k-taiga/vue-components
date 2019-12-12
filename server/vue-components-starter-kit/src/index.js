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
// import EventButtons from './components/EventButtons.vue'

// const app = new Vue({
//   el: '#app',
//   data: {
//     arguments: []
//   },
//   components: {
//     EventButtons
//   },
//   methods: {
//     onEventOne () {
//       alert('Event 1')
//     },
//     onEventTwo (argument) {
//       this.arguments = []
//       this.arguments.push(argument)
//     },
//     onEventThree (arg1, arg2) {
//       this.arguments = []
//       this.arguments.push(arg1)
//       this.arguments.push(arg2)
//     }
//   }
// })

// Components
// import NumberGuess from './components/NumberGuess.vue'

// const app = new Vue({
//   el: '#app',
//   data: {
//     message: 'スタートボタンを押してください',
//     tryCountLeft: 0
//   },
//   components: {
//     NumberGuess
//   },
//   methods: {
//     onStart (tryCountLeft) {
//       this.message = 'スタート！ 🚀'
//       this.tryCountLeft = tryCountLeft
//     },
//     onCollect (tryCountLeft) {
//       this.message = '当たり！ 🎉'
//       this.tryCountLeft = tryCountLeft
//     },
//      onLower (tryCountLeft) {
//       this.message = 'もっと小さいです 👇'
//       this.tryCountLeft = tryCountLeft
//     },
//     onHigher (tryCountLeft) {
//       this.message = 'もっと大きいです️ ️👆'
//       this.tryCountLeft = tryCountLeft
//     },
//     onLose () {
//       this.message = 'ゲームオーバー 👻'
//       this.tryCountLeft = tryCountLeft
//     }
//   }
// })

// Style
import "./app.scss";

// Components
import MarkdownPanel from "./components/MarkdownPanel.vue";

const app = new Vue({
  el: "#app",
  components: {
    MarkdownPanel
  }
});

// Components
// import Card from "./components/Card.vue"

// const app = new Vue({
//   el: "#app",
//   components: {
//     Card
//   },
//   methods: {
//     onClick() {
//       alert("Clicked !")
//     }
//   }
// })
