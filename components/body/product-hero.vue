<template>
<section class="section container is-widescreen is-medium">

  <div class="tile is-ancestor">

    <div class="tile is-parent">

      <article class="category tile is-child notification is-warning has-text-centered ">
      <img class="mt-5" src="@/assets/images/cbd-oil.svg" width="52" height="52" alt="none">
      <p class="title has-text-weight-light">We offer a wide range of cannabis<br> products for your health and wellness.</p>
      <p class="has-text-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
          <span class="title has-text-link-dark">Edibles</span>
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
            <button class="button is-danger">View Edibles</button>
          </div>
        </article>
      </div>
    </div>

    <div class="tile is-parent">
      <div class="category tile is-child has-text-centered">
        <article class="category tile is-child notification">
          <span class="title has-text-link-dark">Flowers</span>
          <div class="mt-1 description size-is-7">
            <ul style="color: #68baac;">
              <li> &nbsp;40+ Strains&nbsp;|</li>
              <li>Sativa, Indica, & Hybrid&nbsp;</li>
            </ul>
          </div>
          <div class="mt-5">
            <figure class="image container is-256x256">
              <img src="@/assets/images/flower.png">
            </figure>
            <button class="button is-danger">View Strains</button>
          </div>
        </article>
      </div>
    </div>

    <div class="tile is-parent">
      <div class="tile is-child has-text-centered">
        <article class="category tile is-child is-link notification">
          <span class="title">Concentrates</span>
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
            <button class="button is-danger">View Extracts</button>
          </div>
        </article>
      </div>
    </div>

  </div>

  <div class="tile is-ancestor">

    <div class="tile is-parent">
      <div class="tile is-child has-text-centered">
        <article class="category tile is-child notification" style="background-color: #373E40">
          <span class="title has-text-white">Vaporizers</span>
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
            <button class="button is-danger">View Vapes</button>
          </div>
        </article>
      </div>
    </div>

    <div class="tile is-parent">
      <div class="category tile is-child has-text-centered">
        <article style="background-color: #316B52;" class="category tile is-child notification">
          <span class="title has-text-white">Accessories</span>
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
            <button class="button is-danger">View Accessories</button>
          </div>
        </article>
      </div>
    </div>

    <div class="tile is-parent">
      <div class="category tile is-child has-text-centered">
        <article style="background-color: #A26769" class="category tile is-child is-success notification">
          <span class="title has-text-white">Pets</span>
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
            <button class="button is-danger">View Pets</button>
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
  data() {
  return {
    url2: 'https://bulma.io/images/placeholders/640x480.png'

  }
  }

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

</style>
