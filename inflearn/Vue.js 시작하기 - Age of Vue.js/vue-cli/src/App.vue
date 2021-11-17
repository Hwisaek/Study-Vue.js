<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">ID</label>
      <input type="text" name="username" id="username" v-model="username" />
    </div>
    <div>
      <label for="password">PW</label>
      <input type="password" name="password" id="password" v-model="password" />
    </div>
    <button type="submit">Login</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
      // event.preventDefault();
      console.log(this.username, this.password);
      var url = "https://jsonplaceholder.typicode.com/users";
      var data = {
        username: this.username,
        password: this.password,
      };
      axios
        .post(url, data)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>