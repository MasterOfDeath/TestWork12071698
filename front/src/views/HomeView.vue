<template>
  <div>
    <b-row>
      <b-col>
        <b-button
          type="button"
          variant="primary"
          :to="{ name: 'ProductDetailRoute', params: { id: 0 }}"
        >
          Add product
        </b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <ProductList :products="products"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue'
import { mapState } from 'vuex'

export default {
  name: 'HomeView',
  components: {
    ProductList
  },
  computed: mapState({
    products: state => state.products.all
  }),
  async created () {
    await this.$store.dispatch('products/getAllProducts')
  },
}
</script>
