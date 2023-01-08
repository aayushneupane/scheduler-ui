<template>
  <div class="flex items-center space-x-3" @click="showUnlinkModal">
    <div class="flex-shrink-0">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
    </div>
    <div class="flex-1 min-w-0">
      <p class="text-sm font-semibold text-gray-900 truncate dark:text-white">
        {{TypeOfConnector.TWITTER}}
      </p>
      <p class="text-sm text-gray-500 truncate dark:text-gray-400">
        {{username || ""}}
      </p>
    </div>
      <span class="inline-flex items-center text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full" :class="connectionColor" >
          <span class="w-2 h-2 mr-1 rounded-full" :class="dotColor"></span>
            {{status}}
      </span>
  </div>

  <Modal :size="'lg'" v-if="isShowUnlinkModal" @close="closeUnlinkModal">
    <template #body>
      <div class="p-6 text-center">
        <svg aria-hidden="true" class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to unlink Twitter?</h3>
        <button @click="closeUnlinkModal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
            Yes, I'm sure
        </button>
        <button @click="closeUnlinkModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
      </div>
    </template>
  </Modal>

</template>

<script setup lang="ts">
import { Connectors, getConnectionStatusColor, getConnectionDotColor } from '.'
import { TypeOfConnector } from '../../models/Connector'

import { Modal } from 'flowbite-vue'
import { ref } from 'vue'

const { username, status } = Connectors.Twitter

const dotColor = getConnectionDotColor(status)
const connectionColor = getConnectionStatusColor(status)

const isShowUnlinkModal = ref(false)

function closeUnlinkModal () {
  isShowUnlinkModal.value = false
}
function showUnlinkModal () {
  isShowUnlinkModal.value = true
}

</script>
