import Vuex from 'vuex'
import vue from 'vue'

vue.use(Vuex)

export default new Vuex.Store({
  state: { // data
    products: []
  },

  getters: { // computed properties
    availableProducts (state, getters) {
      return state.products.filter(product => product.inventory > 0)
    }
  },

  actions: {
    fetchProducts() {
      // make the call
      // run setProducts mutation
    }
  },

  mutations: {
    setProducts(state, products) {
      state.products = products
      // update products
    }
  }

})
