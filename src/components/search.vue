<template>
  <div class="search">
    <label class="search__title">Buscar Producto:</label>
    <input
      class="search__input"
      type="search"
      id="site-search"
      name="_id"
      aria-label="Search through site content"
    />
    <button class="search__btn">Buscar</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/sass/base/_variables.scss";
@import "../assets/sass/base/_mixins.scss";
.search {
  max-width: 550px;
  height: 60px;
  padding: 15px 30px;
  margin: 60px auto;
  border-radius: 2pc;
  color: $white;
  display: flex;
  background-color: $lipstick;
  justify-content: space-around;
  text-align: center;
  box-shadow: 50px 50px 93px #5a5a5a, -50px -50px 93px #ffffff;

  &__title {
    font-weight: normal;
  }

  &__input {
    border: none;
    border-radius: 2pc;
    outline: none;
    color: $chicago;
  }

  &__btn {
    border: 1px solid $white;
    border-radius: 2pc;
    background: transparent;
    color: $white;
    &:hover {
      background: $white;
      color: $lipstick;
    }
  }
}
</style>