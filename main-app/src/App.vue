<template>
  <div id="app">
    <h1>Aplicação Principal</h1>
    <LoginMVC></LoginMVC>
    <product-list-CRUD></product-list-CRUD>
    <sales></sales>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    'product-list-CRUD': defineAsyncComponent(() => import('productMFE/ProductListCRUD')),
    'LoginMVC': defineAsyncComponent(() => import('authMFE/LoginMVC')),
    'sales': defineAsyncComponent(() => import('salesMFE/Sales')),
     },
};
</script>

