// src/controllers/CrudController.js
import CrudRepository from '../repositories/CrudRepository.js';

export default class CrudController {
  constructor(apiUrl) {
    this.repository = new CrudRepository(apiUrl);
  }

  async loadItems(page) {
    return await this.repository.loadItems(page);
  }

  async createItem(model) {
    return await this.repository.createItem(model);
  }

  async editItem(model) {
    return await this.repository.editItem(model);
  }

  async deleteItem(id) {
    return await this.repository.deleteItem(id);
  }
}
