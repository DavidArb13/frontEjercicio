<template>
  <header class="header">
    <h2 class="header_logo">Products</h2>
    <div class="header__user">
      <img
        class="header__user-avatar"
        src="../assets/img/avatar.jpg"
        alt="Avatar"
      />
      <i class="fas fa-align-justify icon" v-b-toggle.sidebar-right></i>
      <button @click="handleLogout" class="header__user-logout">
        <router-link to="/">
          <img
            class="header__user-img"
            src="../assets/img/Icons/logout.svg"
            alt="Logout"
          />
        </router-link>
      </button>
    </div>
    <sidebar />
  </header>
</template>

<script>
import articles from "../services/Articles";
import sidebar from "../components/sidebar.vue";

export default {
  components: {
    sidebar,
  },
  methods: {
    handleLogout() {
      articles.setToken("");
      localStorage.clear();
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss">
@import "../assets/sass/base/_variables.scss";
@import "../assets/sass/base/_mixins.scss";
.header {
  position: sticky;
  top: 0;
  z-index: 1;
  height: 70px;
  padding: 0 50px;
  background-color: $lipstick;
  color: $white;
  display: flex;
  justify-content: center;
  align-items: center;

  &_logo {
    font-family: $first_font;
    font-size: $title-mobile;
  }
  &__user {
    display: flex;
    align-items: center;

    &-logout {
      background: none;
      border: none;
    }

    &-img {
      cursor: pointer;
      margin-left: 20px;
    }

    &-avatar {
      width: 50px;
      height: auto;
      border-radius: 2pc;
      object-fit: cover;
      visibility: hidden;
    }
  }
}

.icon {
  margin-left: 10px;
}

@media (min-width: $pocket_width) {
  .header {
    &__user {
      margin-left: 300px;
      &-img {
        gap: 10px;
        cursor: pointer;
        margin-left: auto;
      }
      &-avatar {
        visibility: visible;
      }
    }
  }
  .icon {
    margin-left: 10px;
    margin-right: 20px;
  }
}
</style>