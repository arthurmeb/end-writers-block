<template>
  <NaviBar @loginPressed="toggleLogin" :currentPage="currentPage" :loggedIn="loggedIn"/>
  <LoginModal  v-if="loginMode"/>
  <router-view/>
  <footer> Footer | By Beboo - Twitter | Email </footer>
</template>

<script>

import { useRoute } from "vue-router"
import NaviBar from "./components/NaviBar.vue"
import LoginModal from "@/components/LoginModal.vue"
import { ref } from "vue"



export default ({
  components: {NaviBar, LoginModal},
  setup() {

    // show login modal

    let loginMode = ref(false)
    let toggleLogin = () => {loginMode.value = !loginMode.value, console.log(loginMode.value)}



    // Create prop that will pass user's current page to the navbar component

    let currentPage = useRoute()

    // define SSOT for user log in state (will base on firebase when integrated) USE APP.PROVIDE

    let loggedIn = false

    // define user's current stats 

    const currentDay = 0
    const maxDays = 0
    const streak = 0
    const amount = 0

    // methods to track stats




    return {loggedIn, currentPage, currentDay, maxDays, streak, amount, toggleLogin, loginMode}
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
