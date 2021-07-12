<template>
  <div class="login">
    <div class="login__card">
      <h1 class="login__title">Login</h1>
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
          <button class="login__button">Sign In</button>
          <router-link class="login__description" to="/register">
            Sign Up here
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { login } from "../services/Users";
import articles from "../services/Articles";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      loading: false,
      error: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        if (this.error || !this.email || !this.password) {
          this.error = "Complete los campos";
          return;
        }
        const user = await login(this.email, this.password);
        localStorage.setItem("user", JSON.stringify(user));
        articles.setToken();
        this.$router.push("/listproducts");
      } catch (error) {
        console.log(error);
        this.error = "Email and password do not match";
        this.email = "";
        this.password = "";
      }
    },

    validateInput() {
      if (!this.email) {
        this.error = "Email required";
        return;
      }
      this.error = "";
      if (!this.password) {
        this.error = "Password required";
        return;
      }
      this.error = "";
    },

    beforeCreate() {
      const user = localStorage.getItem("user");
      if (user) {
        this.$router.push("/Listproducts");
      }
    },
  },
};
</script>

<style lang="scss">
@import "../assets/sass/base/_variables.scss";
@import "../assets/sass/base/_mixins.scss";
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: $lipstick;
  font-size: 16px;

  &__card {
    max-width: 80%;
    min-height: 300px;
    border-radius: 2pc;
    text-align: center;
    background: $white;
    color: $chicago;
    font-family: $first_font;
    box-shadow: 50px 50px 100px #710505, -50px -50px 100px #ff0d0d;
  }

  &__title {
    font-size: $title-mobile;
    color: $lipstick;
    margin-top: 60px;
    text-transform: uppercase;
  }

  &__form {
    max-width: 80%;
    margin: auto;
    &-img {
      margin-right: 10px;
    }
    &-input {
      width: 80%;
      border-radius: 1pc;
      border: 1px solid $chicago;
      margin-bottom: 10px;
      outline: none;
    }
  }
  &__error {
    color: $lipstick;
    display: block;
  }

  &__button {
    display: block;
    margin: 10px auto;
    @include ButtonRedActive();
    border-radius: 1pc;
    &:hover {
      background: $lipstick;
      color: $white;
    }
  }

   &__description {
    color: $lipstick;
  }
}
</style>