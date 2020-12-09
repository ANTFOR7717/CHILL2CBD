<template>
  <section>
  <article class="media">
    <div class="media-content has-text-centered">
  <section class="section container is-widescreen is-medium">

    <product-card v-show="page.boolean === false" class="product-cards" v-for="(product, index, name) in data"
                  :id="'snipcart-'+product.sku"
                  :name="product.name"
                  :key="product.upc"
                  :url="product.url"
                  :price='product.prices.split(",")'
                  :company="product.company"
                  :buttons='product.sizes.split(",")'
                  >

      <a class="has-text-weight-bold"
         @click='show(product.sku,
                      product.name,
                      product.sizes.split(","),
                      product.prices.split(","),
                      product.url,
                      product.company,

                       );'>

      {{product.name}}


      </a>

    </product-card>


    <product-page v-show="page.boolean === true"
                  :name='this.$store.getters["getName"]'
                  :sizes='this.$store.getters["getSize"]'
                  :prices='this.$store.getters["getPrice"]'
                  :url='this.$store.getters["getUrl"]'
                  :company='this.$store.getters["getCompany"]'
                  :description="'Some Cool text about the product might be very long but not gonna stop me'">
      <button @click="page.boolean = false" class="button"> < </button>
    </product-page>




  </section>
    </div>
  </article>


  </section>
</template>

<script>
import ProductCard from "@/components/store/products/product-card";
import {request} from "@/datocms";
import CategoriesHero from "@/components/store/categories-hero";
import ProductPage from "@/components/store/products/product-page";

const FLOWER_PRODUCT_QUERY = `
{
  allProducts {
    name
    company
    size
    prices
    sizes
    url
    sku
    upc

}

}
`;



export default {
  components: {ProductPage, CategoriesHero, ProductCard},
  name: "flowers",

  data() {
    return {
      sizes: null,
      data: null,
      error: null,
      loading: true,
      page: {
        boolean: false,
      },

      product_index: 0,
    }
  },
  async created() {

    try {
      let products = await request({
        query: FLOWER_PRODUCT_QUERY,
      })
      this.data = products.allProducts;

    } catch (e) {
      this.error = e;
    }
    this.loading = false;


  },

  methods: {
      async show(id, name, sizes, prices, url, company) {
        this.page.boolean = true
        this.$store.commit("setName", name )
        this.$store.commit("setSizes", sizes )
        this.$store.commit("setPrices", prices )
        this.$store.commit("setUrl", url )
        this.$store.commit("setCompany", company )







      }
  }




};

</script>

<style scoped>

.product-cards {
  display: inline-block;
}

</style>
