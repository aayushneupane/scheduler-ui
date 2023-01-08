<template>
  <ul role="list" class="max-w-lg divide-y divide-gray-200 dark:divide-gray-700 content-center cursor-pointer">
    <li class="py-3 sm:py-4"><twitter-connection /></li>
    <li class="py-3 sm:py-4"><instagram-connection/></li>
  </ul>
</template>

<script setup lang="ts">
import { Modal } from 'flowbite-vue'
import { ref } from 'vue'

const isShowModal = ref(false)
function closeModal () {
  isShowModal.value = false
}
function showModal () {
  isShowModal.value = true
}
</script>
