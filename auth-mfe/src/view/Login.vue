<template>
  <div>
    <h2>Login MVC</h2>
    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Senha" />
    <button @click="login">Entrar</button>
  </div>
</template>

<script>
import AuthController from '../controllers/AuthController';
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      const apiClient = axios.create({
        baseURL: 'http://localhost:4000/api',
      });
      const authController = new AuthController(apiClient);
      const credentials = { email: this.email, password: this.password };
      const user = await authController.login(credentials);
      console.log("Usuário logado:", user);
    },
  },
};
</script>
