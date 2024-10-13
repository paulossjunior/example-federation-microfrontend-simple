// src/services/crudService.js
import axios from 'axios';

export const loadItems = async (url, page) => {
  try {
    const response = await axios.get(`${url}?page=${page}`);
    return {
      items: response.data.items,
      totalPages: response.data.totalPages,
    };
  } catch (error) {
    console.error('Erro ao carregar itens:', error);
    throw error;
  }
};

export const createItem = async (url, model) => {
  try {
    await axios.post(url, model);
  } catch (error) {
    console.error('Erro ao criar item:', error);
    throw error;
  }
};

export const editItem = async (url, model) => {
  try {
    await axios.put(`${url}/${model.id}`, model);
  } catch (error) {
    console.error('Erro ao editar item:', error);
    throw error;
  }
};

export const deleteItem = async (url, id) => {
  try {
    await axios.delete(`${url}/${id}`);
  } catch (error) {
    console.error('Erro ao excluir item:', error);
    throw error;
  }
};
