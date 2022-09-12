<script setup lang="ts">
// import { LoginPage } from './pages/Auth'

// const token = ''
</script>

<template>
  <!-- <router-view v-if="token"></router-view>
  <LoginPage v-else></LoginPage> -->

  <!-- <SignupPage /> -->
  <router-view />
  <div>Hello from App</div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
