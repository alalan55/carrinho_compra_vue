<template>
  <div class="home-template">
    <div class="description" v-if="!products.length <= 0">
      <div class="title">
        <span>Carrinho</span>
      </div>
      <div class="sub">
        <span> Produtos que você selecionou: </span>
      </div>
    </div>
    <ContainerCards class="container-cards" v-if="products">
      <ul>
        <li class="item" v-for="produto in products" :key="produto.id">
          <div class="values">
            <div class="nome">
              <div class="title-item"><span>nome</span></div>
              <span>{{ produto.nome }}</span>
            </div>
            <div class="valor">
              <div class="title-item"><span>preço</span></div>
              <span>{{ formatedNumber(produto.preco) }}</span>
            </div>
          </div>

          <figure>
            <img :src="produto.img" :alt="produto.nome" />
          </figure>
        </li>
      </ul>
    </ContainerCards>

    <div v-if="products.length <= 0" class="empty">
      <span>Ops, parece que você ainda não comprou nada</span>
    </div>

    <div class="total" v-if="!products.length <= 0">
      <div class="title-total">
        <span>Valor Total:</span>
      </div>
      <div class="valor-total">
        <span>{{ totalProducts }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ContainerCards } from "@/components/bosons";
import { computed, ref } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    ContainerCards,
  },
  setup() {
    const products = ref([]);
    const store = useStore();

    function init() {
      products.value = store.getters.$productsOnCard;
    }
    function formatedNumber(e) {
      let formato = {
        minimumFractionDigits: 2,
        style: "currency",
        currency: "BRL",
      };
      return e.toLocaleString("pt-BR", formato);
    }
    init();

    return {
      products,
      formatedNumber,
      productsOnCard: computed(() => store.getters.$productsOnCard),
      totalProducts: computed(() => {
        let total = 0;

        if (store.getters.$productsOnCard.length > 0) {
          for (let prod of store.getters.$productsOnCard) {
            total += prod.preco;
          }
        }
        return formatedNumber(total);
      }),
    };
  },
};
</script>

<style lang="scss" scoped>
.home-template {
  padding: 0.7rem;
  .description {
    margin-bottom: 1rem;
    .title {
      margin: 0.5rem 0;
      span {
        font-size: 2em;
        font-weight: 600;
      }
    }
  }
  .container-cards {
    padding: 0;

    ul {
      width: 100% !important;
      .item {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid rgb(233, 232, 232);

        & > div {
          .title-item {
            margin: 0.5rem 0;
            span {
              font-weight: 600;
            }
          }
        }
        .values > div {
          margin: 0.8rem 0;
        }

        figure {
          height: 100px;
          width: 100px;
          overflow: hidden;

          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
  .empty {
    height: 80vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .total {
    padding: 1.5rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.5em;
    font-weight: 600;
  }
}
</style>