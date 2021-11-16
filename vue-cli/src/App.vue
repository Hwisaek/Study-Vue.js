<template>
  <div>
    <app-header></app-header>
    {{ str }}
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },
  data() {
    return {
      str: "hi",
    };
  },
};
</script>

<style>
</style>