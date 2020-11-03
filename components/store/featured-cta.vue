<template>
  <section class="section container is-widescreen is-medium">

    <div class="columns is-multiline is-mobile">
      <div class="column is-half">
        <div class="tile is-ancestor">

          <div class="tile is-parent">

            <article class="category tile is-child notification is-warning has-text-centered ">
              <img class="mt-5" src="@/assets/images/cbd-oil.svg" width="52" height="52" alt="none">
              <p class="title has-text-weight-normal">Shop our Featured Collection.<br></p>
              <!-- <p class="has-text-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> -->
              <div class="mb-5 content">
                <nuxt-link to="/store" class="button is-danger">Shop Now</nuxt-link>
              </div>
            </article>

          </div>

        </div>
      </div>
      <div class="column is-half">
        <div class="tile is-ancestor">

          <div class="tile is-parent">

            <article class="category tile is-child notification is-warning has-text-centered ">
              <img class="mt-5" src="@/assets/images/cbd-oil.svg" width="52" height="52" alt="none">
              <p class="title has-text-weight-normal">View our Sales and Clearance.<br></p>
              <!-- <p class="has-text-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> -->
              <div class="mb-5 content">
                <nuxt-link to="/store" class="button is-danger">Shop Now</nuxt-link>
              </div>
            </article>

          </div>

        </div>
      </div>
    </div>


  </section>
</template>

<script>
export default {
name: "featured-cta"
}
</script>

<style scoped>
.category {
  border-radius: 50px;
}
</style>
