<template>
  <div id="app">
    <h1>Aplicação Principal</h1>
    <design-system-button type="primary">Clique Aqui</design-system-button>
    <auth-login></auth-login>
    <product-list></product-list>
    <sales></sales>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    'design-system-button': defineAsyncComponent(() => import('designSystem/Button')),
    'auth-login': defineAsyncComponent(() => import('authMFE/Login')),
    'product-list': defineAsyncComponent(() => import('productMFE/ProductList')),
    'sales': defineAsyncComponent(() => import('salesMFE/Sales')),
  },
};
</script>
