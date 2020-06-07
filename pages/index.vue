<template>
  <div class="columns is-mobile is-gapless">
    <div class="column is-hidden-mobile"></div>
    <div class="column">
      <div v-if="posts">
        <div v-for="post in posts" :key="post.title">
          <BlogPostItem :post="post" />
        </div>
      </div>
    </div>
    <div class="column is-hidden-mobile"></div>
  </div>
</template>
<script>
import BlogPostItem from '@/components/BlogPostItem'
export default {
  name: 'BlogPage',
  components: {
    BlogPostItem
  },
  async asyncData({ $content }) {
    const posts = await $content('articles')
      .sortBy('createdAt', 'desc')
      .fetch()
    return {
      posts
    }
  }
}
</script>
