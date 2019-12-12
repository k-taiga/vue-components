<template>
  <div class="form-group">
    <textarea id="MarkdownEditorTextarea"></textarea>
  </div>
</template>

<script>
import SimpleMDE from "simplemde";

export default {
  props: {
    value: { type: String, required: true }
  },
  data() {
    return {
      editor: null
    };
  },
  // mountedフックでコンポーネントにSimpleMDEを適合させる
  mounted() {
    this.editor = new SimpleMDE({
      element: document.getElementById("MarkdownEditorTextarea"),
      status: false,
      toolbar: [
        "bold",
        "italic",
        "heading",
        "|",
        "quote",
        "unordered-list",
        "ordered-list",
        "|",
        "link",
        "image",
        "|",
        "guide"
      ]
    });
    // 作成したSimpleMDEのエディタ内で変更があればemitでinputイベントで入力値を親に通知する
    this.editor.codemirror.on("change", () => {
      this.$emit("input", this.editor.value());
    });
  }
};
</script>
