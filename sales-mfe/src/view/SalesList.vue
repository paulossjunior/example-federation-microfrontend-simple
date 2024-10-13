<!-- src/views/SalesCrud.vue -->
<template>
  <h1> Vendas</h1>
  <crud-component
    :headers="['id', 'product', 'quantity', 'total']"
    url="/api/sales"
  >
    <template #form-fields>
      <input v-model="model.product" placeholder="Produto" />
      <input v-model="model.quantity" placeholder="Quantidade" type="number" />
      <input v-model="model.total" placeholder="Total" type="number" />
    </template>
  </crud-component>
</template>

<script>
import { CrudComponent } from 'design-system-paulossjunior';

export default {
  components: { CrudComponent }
};
</script>
