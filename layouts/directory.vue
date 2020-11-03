<template>
  <div>
  <navbar/>
    <article class="media">
      <div class="media-content has-text-centered">

      <Nuxt/>

      </div>
    </article>
  <bfooter/>
<!-- TODO: Implement Store Features: Recently Viewed, etc... -->
  </div>
</template>

<script>
import Navbar from "@/components/header/navbar";
import Bfooter from "@/components/footer/bfooter";
export default {
name: "directory",
  components: {Bfooter, Navbar}
}
</script>

<style scoped>


</style>
