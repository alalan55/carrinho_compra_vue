<template>
    <div class="home-template">
        <ContainerCards class="container-cards">
            <Card v-for="produto in products" :key="produto.id" :produto="produto" class="card"/>
        </ContainerCards>
    </div>
</template>

<script>
import {ContainerCards} from '@/components/bosons'
import {Card} from '@/components/organisms'
    export default {
        components:{
            ContainerCards,
            Card
        },
        props:{
            products: {type: Array, default: undefined}
        }
    }
</script>

<style lang="scss" scoped>
.home-template{
    .container-cards{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-evenly;

        // .card{
        //     flex: 0 0 350px;
        // }
    }
}

</style>