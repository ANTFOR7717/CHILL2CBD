<template>
<section class="section container is-widescreen is-medium mt-5">

  <div class="tile is-ancestor">

    <div class="tile is-parent">

      <article class="category tile is-child notification is-warning has-text-centered ">
      <img class="mt-5" src="@/assets/images/cbd-oil.svg" width="52" height="52" alt="none">
      <h1 class="title has-text-weight-light">We offer a wide range of hemp<br> products for your health and wellness.</h1>
      <h2 class="has-text-weight-light">We are committed not only to providing CBD of the highest quality, but also to supplying you with other nutrients that are essential to your health.</h2>
      <div class="mb-5 content">
        <!-- Content -->
      </div>
    </article>

  </div>

  </div>

  <div class="tile is-ancestor">

    <div class="tile is-parent">
      <div class="category tile is-child has-text-centered">
        <article class="category tile is-child is-success notification">
          <h1 class="title category-title has-text-link-dark">Edibles</h1>
          <div class="mt-1 description size-is-7">
            <ul style="color: #68baac;">
              <li> &nbsp;Oils&nbsp;</li>
              <li>| Tinctures&nbsp;|</li>
              <li>Honey&nbsp;</li>
            </ul>
          </div>
          <div class="mt-5">
            <figure class="image container is-256x256">
              <img src="@/assets/images/edibles.png">
            </figure>
            <nuxt-link style="text-decoration: none;" to="/products/edibles">
            <h2 class="button is-danger">View Edibles</h2>
            </nuxt-link>
          </div>
        </article>
      </div>
    </div>

    <div class="tile is-parent">
      <div class="category tile is-child has-text-centered">
        <article class="category tile is-child notification">
          <h1 class="title has-text-link-dark category-title">Flowers</h1>
          <div class="mt-1 description size-is-6">
            <ul style="color: #68baac;">
              <li> &nbsp;40+ Strains&nbsp;|</li>
              <li style="padding-right:1rem;" class="is-size-6-desktop">Sativa, Indica, & Hybrid&nbsp;</li>
            </ul>
          </div>
          <div class="mt-5">
            <figure class="image container is-256x256">
              <img src="@/assets/images/flower.png">
            </figure>
            <nuxt-link style="text-decoration: none;" to="/products/flowers">
            <h2 class="button is-danger">View Strains</h2>
            </nuxt-link>
          </div>
        </article>
      </div>
    </div>

    <div class="tile is-parent">
      <div class="tile is-child has-text-centered">
        <article class="category tile is-child is-link notification">
          <h1 class="title category-title">Concentrates</h1>
          <div class="mt-1 description size-is-7">
            <ul style="color: #d3e8de;">
              <li> &nbsp;Oils&nbsp;|</li>
              <li>Tinctures&nbsp;|</li>
              <li>Honey&nbsp;|</li>
              <li>Keef&nbsp;</li>
            </ul>
          </div>
          <div class="mt-5">
            <figure class="image container is-256x256">
              <img src='@/assets/images/concentrates.png'>
            </figure>
            <nuxt-link style="text-decoration: none;" to="/products/concentrates">
            <h2 class="button is-danger">View Extracts</h2>
            </nuxt-link>
          </div>
        </article>
      </div>
    </div>

  </div>

  <div class="tile is-ancestor">

    <div class="tile is-parent">
      <div class="tile is-child has-text-centered">
        <article class="category tile is-child notification" style="background-color: #373E40">
          <h1 class="category-title title has-text-white">Vaporizers</h1>
          <div class="mt-1 description size-is-7">
            <ul style="color: #d3e8de;">
              <li> &nbsp;Juice&nbsp;|</li>
              <li>Disposables&nbsp;|</li>
              <li>Cartridges&nbsp;</li>
            </ul>
          </div>
          <div class="mt-5">
            <figure class="image container is-256x256">
              <img src="@/assets/images/vaporizers.png">
            </figure>
            <nuxt-link style="text-decoration: none;" to="/products/vaporizers">
            <h2 class="button is-danger">View Vapes</h2>
            </nuxt-link>
          </div>
        </article>
      </div>
    </div>

    <div class="tile is-parent">
      <div class="category tile is-child has-text-centered">
        <article style="background-color: #316B52;" class="category tile is-child notification">
          <h1 class="category-title title has-text-white">Accessories</h1>
          <div class="mt-1 description size-is-7">
            <ul style="color: #68baac;">
              <li> &nbsp;Batteries&nbsp;|</li>
              <li>Devices&nbsp;|</li>
              <li>Others&nbsp;</li>
            </ul>
          </div>
          <div class="mt-5">
            <figure class="image container is-256x256">
              <img src="@/assets/images/accessories.png">
            </figure>
            <nuxt-link style="text-decoration: none;" to="/products/accessories">
            <h2 class="button is-danger">View Accessories</h2>
            </nuxt-link>
          </div>
        </article>
      </div>
    </div>

    <div class="tile is-parent">
      <div class="category tile is-child has-text-centered">
        <article style="background-color: #A26769" class="category tile is-child is-success notification">
          <h1 class="category-title title has-text-white">Pets</h1>
          <div class="mt-1 description size-is-7">
            <ul class="has-text-white" style="">
              <li> &nbsp;Treats&nbsp;</li>
              <li>| Tinctures&nbsp;|</li>
              <li>Food&nbsp;</li>
            </ul>
          </div>
          <div class="mt-5">
            <figure class="image container is-256x256">
              <img src="@/assets/images/topicals.png">
            </figure>
            <nuxt-link style="text-decoration: none;" to="/products/pets">
            <h2 class="button is-danger">View Pets</h2>
            </nuxt-link>
          </div>
        </article>
      </div>
    </div>

  </div>

</section>
</template>

<script>
export default {
name: "product-hero",

}
</script>

<style scoped>


.description {
  display: table;
  margin: 0 auto;
}

ul, li {
  display: inline;
}
.category {
  border-radius: 50px;
}

.category-title {
  padding: 0;
  margin: 0;
}

</style>
