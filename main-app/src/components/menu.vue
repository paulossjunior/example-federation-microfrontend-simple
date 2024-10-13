<template>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><a href="http://localhost:5001" target="_blank">Design System</a></li>
        <li><a href="http://localhost:5002" target="_blank">Autenticação</a></li>
        <li><a href="http://localhost:5003" target="_blank">Produtos</a></li>
        <li><a href="http://localhost:5004" target="_blank">Vendas</a></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: "Menu"
  };
  </script>
  
  <style scoped>
  nav ul {
    list-style-type: none;
    padding: 0;
  }
  
  nav ul li {
    display: inline;
    margin-right: 15px;
  }
  </style>
  