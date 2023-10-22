import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";



// Replace with your Firebase project's configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIN80VAQjlhwCKnsYKPfAZ9ZPEqx9JwDM",
  authDomain: "endwriterblock.firebaseapp.com",
  projectId: "endwriterblock",
  storageBucket: "endwriterblock.appspot.com",
  messagingSenderId: "618276788174",
  appId: "1:618276788174:web:32bec4c4c4d0ba25be3d9f",
  measurementId: "G-09FSR77Z7D"
};

initializeApp(firebaseConfig);
createApp(App).use(router).mount('#app')

