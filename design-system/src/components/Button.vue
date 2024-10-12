<template>
    <button :class="buttonClass">
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
  };
  </script>
  