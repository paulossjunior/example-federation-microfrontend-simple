<!-- src/views/ProductCrud.vue -->
<template>
  <h1> Produtos </h1>
  <crud-component
    :headers="['id', 'name', 'price']"
    url="/api/products"
  >
    <template #form-fields>
      <input v-model="model.name" placeholder="Nome do Produto" />
      <input v-model="model.price" placeholder="Preço" type="number" />
    </template>
  </crud-component>
</template>

<script>
import { CrudComponent } from 'design-system-paulossjunior';

export default {
  components: { CrudComponent }
};
</script>
