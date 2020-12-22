<template>
  <section class="section container is-widescreen">
    <div class="container">
  <nav style="" id="navbar" class="navbar is-spaced" role="navigation" aria-label="main navigation">
    <div class="navbar-brand is-spaced">
      <nuxt-link to="/" class="navbar-item is-spaced">
        <img src="@/assets/images/Chill2CBD.svg" width="112" height="28">
      </nuxt-link>

      <a role="button" class="navbar-burger burger is-spaced" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <!--
        <a class="navbar-item">
          Home
        </a>


        <a class="navbar-item">
          Documentation
        </a>
          -->
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Products
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item">
              Accessories
            </a>
            <a class="navbar-item">
              Concentrates
            </a>
            <a class="navbar-item">
              Edibles
            </a>
            <a class="navbar-item">
              Flowers
            </a>
            <a class="navbar-item">
              Pets
            </a>
            <a class="navbar-item">
              Vaporizers
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              Featured
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <nuxt-link to="/store" class="button is-primary">
              <strong>Store</strong>
            </nuxt-link>
            <a class="button is-light snipcart-checkout" data-config-modal-style="side">
              <figure class="image is-24x24">
              <img src="@/assets/images/cart.svg">
              </figure>
              <span>&nbsp;</span>
              <span class="snipcart-items-count"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  </div>
  </section>
</template>

<script>

export default {
name: "navbar",
  data() {
    return {
      count: null
    }
  },

  created() {

  },

  mounted() {

      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
          el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

          });
        });
      }


      },

}
</script>

<style scoped>
.navbar {
  border-radius: 25px;
}
</style>
