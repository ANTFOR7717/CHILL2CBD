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
  },
  head: {
    title: 'Shop Best CBD Products for Anxiety - THC-Free | Chill2CBD | Store',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Shop pharmacist-formulated, professionally curated, lab-tested CBD oils, topicals, ' +
          'edibles, tinctures, beverages, spa goods & more from Chill2CBD, the ultimate collection curator for the ' +
          'Best CBD Products for anxiety, THC-free.'
      }
    ],
  }

}
</script>

<style scoped>

</style>
