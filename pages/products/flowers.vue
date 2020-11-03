<template>
  <section class="section container is-widescreen is-medium">

    <h1 class="title">{{ cartAmount }}</h1>

  </section>
</template>

<script>
export default {
  layout: 'directory',
  name: "flowers",

  data() {
    return {
      cartAmount: Snipcart.store.getState().cart.items.count
    }
  }
}
</script>

<style scoped>

</style>
