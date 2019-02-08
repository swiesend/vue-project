<template>
    <div>
        <br>
        First Markdown from one file:<br>
        <markdown :file="file"/><br>
        <br>
        <hr>
        <br>
        Second Markdown joined from two files:<br>
        <markdown :files="files"/><br>
        <br>
        <hr>
        <br>
        Third Markdown from raw input:<br>
        <markdown :raw="raw"/><br>
        <br>
        <hr>
        <br>
        Fourth Markdown from parents input as slot:<br>
        <markdown>
This is a text body


* list item

This is some code:

    code indention
</markdown><br>
    </div>
</template>

<script>
import markdown from '@/components/render/markdown.vue'

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
    markdown
  },
}
</script>
