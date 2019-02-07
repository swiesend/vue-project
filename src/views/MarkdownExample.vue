<template>
    <div>
        <Markdown file="file"/>
        <Markdown files="files"/>
        <Markdown md="raw"/>
    </div>
</template>

<script>
// @ is an alias to /src
import Markdown from '@/components/Markdown.vue'

// content = require('@/assets/content/example.html');
// content = "<div>inserted</div>"

export default {
  name: 'Markdown Example',
  data() {
    return {
        file: "example.md",
        files: ["example.1.md", "example.2.md"],
        raw: "# Title\na new paragraph\nanother paragraph\nA listing:\n\n*first\n\*second\n*third"
    }
  },
  components: {
    Markdown
  }
}
</script>
