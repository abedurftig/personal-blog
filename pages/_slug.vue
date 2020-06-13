<template>
  <div class="tile is-ancestor">
    <div class="tile is-2"></div>
    <div v-if="post" class="tile">
      <BlogPost :post="post" :prev="prev" :next="next" />
    </div>
    <div class="tile is-2"></div>
  </div>
</template>
<script>
import BlogPost from '@/components/BlogPost'
export default {
  components: {
    BlogPost
  },
  async asyncData({ $content, params, error, payload }) {
    const post = await $content('articles', params.slug).fetch()
    const [prev, next] = await $content('articles')
      .only(['title', 'path'])
      .where({ published: true })
      .sortBy('date')
      .surround(params.slug)
      .fetch()
    return {
      post,
      prev,
      next
    }
  }
}
</script>
