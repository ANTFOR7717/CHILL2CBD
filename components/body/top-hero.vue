<template>
  <section class="section container is-widescreen is-medium">
<div class="hero">
<div class="hero-body">
  <div class="container">
    <div class="columns is-gapless is-multiline is-mobile">
      <div class="column is-four-fifths">
      <h1 style="line-height: 100%;" class="is-size-1-mobile is-size-1-desktop has-text-weight-bold has-text-link-dark">
        Discover Single Origin Cannabis Products
      </h1>

          <div class="mt-4" style="color: #68baac;">
            <span class="is-size-6-mobile">100% NATURAL</span> |
            <span class="is-size-6-mobile">RECREATIONAL CANNABIS</span>
          </div>

        <div class="mt-4">
          <span class="is-size-4-mobile">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
            minus.
          </span>
        </div>

        <nuxt-link to="/store" class="button mt-6 is-danger is-large">Shop Now</nuxt-link>
      </div>
      <div class="column auto is-hidden-touch">
      <img id="home-image" src="@/assets/images/front-cbd-oil.svg" alt="none">
      </div>
    </div>
  </div>
</div>
</div>
  </section>
</template>

<script>
export default {
name: "top-hero"
}
</script>

<style scoped>

</style>
