<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Auth, getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { FirebaseError } from 'firebase/app'
import NavBar from './components/NavBar.vue'
const isLoggedIn = ref(false)
const router = useRouter()
let auth: Auth
onMounted(() => {
  auth = getAuth()
  console.log('auth', auth)
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
      console.log('app loggedin', isLoggedIn.value)
    } else {
      isLoggedIn.value = false
      console.log('app loggedin', isLoggedIn.value)
    }
  })
})
</script>

<template>
  <NavBar :isLoggedIn="isLoggedIn" :auth="auth"/>
  <!-- <nav>
    <router-link to ="/">Home | </router-link>
    <router-link to ="/about">About | </router-link>
    <router-link to ="/login" v-if="!isLoggedIn" >Log In | </router-link>
    <router-link to ="/signup" v-if="!isLoggedIn" >Sign up | </router-link>
    <button @click="handleSignout" v-if="isLoggedIn">Sign Out</button>
  </nav> -->
  <router-view />
  <!-- Main modal -->

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
