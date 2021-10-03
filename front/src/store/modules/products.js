import productApi from '../../api/product'
import Vue from 'vue'

// initial state
const state = () => ({
  all: []
})

// getters
const getters = {
  getProductById: state => id => {
    return state.all.find(state_product => state_product.id === id);
  }
}

// actions
const actions = {
  async getAllProducts ({ commit }) {
    const products = await productApi.getProducts()
    commit('setProducts', products)
  },
  async getProduct ({ commit }, params) {
    const product = await productApi.getProduct(params)
    commit('setProduct', product)
  },
  async editProduct ({ commit }, params) {
    const product = await productApi.editProduct(params)
    commit('setProduct', product)
  },
  async addProduct ({ commit }, params) {
    const product = await productApi.addProduct(params)
    commit('setProduct', product)
  },
  async deleteProduct ({ commit }, params) {
    const productId = await productApi.deleteProduct(params)
    commit('removeProduct', productId)
  }
}

// mutations
const mutations = {
  setProducts (state, products) {
    state.all = products
  },

  setProduct (state, product) {
    if (!product) {
      return
    }

    const index = state.all.findIndex(state_product => state_product.id === product.id)
    if (index >= 0) {
      Vue.set(state.all, index, product)
    } else {
      state.all.push(product)
    }
  },

  removeProduct (state, productId) {
    const index = state.all.findIndex(state_product => state_product.id === productId)
    if (index >= 0) {
      Vue.delete(state.all, index)
    }
  }
 }

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}