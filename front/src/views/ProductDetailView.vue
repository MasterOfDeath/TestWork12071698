<template>
  <b-row>
    <b-col>
      <product-detail
        :product="getProductById(productId)"
        @save-product-clicked="saveProduct"
        @delete-product-clicked="deleteProduct"
      />
    </b-col>
  </b-row>
</template>

<script>
import ProductDetail from '../components/ProductDetail.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'ProductDetailView',
  components: {
    ProductDetail
  },
  data: () => {
    return {
      productId: 0
    }
  },
  computed: {
    ...mapGetters('products', [
      'getProductById'
    ]),
  },
  created () {
    this.productId = parseInt(this.$route.params['id'])
    if (this.productId) {
      this.$store.dispatch('products/getProduct', { productId: this.productId })
    }
  },
  methods: {
    ...mapMutations('ui', [
      'showToast',
    ]),
    saveProduct(productData) {
      if (productData['id']){
        this.$store.dispatch('products/editProduct', productData).then(() => {
          this.showToast({ title: 'Success', content: 'Product was edited', variant: 'success' })
          this.$router.push({name: 'HomeRoute'})
        })
      } else {
        this.$store.dispatch('products/addProduct', productData).then(() => {
          this.showToast({ title: 'Success', content: 'Product was added', variant: 'success' })
          this.$router.push({name: 'HomeRoute'})
        })
      }
    },
    deleteProduct(productData) {
      if (productData['id']){
        this.$store.dispatch('products/deleteProduct', productData).then(() => {
          this.showToast({ title: 'Success', content: 'Product was deleted', variant: 'success' })
          this.$router.push({name: 'HomeRoute'})
        })
      }
    }
  }
}
</script>
