<template>
  <div>
    <div class="empty" v-if="text === ''">
      No content yet.
    </div>
    <div v-else v-html="html"></div>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  // 親から受け取る
  props: {
    text: { type: String, required: true }
  },
  // 受け取った文字列をmarkdownにする算出プロパティ
  computed: {
    html () {
      return marked($this.text)
    }
  }
}
</script>
