<template>
  <div>
    <b-sidebar id="sidebar-right" title="Menu" right shadow>
      <div class="sidebar">
        <router-link to="/Listproducts">
          <p class="sidebar__cont">Productos <i class="fas fa-boxes"></i></p>
        </router-link>
        <router-link to="/Create">
          <p class="sidebar__cont">Crear <i class="fas fa-plus-square"></i></p>
        </router-link>
        <router-link to="/Edit">
          <p class="sidebar__cont">
            Editar <i class="fas fa-pencil-ruler"></i>
          </p>
        </router-link>
        <router-link to="/Search">
          <p class="sidebar__cont">Consultar <i class="fas fa-search"></i></p>
        </router-link>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/sass/base/_variables.scss";
@import "../assets/sass/base/_mixins.scss";

.sidebar {
  padding: 15px;
  color: $white;

  &__cont {
    height: 60px;
    padding-top: 17px;
    color: $white;

    &:hover {
      background: $white;
      color: $lipstick;
      border-radius: 2pc;
      text-align: center;
      transition: 1s;
    }
  }
}

.b-sidebar.b-sidebar-right {
  top: 80px;
  border-top: 2px solid $lipstick;
  border-left: 2px solid $lipstick;
  border-radius: 2pc 0;
  transition: 3s;
  width: 95%;
}

.b-sidebar > .b-sidebar-body {
  background-color: $lipstick;
}

@media (min-width: $pocket_width) {
  .b-sidebar.b-sidebar-right {
    width: 250px;
  }
}
</style>