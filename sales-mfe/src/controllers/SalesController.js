// src/controllers/ProductController.js
import ProductRepository from '../repositories/ProductRepository';

export default class ProductController {
  constructor(apiClient) {
    this.productRepository = new ProductRepository(apiClient);
  }

  async getAllProducts() {
    return await this.productRepository.fetchAllProducts();
  }

  async getProductById(id) {
    return await this.productRepository.fetchProductById(id);
  }

  async createNewProduct(product) {
    return await this.productRepository.createProduct(product);
  }
}
