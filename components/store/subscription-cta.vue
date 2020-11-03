<template>
  <section class="section container is-widescreen is-medium">

    <div class="tile is-ancestor">

      <div class="tile is-parent">

        <article class="category tile is-child notification is-warning has-text-centered ">
          <img class="mt-5" src="@/assets/images/cbd-oil.svg" width="52" height="52" alt="none">
          <p class="title has-text-weight-normal">Sign-up for our subscription box<br class="is-hidden-touch">  and save 10% on your first curated order.</p>
          <!-- <p class="has-text-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> -->
          <div class="mb-5 content">
            <nuxt-link to="/store" class="button is-danger">Sign Up</nuxt-link>
          </div>
        </article>

      </div>

    </div>

  </section>
</template>

<script>
export default {
name: "subscription-cta"
}
</script>

<style scoped>
.category {
  border-radius: 50px;
}

</style>
