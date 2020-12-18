<template>
  <article class="media">
    <slot></slot>
    <div class="media-content has-text-centered">
      <section class="section container is-widescreen is-medium">
      <div style="background-color: #EDD1B0" class="box">
  <div class="columns">
    <div class="column">
      <figure class="box image is is-4by5">
        <img :src="url">
      </figure>
      <p class="box is-size-7 is-family-monospace">{{company}}</p>
    </div>
    <div class="column is-three-fifths">
      <h1 class="box title is-size-1">{{ name }}</h1>
      <div></div>
      <h2 class="box pt-4 subtitle is-size-5">{{ description }}</h2>
      <span class="box">
      <span>
      <a class="buttons-card button ml-1" :id="i" :value="index" v-for="(i, index) in sizes" @click="amount = index">
        {{i}}
      </a>
      </span>

      <div class="level mt-5">
        <button @click="decrease()" class="button is-rounded is-small level-item has-text-centered">
          <img class="add-subtract" src="@/assets/images/minus.svg" alt="minus">
        </button>
        <span class="level-item has-text-centered">
        {{quantity}}
      </span>
        <button @click="quantity = quantity + 1" class="button is-rounded is-small level-item has-text-centered">
          <img class="add-subtract" src="@/assets/images/plus.svg">
        </button>
      </div>

        <h1 class="title is-size-2 is-size-3-mobile price mt-5">${{prices[amount]}}</h1>


      <button class="button is-fullwidth snipcart-add-item mt-3"
              :data-item-id="snip_id+' - '+sizes[amount]"
              :data-item-name="name+' - '+sizes[amount]"
              :data-item-price="prices[amount]"
              :data-item-image="url"
              >
        <figure class="image is-32x32">
          <img src="@/assets/images/add-to-cart.svg">
        </figure>
      </button>

      </span>
    </div>
  </div>
</div>
      </section>
    </div>
  </article>
</template>

<script>
export default {
  name: "product-page",
  props: {
    name: '',
    url: {
      default: 'https://bulma.io/images/placeholders/128x128.png'
    },
    prices: '',
    sizes: '',
    description: '',
    company: '',
    snip_id: '',
  },
  data() {
    return {
      amount: 0,
      quantity: 1,
    }
  },

  methods: {
    decrease() {
      if (this.quantity > 1) {
        this.quantity = this.quantity - 1
      }


    }
  }
}

</script>

<style scoped>
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

</style>
