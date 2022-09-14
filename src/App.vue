<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Auth, getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { FirebaseError } from 'firebase/app'
const isLoggedIn = ref(false)
const router = useRouter()
// const token = ''
let auth: Auth
onMounted(() => {
  auth = getAuth()
  console.log('auth', auth)
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
    } else {
      isLoggedIn.value = false
    }
  })
})

const handleSignout = async () => {
  try {
    const res = await signOut(auth)
    console.log('signout', res)
    router.push('/login')
  } catch (err: unknown) {
    if (err instanceof FirebaseError) {
      console.log('firebase logout error', err)
    } else {
      console.log('signout error', err)
    }
  }
}
</script>

<template>
  <nav>
    <router-link to ="/">Home | </router-link>
    <router-link to ="/about">About | </router-link>
    <router-link to ="/login" v-if="!isLoggedIn" >Log In | </router-link>
    <router-link to ="/signup" v-if="!isLoggedIn" >Sign up | </router-link>
    <!-- <router-link to ="">Sign Out</router-link> -->
    <button @click="handleSignout" v-if="isLoggedIn">Sign Out</button>
  </nav>
  <router-view />

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
