<template>
  <div>
    <form-component :model-value="model" :is-edit="isEdit" @submit="handleSubmit">
      <slot name="form-fields" :model="model"></slot>
    </form-component>

    <!-- Verifica se a lista items foi carregada -->
    <div v-if="items && items.length > 0">
      <!-- Exibe a tabela se houver itens -->
      <table-component :headers="headers" :items="items" @edit="editItemAction" @delete="deleteItemAction" />
    </div>
    
    <!-- Mostra mensagem "Sem dados" se não houver itens -->
    <div v-else>
      <p v-if="!isLoading">Sem dados</p>
    </div>

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
      items: [], // Inicializa como array vazio
      isEdit: false,
      totalPages: 1,
      controller: null,
      isLoading: true, // Adicionado para controle de carregamento
    };
  },
  created() {
    this.controller = new CrudController(this.url);
    this.loadItems(1);
  },
  methods: {
    async loadItems(page) {
      try {
        this.isLoading = true; // Inicia o carregamento
        const response = await this.controller.loadItems(page);
        
        // Verifica se a resposta contém os dados esperados
        if (response && response.items && Array.isArray(response.items)) {
          this.items = response.items;
          this.totalPages = response.totalPages || 1; // Define totalPages, mesmo que seja indefinido
          this.currentPage = page;
        } else {
          console.error('A resposta da API não contém os itens esperados.');
          this.items = []; // Garante que items seja um array vazio em caso de erro
        }
      } catch (error) {
        console.error('Erro ao carregar itens:', error);
        this.items = []; // Em caso de erro, inicializa como array vazio
      } finally {
        this.isLoading = false; // Finaliza o carregamento
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
