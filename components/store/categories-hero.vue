<template>
<section class="section container is-widescreen is-medium">

  <section class="hero">

    <div class="hero-body">
      <!-- <h1 class="title">Categories</h1> -->
      <div class="container">

        <div class="tile is-ancestor">

          <div class="tile is-parent">
            <nuxt-link to="/products/prerolls">
              <!--style="min-height: 177px; min-width: 207px;"-->
            <div class="category tile is-child">
              <article class="category tile is-child notification">
                <span class="is-size-7">&nbsp;Shop</span>
                <h1 class="is-size-4">Prerolls</h1>


                <div class="">
                  <figure class="image container is-96x96px">
                    <img class="" src="@/assets/images/prerolls.png">
                  </figure>
                </div>
              </article>
            </div>
            </nuxt-link>
          </div>

          <div class="tile is-parent">
            <nuxt-link to="/products/flowers">
            <div class="category tile is-child">
              <article class="category tile is-child notification">
                <span class="is-size-7">&nbsp;Shop</span>
                <h1 style="" class="is-size-4">Flowers</h1>


                <div class="">
                  <figure class="image container is-96x96px">
                    <img class="" src="@/assets/images/flower.png" alt="none">
                  </figure>
                </div>
              </article>
            </div>
            </nuxt-link>
          </div>

          <div class="tile is-parent">
            <nuxt-link to="/products/vaporizers">
            <div class="category tile is-child">
              <article class="category tile is-child notification">
                <span class="is-size-7">&nbsp;Shop</span>
                <h1 style="" class="is-size-4">Vaporizers</h1>


                <div class="">
                  <figure class="image container is-96x96px">
                    <img class="" src="@/assets/images/vaporizers.png" alt="none">
                  </figure>
                </div>
              </article>
            </div>
            </nuxt-link>
          </div>

          <div class="tile is-parent">
            <nuxt-link to="/products/concentrates">
            <div class="category tile is-child">
              <article class="category tile is-child notification">
                <span class="is-size-7">&nbsp;Shop</span>
                <h1 style="" class="is-size-4">Concentrates</h1>


                <div class="">
                  <figure class="image container is-96x96px">
                    <img class="" src="@/assets/images/concentrates.png" alt="none">
                  </figure>
                </div>
              </article>
            </div>
            </nuxt-link>
          </div>

          <div class="tile is-parent">
            <nuxt-link to="/products/accessories">
            <div class="category tile is-child">
              <article class="category tile is-child notification">
                <span class="is-size-7">&nbsp;Shop</span>
                <h1 style="" class="is-size-4">Accessories</h1>


                <div class="">
                  <figure class="image container is-96x96px">
                    <img class="" src="@/assets/images/accessories.png" alt="none">
                  </figure>
                </div>
              </article>
            </div>
            </nuxt-link>
          </div>



        </div>

        <div class="tile is-ancestor">

          <div class="tile is-parent">
            <nuxt-link to="/products/edibles">
            <div class="category tile is-child">
              <article class="category tile is-child notification">
                <span class="is-size-7">&nbsp;Shop</span>
                <h1 class="is-size-4">Edibles</h1>
                <div class="">
                  <figure class="image container is-96x96px">
                    <img class="" src="@/assets/images/edibles.png">
                  </figure>
                </div>
              </article>
            </div>
            </nuxt-link>
          </div>

          <div class="tile is-parent">
            <nuxt-link to="/products/topicals">
            <div class="category tile is-child">
              <article class="category tile is-child notification">
                <span class="is-size-7">&nbsp;Shop</span>
                <h1 style="" class="is-size-4">Topicals</h1>
                <div class="">
                  <figure class="image container is-96x96px">
                    <img class="" src="@/assets/images/topicals.png" alt="none">
                  </figure>
                </div>
              </article>
            </div>
            </nuxt-link>
          </div>

          <div class="tile is-parent">
            <nuxt-link to="/products/pets">
            <div class="category tile is-child">
              <article class="category tile is-child notification">
                <span class="is-size-7">&nbsp;Shop</span>
                <h1 style="" class="is-size-4">Pets</h1>
                <div class="">
                  <figure class="image container is-96x96px">
                    <img class="" src="@/assets/images/pets.png" alt="none">
                  </figure>
                </div>
              </article>
            </div>
            </nuxt-link>
          </div>

          <div class="tile is-parent is-invisible is-hidden-touch">
            <div class="category tile is-child">
              <article class="category tile is-child notification">
                <span class="is-size-7">&nbsp;Shop</span>
                <h1 style="" class="is-size-4">Concentrates</h1>


                <div class="">
                  <figure class="image container is-96x96px">
                    <img class="" src="@/assets/images/concentrates.png" alt="none">
                  </figure>
                </div>
              </article>
            </div>
          </div>

          <div class="tile is-parent is-invisible is-hidden-touch">
            <div class="category tile is-child">
              <article class="category tile is-child notification">
                <span class="is-size-7">&nbsp;Shop</span>
                <h1 style="" class="is-size-4">Accessories</h1>


                <div class="">
                  <figure class="image container is-96x96px">
                    <img class="" src="@/assets/images/accessories.png" alt="none">
                  </figure>
                </div>
              </article>
            </div>
          </div>

        </div>

      </div>

    </div>


  </section>

</section>
</template>

<script>
export default {
  name: "categories-hero"
}
</script>

<style scoped>


.category {
  border-radius: 50px;
}

img {
}

</style>
