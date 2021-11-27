import { createStore } from "vuex";

export default createStore({
  state: {
    carrinho: []
  },
  mutations: {
    SET_PRODUTCT_STATE(state, payload){
      state.carrinho.push(payload)
    }
  },
  actions: {
    SET_PRODUCT({commit}, payload){
      commit('SET_PRODUTCT_STATE', payload)
    }
  },
  getters:{
    $cartCount(state){
      return state.carrinho.length
    },
    $productsOnCard(state){
      return state.carrinho
    }
  }
});
