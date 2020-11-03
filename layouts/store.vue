<template>
  <div>
    <navbar/>
    <Nuxt/>
    <bfooter/>
  </div>

</template>

<script>
import bfooter from "@/components/footer/bfooter";
import navbar from "@/components/header/navbar";
export default {
  name: "store",
  components: {
    navbar,
    bfooter,

  }
}
</script>

<style scoped>

</style>
