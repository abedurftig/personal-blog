<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-128x128">
            <img class="is-rounded" :src="imageLink" alt="Placeholder image" />
          </figure>
        </div>
        <div class="media-content">
          <h1 class="title">{{ post.title }}</h1>
          <p class="subtitle is-4">{{ post.description }}</p>
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
        <div class="published-date">
          <time>Published on: {{ post.date | date }}</time>
        </div>
        <hr />
        <nuxt-content :document="post" />
        <hr />
        <div v-if="post.devToUrl">
          This post has also been published at <b>DEV</b>. Head over there to
          <a :href="post.devToUrl">join the discussion</a>.
        </div>
      </div>
      <footer class="card-footer">
        <NuxtLink v-if="prev" :to="prev.slug" class="card-footer-item"
          >Previous</NuxtLink
        >
        <NuxtLink v-if="next" :to="next.slug" class="card-footer-item"
          >Next</NuxtLink
        >
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BlogPost',
  props: {
    post: {
      type: Object,
      required: true
    },
    prev: {
      type: Object,
      required: false,
      default: null
    },
    next: {
      type: Object,
      required: false,
      default: null
    }
  },
  computed: {
    imageLink() {
      return this.post.cover_image
    }
  }
}
</script>
<style lang="scss" scoped>
.card-footer {
  border-top: 0px;
}
.card-footer-item:not(:last-child) {
  border-right: 0px;
}
.card .media:not(:last-child) {
  margin-bottom: 0px;
}
hr {
  margin-top: 15px;
  margin-bottom: 15px;
}
.tag:not(:last-child) {
  margin-right: 6px;
}
</style>
