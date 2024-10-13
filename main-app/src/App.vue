<template>
  <div id="app">
    <h1>Aplicação Principal</h1>
    <design-system-button type="primary">Clique Aqui</design-system-button>
    
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    'design-system-button': defineAsyncComponent(() => import('designSystem/Button')),
     },
};
</script>

