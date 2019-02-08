<template>
    <div>
        <br>
        First Markdown from one file:<br>
        <Markdown :file="file"/><br>
        Second Markdown joined from two files:<br>
        <Markdown :files="files"/><br>
        Third Markdown from raw input:<br>
        <Markdown :raw="raw"/><br>
    </div>
</template>

<script>
import Markdown from '@/components/render/Markdown.vue'

export default {
  name: 'MarkdownExample',
  data() {
    return {
      file: "example.md",
      files: ["example.1.md", "example.2.md"],
      raw: "# Title\na new paragraph\n\nanother paragraph\n\nA listing:\n\n* first\n* second\n* third"
    }
  },
  components: {
    Markdown
  },
}
</script>
