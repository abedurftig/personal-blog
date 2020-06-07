<template>
  <div class="columns is-mobile is-gapless">
    <div class="column is-hidden-mobile"></div>
    <div class="column">
      <About />
    </div>
    <div class="column is-hidden-mobile"></div>
  </div>
</template>
<script>
import About from '@/components/About'
export default {
  components: {
    About
  }
}
</script>
