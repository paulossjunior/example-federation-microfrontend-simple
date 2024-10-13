// src/repositories/ProductRepository.js
import Product from '../model/Sale.js';

export default class SaleRepository {
  constructor(apiClient) {
    this.apiClient = apiClient; // Axios ou Fetch API
  }

  async fetchAllProducts() {
    try {
      const response = await this.apiClient.get('/sals');
      return response.data.map(product => new Sale(product.id, product.name, product.price));
    } catch (error) {
      console.error("Erro ao buscar produtos", error);
      return [];
    }
  }

  async fetchProductById(id) {
    try {
      const response = await this.apiClient.get(`/products/${id}`);
      const product = response.data;
      return new Product(product.id, product.name, product.price);
    } catch (error) {
      console.error(`Erro ao buscar produto com ID ${id}`, error);
      return null;
    }
  }

  async createProduct(product) {
    try {
      const response = await this.apiClient.post('/products', product);
      return new Product(response.data.id, response.data.name, response.data.price);
    } catch (error) {
      console.error("Erro ao criar produto", error);
    }
  }
}
