import './index.css'
import 'flowbite'

import App from './App.vue'
import { createApp } from 'vue'
import { initializeApp } from 'firebase/app'
import router from './router'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: 'schedulr-125c3.firebaseapp.com',
  projectId: 'schedulr-125c3',
  storageBucket: 'schedulr-125c3.appspot.com',
  messagingSenderId: '722917587998',
  appId: '1:722917587998:web:63911226388e926787820f',
  measurementId: 'G-FHCDFS8S3V'
}

initializeApp(firebaseConfig)
const app = createApp(App)
app
  .use(router)
  .mount('#app')

// getAnalytics(app)
