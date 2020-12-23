<template>
  <section class="section container is-widescreen is-medium">
<div class="hero main-cta">
<div class="hero-body">
  <div class="container">
    <div class="columns is-gapless is-multiline is-mobile">
      <div class="column auto"></div>
      <div class="column is-three-quarters">
      <h1 style="color: #364f3a; line-height: 100%;" class="title is-size-2-mobile is-size-1-desktop has-text-weight-bold">
        Our goal has always been to provide the highest-quality, <span style="color: #71a06a">THC-free*</span> CBD products for sale.
      </h1>

          <div class="mt-4" style="color: #68baac;">
            <span class="is-size-6-mobile">100% NATURAL</span> |
            <span class="is-size-6-mobile">RECREATIONAL HEMP</span>
          </div>

        <div class="mt-4">
          <h2 class="is-size-4-mobile">
            Combination of the best hemp with the industry's most sophisticated manufacturing methods.
          </h2>
        </div>

        <nuxt-link to="/store" class="button mt-6 is-rounded is-danger is-large"><h1>Shop Now</h1></nuxt-link>
      </div>
      <!--
      <div class="column auto is-hidden-touch">
      <img id="home-image" src="@/assets/images/front-cbd-oil.svg" alt="none">
      </div>
      -->
      <div class="column auto"></div>
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

@media only screen and (max-width: 400px) {

  .main-cta {
    margin-top: -3rem;

  }
}
</style>
