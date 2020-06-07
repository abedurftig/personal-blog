<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-128x128">
            <img
              class="is-rounded"
              src="arneb_2017_dark_128x128.jpeg"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="media-content">
          <h1 class="title">Arne Bedürftig</h1>
          <p class="subtitle is-4">Curious Software Engineer</p>
        </div>
      </div>
      <div class="content">
        <p>This is me.</p>
      </div>
      <footer class="card-footer">
        <a href="https://github.com/abedurftig" class="card-footer-item">
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/arnebeduerftig"
          class="card-footer-item"
        >
          LinkedIn
        </a>
        <a href="https://dev.to/abedurftig" class="card-footer-item">
          DEV
        </a>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: 'About'
}
</script>
<style lang="scss" scoped>
.card-footer {
  border-top: 0px;
}
.card-footer-item:not(:last-child) {
  border-right: 0px;
}
</style>
