import AuthRepository from '../repositories/AuthRepository';

export default class AuthController {
  constructor(apiClient) {
    this.authRepository = new AuthRepository(apiClient);
  }

  async login(credentials) {
    return await this.authRepository.login(credentials);
  }

  async register(userDetails) {
    return await this.authRepository.register(userDetails);
  }
}
