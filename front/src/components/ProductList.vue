<template>
  <b-table
    striped hover
    :class="['products-list']"
    :items="products"
    @row-clicked="onRowClicked"
  >
    <template #cell(created_at)="data">
      {{ data.value | dateFormat }}
    </template>
    <template #cell(updated_at)="data">
      {{ data.value | dateFormat }}
    </template>
  </b-table>
</template>

<script>
export default {
  props: {
    products: Array,
  },
  methods: {
    onRowClicked(item) {
      this.$router.push({ name: 'ProductDetailRoute', params: { id: item.id }})
    }
  },
  filters: {
    dateFormat: value => {
      if (!value) {
        return ''
      }

      return `${value.getFullYear()}-`
        + `${('0' + (value.getMonth() + 1)).slice(-2)}-`
        + `${('0' + value.getDate()).slice(-2)} `
        + `${('0' + value.getHours()).slice(-2)}:`
        + `${('0' + value.getMinutes()).slice(-2)}`
    }
  }
}
</script>

<style>
  .table.products-list tbody tr {
    cursor: pointer;
  }
</style>
