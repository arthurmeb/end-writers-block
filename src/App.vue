<template>
  <NaviBar :currentPage="currentPage" :loggedIn="loggedIn"/>
  <router-view/>
  <footer> Footer | By Beboo - Twitter | Email </footer>
</template>

<script>

import { useRoute } from "vue-router"
import NaviBar from "./components/NaviBar.vue"



export default ({
  components: {NaviBar},
  setup() {

    // Create prop that will pass user's current page to the navbar component

    let currentPage = useRoute()

    // define SSOT for user log in state (will base on firebase when integrated) USE APP.PROVIDE

    let loggedIn = true

    // define user's current stats 

    const currentDay = 0
    const maxDays = 0
    const streak = 0
    const amount = 0

    // methods to track stats




    return {loggedIn, currentPage, currentDay, maxDays, streak, amount}
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
