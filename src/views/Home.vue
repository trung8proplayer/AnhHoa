<template>
  <div>
    <home-products />
    <home-order />
    <home-article-introduce />
  </div>
</template>

<script>
import HomeProducts from '../components/HomeProducts.vue'
import HomeOrder from '../components/HomeOrder.vue'
import HomeArticleIntroduce from '../components/HomeArticleIntroduce.vue'

  export default {
    name: 'Home',

    components: {
        HomeProducts,
        HomeOrder,
        HomeArticleIntroduce,
    },
  }
</script>
