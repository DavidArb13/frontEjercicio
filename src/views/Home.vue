<template>
  <div>
    <autoHeader />
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import AutoHeader from "../components/header.vue";

export default {
  components: {
    AutoHeader,
  },
};
</script>

<style>
</style>