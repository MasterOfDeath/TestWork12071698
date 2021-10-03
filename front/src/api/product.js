import axios from 'axios'
import Product from '../models/product'
import { API_LOCATION } from '../config'

export default {
  async getProducts () {
    const response = await axios.get(API_LOCATION + '/products/')
    const result = []
    if (response.data['data'] && Array.isArray(response.data['data'])) {
      response.data['data'].forEach(product_raw => {
        result.push(new Product(product_raw))
      })
    }

    return result
  },

  async getProduct (params) {
    let result = null
    const response = await axios.get(API_LOCATION + '/products/' + params['productId'] + '/')
    if (response.data['data']) {
      result = new Product(response.data['data'])
    }

    return result
  },

  async addProduct (params) {
    let result = null
    const response = await axios.post(API_LOCATION + '/products/', {
      name: params['name'],
      description: params['description']
    })

    if (response.data['data']) {
      result = new Product(response.data['data'])
    }

    return result
  },

  async editProduct (params) {
    let result = null
    const response = await axios.put(API_LOCATION + '/products/' + params['id'] + '/', {
      name: params['name'],
      description: params['description']
    })
    
    if (response.data['data']) {
      result = new Product(response.data['data'])
    }

    return result
  },

  async deleteProduct (params) {
    await axios.delete(API_LOCATION + '/products/' + params['id'] + '/')

    return parseInt(params['id'])
  }
}