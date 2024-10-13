// src/repositories/CrudRepository.js
import * as crudService from '../services/crudService.js';

export default class CrudRepository {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  async loadItems(page) {
    return await crudService.loadItems(this.apiUrl, page);
  }

  async createItem(model) {
    return await crudService.createItem(this.apiUrl, model);
  }

  async editItem(model) {
    return await crudService.editItem(this.apiUrl, model);
  }

  async deleteItem(id) {
    return await crudService.deleteItem(this.apiUrl, id);
  }
}
