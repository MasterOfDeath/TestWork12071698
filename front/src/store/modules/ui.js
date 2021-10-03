import Vue from 'vue'

// initial state
const state = () => ({
  toast: {
    visible: false,
    variant: 'success',
    title: '',
    content: '',
  }
})

// getters
const getters = {}

// actions
const actions = {}

// mutations
const mutations = {
  showToast (state, params) {
    Vue.set(state.toast, 'visible', true)
    Vue.set(state.toast, 'variant', params['variant'] || 'success')
    Vue.set(state.toast, 'title', params['title'] || '')
    Vue.set(state.toast, 'content', params['content'] || '')
  }
 }

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}