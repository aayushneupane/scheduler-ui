<script setup lang="ts">
import { getAuth } from 'firebase/auth'
import { ref } from 'vue'
import UploadFile from '../../components/UploadFile.vue'
const user = ref()
const auth = getAuth()
user.value = auth.currentUser?.displayName !== null ? auth.currentUser?.displayName?.split(' ')[0] : ''

</script>

<template>
  <div class="home">
    <UploadFile />
    <h1>Welcome to Schedulr{{`, ${user}`}}</h1>
    <h2>Please sign in to get started</h2>
  </div>
  <h1 class="mb-4 text-3xl font-bold text-blue-600 underline">
    Tailwind CSS 3 with vue js 3
  </h1>
  <button class="px-6 py-2 text-sm text-green-100 bg-indigo-600 rounded">Next</button>
</template>
