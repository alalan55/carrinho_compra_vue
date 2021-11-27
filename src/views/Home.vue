<template>
  <div class="home">
      <HomeTemplate :products="products"/>
  </div>
</template>

<script>
// @ is an alias to /src
import {ref} from 'vue'
import {HomeTemplate} from '@/components/template'
import * as mock from '@/mock/mock.js'

export default {
  name: "Home",
  components: {
    HomeTemplate
  },
  setup(){
    const products = ref([]);

    function init(){
      products.value = mock.produtos
    }
    init();

    return{
      products
    }
  }
};
</script>
