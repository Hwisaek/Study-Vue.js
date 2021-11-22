<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="email">email: </label>
          <input id="email" type="text" v-model="email" />
        </div>
        <div>
          <label for="password">pw: </label>
          <input id="password" type="text" v-model="password" />
        </div>
        <div>
          <label for="name">name: </label>
          <input id="name" type="text" v-model="name" />
        </div>
        <button type="submit" class="btn">회원 가입</button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { registerUser } from '@/api/index';

export default {
  data() {
    return {
      // form values
      email: '',
      password: '',
      name: '',
      // log
      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
      const userData = {
        email: this.email,
        password: this.password,
        name: this.name,
      };
      const { data } = await registerUser(userData);
      console.log(data.token);
      this.logMessage = `${data.token} 님이 가입되었습니다`;
      this.initForm();
    },
    initForm() {
      this.email = '';
      this.password = '';
      this.name = '';
    },
  },
};
</script>

<style></style>
