<template>
  <section>


  <li :id="id" class="box product-card">
    <div style="height: 8rem; width: 14rem;" class="box is-medium container content is-vertical-center product">
      <slot></slot>
    </div>
    <span>

      <a class="buttons-card button" :id="i" :value="index" v-for="(i, index) in buttons" @click="choice(index, i)">
        {{i}}
      </a>

    </span>

    <p style="" class="is-size-7 is-family-monospace mt-2">{{company}}</p>

    <figure class="image is-4by5">
      <img style="border-radius: 10px; max-width: 15rem; max-height: 15rem" :src="url" alt="product">
    </figure>

    <div style="margin-top: -3rem;" class="level">
      <button @click="decrease()" class="button is-rounded is-small level-item has-text-centered">
        <img class="add-subtract" src="@/assets/images/minus.svg">
      </button>
      <span class="level-item has-text-centered area">
        {{quantity}}
      </span>
      <button @click="quantity = quantity + 1" class="button is-rounded is-small level-item has-text-centered">
        <img class="add-subtract" src="@/assets/images/plus.svg">
      </button>
    </div>
    <div class="columns">
      <div class="column">
        <button class="button is-fullwidth snipcart-add-item" @click="addCode()"
                :data-item-name="name+' - '+buttons[amount]"
                :data-item-id="company+' - '+item_id+' - '+buttons[amount]"
                :data-item-url="'api.chill2cbd.com'"
                :data-item-price="price[amount]"
                :data-item-image="url"
        >
          <figure class="image is-32x32">
          <img src="@/assets/images/add-to-cart.svg">
          </figure>
        </button>
      </div>
      <div class="column"><h1 class="title is-size-4 is-size-5-mobile price">${{price[amount]}}</h1></div>
    </div>
  </li>
<!--
    {
    "id": "{{company+' - '+item_id+' - '+buttons[amount]}}",
    "price": "{{price[amount]}}",
    "url": "api.chill2cbd.com"
    }
-->

  </section>
</template>

<script>


export default {
  name: "product-card",
  components: {},
  props: {
    size: '',
    name: '',
    price: '',
    company: '',
    item_id: '',
    id: '',
    options: '',
    custom_name: '',
    buttons: '',
    button: '',
    sku: '',

    url: {
      type: String,
      default: 'https://bulma.io/images/placeholders/128x128.png'
    }
  },
  data() {
    return {
      amount: 0,
      quantity: 1
    }
  },

  methods: {
    decrease() {
      if (this.quantity > 1) {
        this.quantity = this.quantity - 1
      }
    },



    addCode() {

      function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
          if ((new Date().getTime() - start) > milliseconds){
            break;
          }
        }
      }

      document.getElementById("added-to-cart").classList.remove("is-hidden");


      setTimeout(function(){
        document.getElementById("added-to-cart").classList.add("is-hidden");
      }, 2000);





    },

    choice(index, i) {
      this.amount = index

    }
  },


  mounted() {

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }



  },

  created() {

  }
};



</script>

<style scoped>

@media only screen
and (max-device-width: 812px) {

  .price {
    line-height: 60%;
  }

  .product-card {
    width: 19.5rem;
    margin-bottom: 134rem;

  }

}
@media only screen
and (min-device-width: 813px)
and (max-device-width: 2000px) {
  .price {
    line-height: 160%;
  }
  .product-card {
    margin-left: 2px;
    margin-right: 2px;
    margin-bottom: 15px;
  }

}


.level-item {
  display: inline-block;
}
.add-subtract {
  height: 20px;
  width: 40px;
}

.buttons-card {
  display: inline-block;
}

.product-card {
  max-width: 16.5rem;
  max-height: 39rem;
}

.is-vertical-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.area {
  padding: 5px;
}

</style>
