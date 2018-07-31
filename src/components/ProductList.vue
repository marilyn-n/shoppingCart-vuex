<template>
<div class="list">
  <h1>Product List</h1>
  <img
    v-if="loading"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ4yUY9iIxwioIiXA8xcQbxc4Uv5oAqXNbG9ZrmXkeCv4C3td4" alt="">
<ul v-else>
  <li v-for="product in products">{{ product.title }} - {{ product.price }}</li>
</ul>
</div>

</template>

<script>
import store from '@/store/index'

export default {
  data () {
    return {
      loading: false
    }
  },
  computed: {
    products () {
    return store.getters.availableProducts
    }
  },

  created () {
    this.loading = true
    store.dispatch('fetchProducts')
    .then(() => this.loading = false)
  }

}
</script>

<style>

</style>
