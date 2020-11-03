<template>
  <div>
    <top-hero/>
    <product-hero/>
  </div>
</template>


<script>
import Navbar from "@/components/header/navbar";
import TopHero from "@/components/body/top-hero";
import ProductHero from "@/components/body/product-hero";
import bfooter from "@/components/footer/bfooter";
import CategoriesHero from "@/components/store/categories-hero";
export default {
  components: {CategoriesHero, bfooter, ProductHero, TopHero, Navbar}
}
</script>

<style>

</style>
