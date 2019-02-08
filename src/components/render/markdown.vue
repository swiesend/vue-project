<template>
    <div class="markdown" v-html="html">
      <slot></slot>
    </div>
</template>

<script>
const marked = require("marked");

export default {
  name: 'markdown',
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
    getContent(file) {
      // we are in '/src/components/render' thus we have to get back with a relative to get to the assets.
      // FIXME: infinit loop, when requiring a markdown file.
      // return require("../../assets/content/" + file);
      return require("../../assets/txt/file.txt");
    }
  },
  computed: {
    content() {
      var markdown = "";
      if (this.file) {
        // markdown += "dummy"
        // markdown += require("../../assets/content/" + this.file)
        markdown += this.getContent(this.file)
      }
      if (this.files) {
        this.files.forEach(file => {
          markdown += this.getContent(file) + "\n\n";
          // markdown += require("../../assets/content/example.md") + "\n\n";
        });
      }
      if(this.raw) {
        markdown += this.raw
      }
      if(this.$slots.default) {
        this.$slots.default.forEach(item => {
          markdown += item.text + "\n"
        })        
      }
      return markdown
    },
    html() {
      return marked(this.content);
    }
  }
}
</script>
