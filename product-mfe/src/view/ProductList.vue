<!-- src/views/ProductList.vue -->
<template>
    <div>
      <h2>Lista de Produtos aplicando o padrão MVC</h2>
    <ul v-if="products.length > 0">
      <li v-for="product in products" :key="product.id">{{ product.name }} - {{ product.price }}</li>
    </ul>
    <p v-else>Sem produtos</p> <!-- Mensagem exibida quando não há produtos -->
    </div>
  </template>
  
  <script>
  import ProductController from '../controllers/ProductController';
  import axios from 'axios';
  
  export default {
    data() {
      return {
        products: [],
      };
    },
    async created() {
      const apiClient = axios.create({
        baseURL: 'http://localhost:4000/api', // URL do back-end
      });
      const productController = new ProductController(apiClient);
      this.products = await productController.getAllProducts();
    },
  };
  </script>
  