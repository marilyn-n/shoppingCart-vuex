import Vuex from 'vuex'
import vue from 'vue'
import { resolve } from 'url';
import { rejects } from 'assert';
import shop from '@/api/shop'
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
     // make the call | run setProducts mutation
    fetchProducts({commit}) {
      return new Promise ((resolve, reject) => {
        shop.getProducts(products => {
          commit('setProducts', products)
          resolve()
        })
      })
    }
  },

  mutations: {
    setProducts (state, products) {
      state.products = products
      // update products
    }
  }

})
