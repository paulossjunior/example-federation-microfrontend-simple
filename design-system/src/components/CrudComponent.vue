<!-- src/components/CrudComponent.vue -->
<template>
    <div>
      <form-component :model-value="model" :is-edit="isEdit" @submit="handleSubmit">
        <slot name="form-fields"></slot>
      </form-component>
  
      <table-component :headers="headers" :items="items" @edit="editItemAction" @delete="deleteItemAction" />
  
      <pagination-component
        :current-page="currentPage"
        :total-pages="totalPages"
        @page-changed="handlePageChange"
      />
    </div>
  </template>
  
  <script>
  import FormComponent from './FormComponent.vue';
  import TableComponent from './TableComponent.vue';
  import PaginationComponent from './PaginationComponent.vue';
  import CrudController from '../controllers/CrudController.js';
  
  export default {
    components: {
      FormComponent,
      TableComponent,
      PaginationComponent
    },
    props: {
      headers: {
        type: Array,
        required: true
      },
      url: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        currentPage: 1,
        model: {},
        items: [],
        isEdit: false,
        totalPages: 1,
        controller: null,
      };
    },
    created() {
      this.controller = new CrudController(this.url);
      this.loadItems(1);
    },
    methods: {
      async loadItems(page) {
        try {
          const { items, totalPages } = await this.controller.loadItems(page);
          this.items = items;
          this.totalPages = totalPages;
          this.currentPage = page;
        } catch (error) {
          console.error('Erro ao carregar itens:', error);
        }
      },
      async handleSubmit(model) {
        if (this.isEdit) {
          await this.controller.editItem(model);
        } else {
          await this.controller.createItem(model);
        }
        this.resetForm();
        this.loadItems(this.currentPage);
      },
      async deleteItemAction(id) {
        try {
          await this.controller.deleteItem(id);
          this.loadItems(this.currentPage);
        } catch (error) {
          console.error('Erro ao excluir item:', error);
        }
      },
      handlePageChange(page) {
        this.loadItems(page);
      },
      editItemAction(item) {
        this.model = { ...item };
        this.isEdit = true;
      },
      resetForm() {
        this.model = {};
        this.isEdit = false;
      }
    }
  };
  </script>
  