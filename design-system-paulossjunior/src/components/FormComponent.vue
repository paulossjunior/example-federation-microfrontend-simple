<!-- src/components/FormComponent.vue -->
<template>
    <form @submit.prevent="handleSubmit">
      <slot></slot>
      <button type="submit">{{ isEdit ? 'Editar' : 'Criar' }}</button>
    </form>
  </template>
  
  <script>
  export default {
    props: {
      isEdit: {
        type: Boolean,
        default: false
      },
      modelValue: {
        type: Object,
        default: () => ({})
      }
    },
    emits: ['submit'],
    methods: {
      handleSubmit() {
        this.$emit('submit', this.modelValue);
      }
    }
  };
  </script>
  