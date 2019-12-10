<template>
  <div>
    <button @click="emitEventOne">Event 1</button>
    <button @click="emitEventTwo">Event 2</button>
    <button @click="emitEventThree">Event 3</button>
  </div>
</template>

<script>
export default {
  methods: {
    emitEventOne () {
      // 1つ目の引数はイベントの名前
      // $emitは子から親へのイベントの通知
      this.$emit('event-one')
    },
    emitEventTwo () {
      // ２つ目の引数はイベントハンドラに渡される引数
      this.$emit('event-two', 'This is an argument')
    },
    emitEventThree () {
      // ２つ目以降もイベントハンドラに渡される引数
      this.$emit('event-three', 123, { name:'three'})
    }
  }
}
</script>

