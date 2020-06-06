<template>
  <div>
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page" />
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params, error, payload }) {
    const page = await $content('articles', params.slug).fetch()
    return {
      page
    }
  }
}
</script>
