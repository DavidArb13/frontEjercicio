<template>
  <div class="login">
    <div class="login__card">
      <h1 class="login__title">Register</h1>
      <form @submit.prevent="handleSubmit">
        <div class="login__form">
          <div class="login__form-inputs">
            <img
              class="login__form-img"
              src="../assets/img/Icons/mail.svg"
              alt="email"
            />
            <input
              class="login__form-input"
              type="text"
              placeholder="Email"
              name="email"
              v-model="email"
              @keyup="validateInput"
            />
          </div>
          <div class="login__form-inputs">
            <img
              class="login__form-img"
              src="../assets/img/Icons/lock.svg"
              alt="password"
            />
            <input
              class="login__form-input"
              type="text"
              placeholder="Password"
              name="password"
              v-model="password"
              @keyup="validateInput"
            />
          </div>
          <span class="login__error">{{ error }}</span>
          <button class="login__button">Register Now</button>
          <router-link class="login__description" to="/"> Go back </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { register } from "../services/Users";
import { dataSending, SwalAlert } from '../services/alerts'
import Swal from "sweetalert2";
export default {
  data() {
    return {
      error: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async handleSubmit() {
    try {
      if (this.error || !this.email || !this.password) {
        return this.error = 'Complete the fields'
      }
      dataSending();
      await register(this.email, this.password);
      Swal.close();
      SwalAlert('creado','Registro exitoso','success',"#bd0909");
      this.$router.push('/');

    } catch (error) {
        console.log(error);
        this.loading = false
        this.error = 'Email in use'
        this.email = ''
        this.password = ''
      }
    },

    validateInput() {
    if (!this.email) return this.error = 'Email required'
      this.error = ''

    if (!this.password) return this.error = 'Password required'
      this.error = ''
    }
  },
};
</script>

<style>
</style>