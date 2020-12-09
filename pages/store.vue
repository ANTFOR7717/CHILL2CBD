<template>
  <section>
  <subscription-cta/>
  <categories-hero/>
  <featured-cta/>
  </section>
</template>

<script>
import CategoriesHero from "@/components/store/categories-hero";
import SubscriptionCta from "@/components/store/subscription-cta";
import FeaturedCta from "@/components/store/featured-cta";
export default {
  name: "shop",
  components: {
    FeaturedCta,
    SubscriptionCta,
    CategoriesHero
  }
}
</script>

<style scoped>

</style>
