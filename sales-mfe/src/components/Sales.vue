<template>
    <div>
      <h2>Vendas</h2>
      <p>Total de vendas: {{ totalSales }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        totalSales: 5000,
      };
    },
  };
  </script>
  