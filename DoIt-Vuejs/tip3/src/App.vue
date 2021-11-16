<template>
  <div id="app">
    <button type="button" class="btn btn-primary btn-lg">Large button</button>
    <Chart></Chart>
  </div>
</template>

<script>
import Chart from "./Chart.vue";

export default {
  name: "app",
  components: {
    Chart,
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<style>
</style>