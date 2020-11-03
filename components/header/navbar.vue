<template>
  <section class="section container is-widescreen">
  <div class="container">
  <nav id="navbar" class="navbar is-spaced" role="navigation" aria-label="main navigation">
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
              About
            </a>
            <a class="navbar-item">
              Jobs
            </a>
            <a class="navbar-item">
              Contact
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              Report an issue
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
            <a class="button is-light snipcart-checkout">
              Cart
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
}
</script>

<style scoped>
.navbar {
  border-radius: 25px;
}
</style>
