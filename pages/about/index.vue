<template>
  <div class="columns is-mobile is-gapless">
    <div class="column is-hidden-mobile is-hidden-tablet"></div>
    <div class="column">
      <About>
        <nuxt-content :document="page" />
      </About>
    </div>
    <div class="column is-hidden-mobile is-hidden-tablet"></div>
  </div>
</template>
<script>
import About from '@/components/About'
export default {
  components: {
    About
  },
  async asyncData({ $content }) {
    const page = await $content('about/index').fetch()
    return {
      page
    }
  }
}
</script>
