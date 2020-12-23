<template>
  <div>
    <top-hero/>
    <product-hero/>
    <newsletter/>
  </div>
</template>


<script>
import Navbar from "@/components/header/navbar";
import TopHero from "@/components/body/top-hero";
import ProductHero from "@/components/body/product-hero";
import bfooter from "@/components/footer/bfooter";
import CategoriesHero from "@/components/store/categories-hero";
import newsletter from "@/components/body/newsletter";
export default {
  components: {CategoriesHero, bfooter, ProductHero, TopHero, Navbar, newsletter}
}
</script>

<style>

</style>
