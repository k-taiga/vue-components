<template>
  <div>
    <p>
      <button @click="start">start</button>
    </p>
    <div v-if="answer > 0">
      <input
        type="number"
        v-model.number="num"
        @keyup.enter="guess"/>
    </div>
  </div>
</template>

<script>
export default {
  // コンポーネントのインスタンスが作成されるたびに、異なるデータを扱うためインスタンスのプロパティであるdataはオブジェクトではなく関数型で返すようにする
  // じゃないと同じコンポーネントで作成されたインスタンスで何かイベントを行うとそのオブジェクトのものの値がすべて変わる
  data () {
    return {
      answer: 0, //答え
      num: 0, //予想した数
      tryCountLeft: 10 //残りの回数
    }
  },
  methods: {
    start () {
      // それぞれのデータの初期化
      this.answer = Math.floor(Math.random() * (100 - 1) + 1)
      this.num = 0
      this.tryCountLeft = 10
      // startイベント発行 引数に残回数を渡す
      this.$emit('start', this.tryCountLeft)
    }
    guess () {
      this.tryCountLeft -= 1

      if (this.answer === this.num) {
        // collectイベント発行
        // 正解したことを通知するイベント 引数に残回数を渡す
        this.$emit('collect', this.tryCountLeft)
        return
      }

      if (this.tryCountLeft === 0) {
        // loseイベント発行
        // 負けたことを通知する 引数に残回数を渡す
        this.$emit('lose', this.tryCountLeft)
      } else if (this.answer < this.num) {
        // lowerイベント発行
        // 正解はより小さい数であることを教える 引数に残を渡す
        this.$emit('lower', this.tryCountLeft)
      } else {
        // higherイベント
        // 正解はより大きい数であることを教える
        this.$emit('higher', this.tryCountLeft)
      }
    }
  }
}
</script>
