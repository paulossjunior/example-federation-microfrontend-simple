import User from '../model/User.js';

export default class AuthRepository {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async login(credentials) {
    const response = await this.apiClient.post('/login', credentials);
    const user = response.data;
    return new User(user.id, user.name, user.token);
  }

  async register(userDetails) {
    const response = await this.apiClient.post('/register', userDetails);
    return response.data;
  }
}
