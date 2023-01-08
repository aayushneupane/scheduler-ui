
<template>
  <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a href="https://schedulrapp.com/" class="flex items-center">
        <img src="../assets/logo.png" class="mr-3 h-6 sm:h-9" alt="Schedulr Logo">
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Schedulr</span>
      </a>
      <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
        <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a href="/" class="nav-item" aria-current="page">Home</a>
          </li>
          <li>
            <a href="/about" class="nav-item">About</a>
          </li>
          <li v-if="!isLoggedIn">
            <a href="/signin" class="nav-item">Sign In</a>
          </li>
          <li v-if="!isLoggedIn">
            <a href="/signup" class="nav-item">Sign up</a>
          </li>
          <li>
            <a href="/signout" @click="handleSignout" v-if="isLoggedIn" class="nav-item">Sign out</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { toRefs, Ref, ref, PropType } from 'vue'
import { Auth, getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { FirebaseError } from 'firebase/app'

const props = defineProps({
  // isLoggedIn: { type: Object as PropType<Ref<boolean>>, required: true }
  isLoggedIn: { type: Boolean, required: true }
})
const auth: Auth = getAuth()

const { isLoggedIn } = toRefs(props)

const router = useRouter()

const handleSignout = async () => {
  try {
    const res = await signOut(auth)
    console.log('signout', res)
    router.push('/signin')
  } catch (err: unknown) {
    if (err instanceof FirebaseError) {
      console.log('firebase logout error', err)
    } else {
      console.log('signout error', err)
    }
  }
}

</script>

<style>
  .nav-item {
    @apply block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700;
  }
</style>
