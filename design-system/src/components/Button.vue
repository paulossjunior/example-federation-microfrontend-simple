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

<style scoped>
.btn {
  background-color: #42b883;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
  