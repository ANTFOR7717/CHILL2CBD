<template>
  <div>
    <navbar/>
    <!-- Floating Action Button -->
    <div class="fab snipcart-checkout">

  </div>
    <Nuxt/>
    <bfooter/>
  </div>
</template>
<script>
import navbar from "@/components/header/navbar";
import bfooter from "@/components/footer/bfooter";

export default {
  watch: {
    selected_json(newValue) {
      this.$store.commit("setSelectedJson", newValue)
    }
  },

  name: 'home',
  components: {
    navbar,
    bfooter,
  }



}


</script>
<style>
/* Floating Action Button */

@media only screen and (max-width: 600px) {

  .fab {
    z-index: 10;
    width: 100px;
    height: 100px;
    background-color: #f5f5f5;
    background-image: url("https://raw.githubusercontent.com/ANTFOR7717/SVG/master/cart.svg");
    background-repeat: no-repeat;
    background-size: 60% 60%;
    background-position: center;
    border-radius: 50%;
    box-shadow: 0 6px 10px 0 #666;

    font-size: 50px;
    line-height: 50px;
    color: white;
    text-align: center;

    position: fixed;
    right: 50px;
    bottom: 50px;

    transition: all 0.1s ease-in-out;
  }

  .fab:hover {
    z-index: 10;
    box-shadow: 0 6px 14px 0 #666;
    transform: scale(1.05);
    background-image: url("https://raw.githubusercontent.com/ANTFOR7717/SVG/master/cart.svg");
  }

}
</style>
