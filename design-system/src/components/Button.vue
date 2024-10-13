<template>
  <button :class="buttonClass" @click="showMessage">
    <slot></slot>
  </button>
</template>
  
  <script>
  export default {
    props: {
      type: {
        type: String,
        default: 'primary',
      },
    },
    computed: {
      buttonClass() {
        return `btn-${this.type}`;
      },
    },
    methods: {
      showMessage() {
        alert('oi'); // Exibe uma mensagem "oi"
      },
  },
  };
  </script>
  