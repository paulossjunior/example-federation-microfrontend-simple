<template>
    <div>
      <h2>Lista de Produtos</h2>
      <ul>
        <li v-for="product in products" :key="product.id">{{ product.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          { id: 1, name: 'Produto 1' },
          { id: 2, name: 'Produto 2' },
        ],
      };
    },
  };
  </script>
  