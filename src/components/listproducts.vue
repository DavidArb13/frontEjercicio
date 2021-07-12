<template>
  <div class="products">
    <div v-for="(item, index) in dat" :key="index">
      <div class="products__card">
        <img class="products__img" :src="item.image" alt="prodcuto" />
        <h4 class="products__title">{{ item.title }}</h4>
        <p class="products__price">${{ item.price }}</p>
        <div class="products__rating">
          <b-form-rating
            id="rating-inline"
            inline
            :value="item.qualification"
            variant="warning"
            disabled
          ></b-form-rating>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import articles from "../services/Articles";
export default {
  data() {
    return {
      dat: [],
    };
  },
  methods: {
    async gueArticlues() {
      articles.setToken();
      this.dat = await articles.getAll();
      console.log(this.dat);
    },
  },
  mounted() {
    this.gueArticlues();
  },
};
</script>

<style lang="scss">
@import "../assets/sass/base/_variables.scss";
@import "../assets/sass/base/_mixins.scss";
.products {
  padding: 30px 30px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;

  &__card {
    max-width: 100%;
    min-height: auto;
    border-radius: 2pc 0 2pc 0;
    background-color: $lipstick;
    color: $white;
    text-transform: uppercase;
    font-weight: bold;
    box-shadow: 20px 20px 60px #5a5a5a, -20px -20px 60px #ffffff;
    display: inline-block;
    margin-bottom: 30px;
  }

  &__img {
    width: 100%;
    height: auto;
    border-radius: 2pc 0 0 0;
    border-bottom: 3px solid;
  }

  &__title {
    text-align: center;
    font-family: $sec_font;
    display: block;
    background: $white;
    color: $chicago;
  }

  &__price {
    text-align: center;
    color: rgb(223, 223, 92);
  }

  &__rating {
    text-align: center;
    margin-top: -10px;
  }
}

@media (min-width: $pocket_width) {
  .products {
    padding: 30px 80px;

    &__card {
      max-width: 300px;
      min-height: 435px;
      margin: 0 60px 30px 0;
    }
  }
}
</style>