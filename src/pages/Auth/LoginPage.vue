<template>
  <h1>Sign In</h1>
  <form>
      <p><input type="email" placeholder="Email" v-model="email"></p>
      <p><input type="password" placeholder="Password" v-model="password"></p>
      <p><button type="button" @click="register" value="Submit">Submit</button></p>
      <p><button @click="signInWithGoogle">Sign in with Google</button></p>
      <p v-if="errorMsg">{{errorMsg}}</p>
  </form>
  <AuthForm/>
  </template>

<script setup lang="ts">
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { FirebaseError } from 'firebase/app'
import { generateErrorMessage } from './utils'

const email = ref('')
const password = ref('')
const router = useRouter()
const errorMsg = ref()

const register = async () => {
  console.log('register clicked')
  console.log('router', router)
  const auth = getAuth()
  try {
    const signinResponse = await signInWithEmailAndPassword(getAuth(), email.value, password.value)

    console.log('signInResponse', signinResponse)

    console.log('currentUser', auth.currentUser)

    if (signinResponse) {
      console.log('routing to home')
      router.push('/home')
    }
  } catch (err: any) {
    if (err instanceof FirebaseError) {
      console.log('Firebase error:', err)
      errorMsg.value = generateErrorMessage(err)
    } else {
      console.log('Auth error', err)
    }
  }
}

const signInWithGoogle = () => {
  console.log('signInWIthGoogle clicked')
}

</script>
