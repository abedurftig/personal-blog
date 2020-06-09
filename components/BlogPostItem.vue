<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img
              class="is-rounded"
              :src="post.cover_image"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="media-content">
          <NuxtLink :to="link" class="title is-4">{{ post.title }}</NuxtLink>
          <br />
          <p class="subtitle is-6">{{ post.description }}</p>
        </div>
      </div>
      <div class="content">
        Tags:
        <span
          v-for="tag in post.tags"
          :key="tag"
          class="tag is-info is-light"
          >{{ tag }}</span
        >
        <br />
        <time>Published on: {{ post.date | date }}</time>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BlogPostItem',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    link() {
      return this.post.path.replace('articles/', '')
    }
  }
}
</script>
<style lang="scss" scoped>
.card {
  margin-bottom: 10px;
}
.tag:not(:last-child) {
  margin-right: 6px;
}
</style>
