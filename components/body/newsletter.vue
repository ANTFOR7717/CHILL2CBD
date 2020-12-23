<template>
  <section class="section container is-widescreen is-medium">
    <div class="hero main-cta mt-6">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-gapless is-multiline is-mobile">
            <div class="column auto"></div>
            <div class="column is-three-quarters">
              <h1 style="color: #364f3a; line-height: 100%;" class="title is-size-2-mobile is-size-1-desktop has-text-weight-bold">
                Shop the Best CBD Products for <span style="color: #71a06a">Anxiety</span>.
              </h1>
              <nuxt-link to="/store" class="shop-button button mt-6 is-rounded is-focused is-danger is-large is-fullwidth"><h1>Shop Now</h1></nuxt-link>
              <div class="box mt-6 newsletter-form">
              <div class="mb-2 mt-5">
                <h2 class="is-size-5-mobile is-size-4">
                  Sign up for newsletters about promotions, new products, and more!
                </h2>
              </div>

              <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left has-icons-right">
                  <input class="input is-danger" type="email" placeholder="Email" value="">
                  <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
                  <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <label class="checkbox">
                    <input type="checkbox">
                    <span class="is-size-6-mobile">
                    I agree to the <a href="#">terms and conditions</a>
                      </span>
                  </label>
                </div>
              </div>

              <div class="field is-grouped">
                <div class="control">
                  <button class="button is-link mb-5">Submit</button>
                </div>
              </div>
            </div>
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
name: "newsletter.vue"
}
</script>

<style scoped>


@media only screen and (max-width: 400px) {
.newsletter-form {
  margin-left: -4.5rem;
  margin-right: -4.5rem;
}


}

.newsletter-form {
  border-radius: 2rem;
}

.shop-button {
  margin-bottom: 6rem;
}

</style>
