<template>
  <nav>
    <div class="logo">
      <span>CART.</span>
    </div>
    <div class="links">
      <router-link to="/">home</router-link>
      <router-link to="/carrinho"
        >carrinho <span class="total_in_cart" v-if="countProduct > 0">{{countProduct}}</span></router-link
      >
    </div>
  </nav>
</template>
<script>
import { computed } from '@vue/reactivity';
import {useStore} from 'vuex'
export default {
  setup(){
    const store = useStore();
    return{
      countProduct: computed(() => store.getters.$cartCount)
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  color: white;
  background: black;

  .logo {
    span {
      font-weight: 800;
    }
  }
  .links {
    a {
      text-decoration: none;
      color: white;
      margin: 0 0.5rem;
      padding: 0.3rem;
      font-weight: 600;
      position: relative;

      .total_in_cart {
        position: absolute;
        display: block;
        height: 20px;
        width: 20px;
        background: red;
        border-radius: 50%;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        right: 0;
        top: 25px;
      }

      &.router-link-exact-active {
        background: white;
        color: black;
        border-radius: 2px;

        .total_in_cart {
          color: white;
        }
      }
    }
  }
}
</style>