<template>
  <div class="form-group">
    <textarea
      class="form-input"
      :value="text"
      @input="onInput"
      rows="10"
    ></textarea>
  </div>
</template>

<script>
export default {
  // 親から受け取る
  props: {
    value: { type: String, required: true }
  },
  data () {
    return { text: this.value }
  },
  methods: {
    onInput ($event) {
      this.text = $event.target.value
      // $emitで値が入力されたら親コンポーネントであるMarkdownPanelにイベント発行＆入力値を渡す
      this.$emit('input', this.text)
    }
  }
}
</script>
