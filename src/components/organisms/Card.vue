<template>
  <div class="card">
    <figure>
      <img :src="produto.img" alt="{{produdo.nome}}" />
    </figure>
    <div class="descriptions">
      <div class="valor">
        <span>{{ formatedNumber }}</span>
      </div>
      <div class="name">
        <span>{{ produto.nome }}</span>
      </div>
      <div class="btn-comprar" @click="buyProduct(produto)">
        <span>Comprar <i class="fas fa-shopping-cart"></i></span>
      </div>
    </div>
  </div>
</template>

<script>

import {useStore} from 'vuex'
export default {
  props: {
    produto: { type: Object, default: undefined },
  },
  computed: {
    formatedNumber() {
      let formato = {
        minimumFractionDigits: 2,
        style: "currency",
        currency: "BRL",
      };
      return this.produto.preco.toLocaleString("pt-BR", formato);
    },
  },
  setup(){
      const store = useStore();

      function buyProduct(produto){
          store.dispatch('SET_PRODUCT', produto)
          console.log(store.getters.$cartCount)
      }

      return{
          buyProduct
      }
  }
};
</script>

<style lang="scss" scoped>
.card {
  margin: 0.8rem 0;
  border-radius: 20px;
  padding: 0.8rem;
  -webkit-box-shadow: -2px 5px 13px 1px rgba(0, 0, 0, 0.1);
  box-shadow: -2px 5px 13px 1px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  figure {
    height: 40vh;
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 0.5rem;
    -webkit-box-shadow: -2px 5px 13px 1px rgba(0, 0, 0, 0.09);
    box-shadow: -2px 5px 13px 1px rgba(0, 0, 0, 0.09);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .descriptions {
    & > div {
      margin: 0.8rem 0;
    }
    .valor {
      span {
        font-size: 1.2em;
        font-weight: 700;
      }
    }

    .name {
      span {
        font-size: 0.9em;
      }
    }
    .btn-comprar {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #01b3ee;
      padding: 0.35rem;
      color: white;
      border-radius: 20px;
      cursor: pointer;
      -webkit-box-shadow: inset 1px 7px 16px 1px rgba(0, 0, 0, 0.13);
      box-shadow: inset 1px 7px 16px 1px rgba(0, 0, 0, 0.13);
      transition: 0.2s ease-in-out;

      &:hover {
        background: #01aae2;
      }
    }
  }
}
</style>