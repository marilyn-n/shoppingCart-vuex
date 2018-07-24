import Vuex from 'vuex'
import vue from 'vue'

Vue.use(Vuex)

new Vuex.Store({
  state: { // data
    products: []
  },

  getters: { // computed properties
    productsCount() {
      // ...
    }
  },

  actions: {
    fetchProducts() {
      // make the call
    }
  },

  mutations: {
    setProducts() {
      // update products
    }
  }

})
