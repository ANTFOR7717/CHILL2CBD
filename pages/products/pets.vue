<template>
  <section>
  <article class="media">
    <div class="media-content has-text-centered">
  <section class="section container is-widescreen is-medium">

    <product-card v-show="page.boolean === false" class="product-cards" v-for="(product, index, name) in data"
                  :id="'snipcart-'+product.sku"
                  :item_id="product.sku"
                  :name="product.name"
                  :key="product.upc"
                  :url="product.url"
                  :price='product.prices.split(",")'
                  :company="product.company"
                  :buttons='product.sizes.split(",")'
                  >

      <a style="color: #364f3a;" class="has-text-weight-bold"
         @click='show(product.sku,
                      product.name,
                      product.sizes.split(","),
                      product.prices.split(","),
                      product.url,
                      product.company,
                      product.description
                       );'>

      {{product.name}}


      </a>

    </product-card>


    <product-page v-show="page.boolean === true"
                  :snip_id='this.$store.getters["getSnip"]'
                  :name='this.$store.getters["getName"]'
                  :sizes='this.$store.getters["getSize"]'
                  :prices='this.$store.getters["getPrice"]'
                  :url='this.$store.getters["getUrl"]'
                  :company='this.$store.getters["getCompany"]'
                  :description='this.$store.getters["getDescription"]'
    >
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
import ProductBar from "@/components/store/products/product-bar";

const FLOWER_PRODUCT_QUERY = `
{
  allPets {
    name
    company
    prices
    sizes
    url
    sku
    upc
    description

}

}
`;



export default {
  components: {ProductBar, ProductPage, CategoriesHero, ProductCard},
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
      this.data = products.allPets;

    } catch (e) {
      this.error = e;
    }
    this.loading = false;


  },

  methods: {
      async show(id, name, sizes, prices, url, company, description) {
        this.page.boolean = true
        this.$store.commit("setSnip", id )
        this.$store.commit("setName", name )
        this.$store.commit("setSizes", sizes )
        this.$store.commit("setPrices", prices )
        this.$store.commit("setUrl", url )
        this.$store.commit("setCompany", company )
        this.$store.commit("setDescription", description )
      }
  }




};

</script>

<style scoped>

.product-cards {
  display: inline-block;
}


</style>
