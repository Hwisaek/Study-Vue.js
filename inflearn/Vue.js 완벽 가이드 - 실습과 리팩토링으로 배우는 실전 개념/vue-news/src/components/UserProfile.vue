<template>
  <div>
    <!-- 질문 상세 정보 -->
    <div class="user-container">
      <div><i class="fas fa-users"></i></div>
      <div class="user-description">
        <div>
          <slot name="username"> {{ info.id }}</slot>
        </div>
        <div class="time">
          <slot name="time">{{ info.created }}</slot>
          <slot name="karma"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object,
  },
  //   computed: {
  //     userInfo() {
  //       return this.$store.state.user;
  //     },
  //   },
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}

.fa-users {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>