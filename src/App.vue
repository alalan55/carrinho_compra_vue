<template>
  <NavBar/>
  <router-view />

</template>
<script>
import {NavBar} from '@/components/molecules'
export default {
  components:{
    NavBar
  }
}
</script>
