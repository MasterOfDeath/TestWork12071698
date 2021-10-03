<template>
  <b-form @submit="onSubmit">
    <b-form-group
      id="input-group-1"
      label="Name:"
      label-for="input-1"
    >
      <b-form-input
        id="input-1"
        :value="productName"
        placeholder="Enter name"
        ref="name"
        :state="nameValidation"
        @input="onNameInput"
        required
      ></b-form-input>
      <b-form-invalid-feedback :state="nameValidation">
        Name is required.
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="nameValidation">
        Looks Good.
      </b-form-valid-feedback>
    </b-form-group>

    <b-form-group id="input-group-2" label="Description:" label-for="input-2">
      <b-form-input
        id="input-2"
        :value="productDescription"
        placeholder="Enter description"
        ref="description"
        :state="descriptionValidation"
        @input="onDescriptionInput"
        required
      ></b-form-input>
      <b-form-invalid-feedback :state="descriptionValidation">
        Description is required.
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="descriptionValidation">
        Looks Good.
      </b-form-valid-feedback>
    </b-form-group>

    <div class="d-flex justify-content-between">
      <div>
        <b-button class="mr-1" type="submit" variant="success">Submit</b-button>
        <b-button type="button" variant="danger" @click="$router.push({name: 'HomeRoute'})">Cancel</b-button>
      </div>
      <div v-if="product && product['id']">
        <b-button
          type="button"
          variant="primary"
          @click="onDelete"
        >
          Delete product
        </b-button>
      </div>
    </div>
  </b-form>
</template>

<script>
export default {
  data() {
    return {
      inputName: null,
      inputDescription: null
    }
  },
  props: {
    product: Object,
  },
  computed: {
    productName: function () {
      return this.product?.name
    },
    productDescription: function () {
      return this.product?.description
    },
    nameValidation () {
      if (this.inputName === null) {
        return undefined
      }

      return this.inputName.length > 0
    },
    descriptionValidation () {
      if (this.inputDescription === null) {
        return undefined
      }

      return this.inputDescription.length > 0
    }
  },
  methods: {
    onNameInput(text) {
      this.inputName = text
    },
    onDescriptionInput(text) {
      this.inputDescription = text
    },
    onSubmit(event) {
      event.preventDefault()

      const id = this.product?.id
      const name = this.$refs.name.localValue
      const description = this.$refs.description.localValue

      this.$emit('save-product-clicked', { id, name, description });
    },
    onDelete() {
      if (this.product['id']) {
        this.$emit('delete-product-clicked', { id: this.product['id']});
      }
    }
  }
}
</script>
