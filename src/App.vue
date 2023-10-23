<template>
  <NaviBar @loggoutPressed="loggemOut" @loginPressed="toggleLogin" :currentPage="currentPage" :loggedIn="loggedIn"/>
  <h1> firebase data is: {{ firebaseData }}</h1>
  <LoginModal  @loginDone="toggleLogin" v-if="loginMode"/>
  <router-view/>
  <footer> Footer | By Beboo - Twitter | Email </footer>
</template>

<script>

import { useRouter } from "vue-router"
import { useRoute } from "vue-router"
import NaviBar from "./components/NaviBar.vue"
import LoginModal from "@/components/LoginModal.vue"
import { onMounted, ref } from "vue"
import {onAuthStateChanged, getAuth, signOut} from "firebase/auth"
import {db} from './main.js'
import { Firestore } from "firebase/firestore"


export default ({
  components: {NaviBar, LoginModal},
  setup() {

    const router = useRouter()

    // show login modal

    let loginMode = ref(false)

    let toggleLogin = () => {loginMode.value = !loginMode.value, console.log(loginMode.value, 'loginMode toggled')}

    // Create prop that will pass user's current page to the navbar component

    let currentPage = useRoute()

    // checks user sign in state when app is mounted. Toggle loggedIn variable for navbar based on firebase provided user state
    let loggedIn = ref(false)
    let auth

    let loggemOut = () => {console.log('event emitted'), signOut(getAuth()).then(() => {router.push('/'), console.log('signed out')})}

    onMounted(()=> {
      auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        if (user) {
          loggedIn.value = true
          console.log('user is logged in')
        }
        else {
          loggedIn.value = false
          console.log('user is logged out')
        }
      })
    })

    // methods to track stats

    // save user data to firebase
    console.log(db,Firestore)

    return {loggedIn, currentPage, toggleLogin, loginMode, loggemOut, auth, router}
  },
})

</script>


<style>

#app {
  font-family: Outfit, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@import "~font-awesome/css/font-awesome.css";

nav {
  padding: 30px;
  border: 2px solid #000000;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

footer {
  border: 2px solid #000000;
}

</style>
