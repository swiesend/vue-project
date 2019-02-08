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
    }
  },
  data() {
    return {
      example: {
        markdown: "# title\n\nThis is a paragraph\n\nThis is a another paragraph.",
        html: "<div>hello</div>",
        text: "this is an example text",
      }
    }
  },
  methods: {
    // getContent(f) {
    //   // we are in '/src/components/render' thus we have to get back with a relative to get to the assets.
    //   const ctnt = require("../../assets/content/" + f);
    //   return ctnt;
    // }
  },
  computed: {
    content() {
      var markdown = "";
      if (this.file) {
        // markdown += "dummy"
        // markdown += require("../../assets/content/" + this.file)
        markdown += require("../../assets/content/example.md")
      }
      if (this.files) {
        this.files.forEach(f => {
          // markdown += this.getContent(f) + "\n\n";
          markdown += require("../../assets/content/example.md") + "\n\n";
        });
      }
      if(this.raw) {
        markdown += this.raw
      }
      return markdown
    },
    html() {
      return marked(this.content);
    }
  }
}
</script>
