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
</template>
