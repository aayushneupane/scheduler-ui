<script setup lang="ts">
  import { ref } from 'vue'
  // import UploadFile from "../../components/UploadFile.vue"
  import UploadFile from "../../components/UploadFile.vue"

  // function onSignIn(googleUser: { getBasicProfile: () => any; }) {
  //   const profile = googleUser.getBasicProfile();
  //   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  //   console.log('Name: ' + profile.getName());
  //   console.log('Image URL: ' + profile.getImageUrl());
  //   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  // }
</script>

<template>
  <div class="home">
    <UploadFile />
    <h1>Welcome to Schedulr</h1>
    <h2>Please sign in to get started</h2>
    <!-- <div class="g-signin2" :data-onsuccess="onSignIn"></div> -->
  </div>
</template>
