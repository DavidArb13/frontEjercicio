<template>
    <div class="edit">
    <div class="edit__card">
      <h1 class="edit__title">Editar</h1>
      <form @submit.prevent="handleSubmit">
        <div class="edit__form">
          <div class="edit__form-inputs">
            
            <input
              class="edit__form-input"
              type="text"
              placeholder="Title"
              name="title"
              v-model="title"
              @keyup="validateInput"
            />
          </div>
          <div class="edit__form-inputs">
            
            <input
              class="edit__form-input"
              type="number"
              placeholder="Precio"
              name="price"
              v-model="price"
              @keyup="validateInput"
            />
          </div>
          <div>
            <b-form-rating
              id="rating-inline"
              inline
              value=""
              name="qualification"
              variant="warning"
            ></b-form-rating>
          </div>
          <b-form-file class="edit__file" name="image" size="sm"></b-form-file>

          <span class="edit__error">{{ error }}</span>
          <button class="edit__button">Sign In</button>
          <router-link class="edit__description" to="/listproducts">
            Go Back
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "../assets/sass/base/_variables.scss";
@import "../assets/sass/base/_mixins.scss";
.edit {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: $white;
  font-size: 16px;

  &__card {
    max-width: 80%;
    min-height: 350px;
    border-radius: 2pc;
    text-align: center;
    background: $lipstick;
    color: $chicago;
    font-family: $first_font;
    box-shadow: 50px 50px 93px #5a5a5a, -50px -50px 93px #ffffff;
  }

  &__title {
    font-size: $title-mobile;
    color: $white;
    margin: 30px auto;
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
  }

  &__description {
    color: $white;
  }

  &__file {
    margin-top: 10px;
    width: 50%;
  }
}

.custom-file-input ~ .custom-file-label[data-browse]::after {
    display: none;
}
</style>