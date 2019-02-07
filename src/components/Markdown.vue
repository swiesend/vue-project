<template>
    <div class="markdown" v-html="html"></div>
</template>

<script>
const marked = require("marked");

export default {
  name: 'Markdown',
  props: {
    file: {
      type: String,
      required: false
    },
    files: {
      type: Array,
      required: false
    },
    raw: {
      type: String,
      required: false
    },
    inputPath: {
      type: String,
      required: true,
      default: "@/assets/md/"
    },
  },
  data() {
    return {
      content: "",
      example: {
        markdown: "# title\n\nand this is some text\n\nThis is a new paragraph.",
        html: "<div>hello</div>",
      }
    }
  },
  computed: {
    getContent() {
      if (this.file !== undefined) {
        this.content = require(inputPath + this.file);
      } else if (this.files !== undefined) {
        var content = "";
        this.files.forEach(file => {
          content += require(inputPath + this.file) + "\n\n";
        });
        this.content = content
      } else if (this.raw !== undefined) {
        this.content = this.raw
      }
      return this.content
    },
    getHTML() {
      const html = marked(this.content);
      return html;
    }
  }
}
</script>
