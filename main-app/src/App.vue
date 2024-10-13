<template>
  <div id="app">
    <h1>Aplicação Principal</h1>
    <Button>Adicionar Produto</Button>
    <LoginMVC></LoginMVC>
    <product-list-CRUD></product-list-CRUD>
    <sales></sales>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { Button } from 'design-system-paulossjunior';

export default {
  
  components: {
    'product-list-CRUD': defineAsyncComponent(() => import('productMFE/ProductListCRUD')),
    'LoginMVC': defineAsyncComponent(() => import('authMFE/LoginMVC')),
    'sales': defineAsyncComponent(() => import('salesMFE/Sales')),
    Button,
     },
};
</script>

