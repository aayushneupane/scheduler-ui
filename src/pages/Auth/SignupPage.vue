<template>
<h1>Create an account</h1>
<form>
    <p><input type="email" placeholder="Email" v-model="email"></p>
    <p><input type="password" placeholder="Password" v-model="password"></p>
    <p><button type="button" @click="register" value="Submit">Submit</button></p>
    <p><button @click="signInWithGoogle">Sign in with Google</button></p>
</form>
<AuthForm/>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { FirebaseError } from 'firebase/app'

const email = ref('')
const password = ref('')
const router = useRouter()

const register = async () => {
  console.log('register clicked')
  console.log('router', router)
  const auth = getAuth()
  console.log('auth before signup', auth)
  try {
    const signupResponse = await createUserWithEmailAndPassword(getAuth(), email.value, password.value)

    console.log('signupResponse', signupResponse)

    console.log('currentUser', auth.currentUser)

    if (signupResponse) {
      console.log('routing to home')
      router.push('/home')
    }
  } catch (err: any) {
    if (err instanceof FirebaseError) {
      console.log('Firebase error:', err)
    } else {
      console.log('Auth error', err)
    }
  }
}

const signInWithGoogle = () => {
  console.log('signInWIthGoogle clicked')
}

</script>
