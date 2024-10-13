<!-- src/components/TableComponent.vue -->
<template>
    <table>
      <thead>
        <tr>
          <th v-for="header in headers" :key="header">{{ header }}</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td v-for="header in headers" :key="header">{{ item[header] }}</td>
          <td>
            <button @click="$emit('edit', item)">Editar</button>
            <button @click="$emit('delete', item.id)">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script>
  export default {
    props: {
      headers: {
        type: Array,
        required: true
      },
      items: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  