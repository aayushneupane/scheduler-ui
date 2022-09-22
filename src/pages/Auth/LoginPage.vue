<template>
  <div class="m-auto p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form class="space-y-6" action="#" @submit.prevent>
      <h5 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to Schedulr</h5>
      <div>
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
        <input v-model="email" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com">
      </div>
      <div>
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
        <input v-model="password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
      </div>
      <p class="text-red-500 text-xs italic">{{errorMsg}}</p>

      <button @click="signin" type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
      <div class ="justify-start">
        <button @click="signInWithGoogle" type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
          <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
          Google
        </button>
        <button type="button" class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
          <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
          Facebook
        </button>
      </div>
      <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
        Not registered? <a href="/signup" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
      </div>
      <!-- <div class="">
        <a href="#" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
      </div> -->
    </form>
  </div>
  <!-- <AuthForm/> -->
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { FirebaseError } from 'firebase/app'
import { generateErrorMessage } from './utils'

const email = ref('')
const password = ref('')
const router = useRouter()
const errorMsg = ref()

const signin = async () => {
  if (!validInput()) {
    console.log(errorMsg.value)
    return
  }
  const auth = getAuth()
  try {
    const signinResponse = await signInWithEmailAndPassword(auth, email.value, password.value)

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

const validInput = (): Boolean => {
  const emailRegex = /\S+@\S+\.\S+/u

  console.log('email', email.value, !emailRegex.test(email.value))
  console.log('password', password.value, !password.value)

  if (!emailRegex.test(email.value)) {
    errorMsg.value = 'Please enter a valid email'
    return false
  }

  if (!password.value) {
    errorMsg.value = 'Please enter your password'
    return false
  }
  return true
}

const signInWithGoogle = async () => {
  console.log('signInWIthGoogle clicked')
  const provider = new GoogleAuthProvider()
  try {
    const loginRes = await signInWithPopup(getAuth(), provider)
    console.log('user', loginRes.user)
    router.push('/home')
  } catch (err: any) {
    if (err instanceof FirebaseError) {
      console.log('Firebase signInWIthGoogle error:', err)
    } else {
      console.log('signInWIthGoogle error', err)
    }
  }
}

</script>
