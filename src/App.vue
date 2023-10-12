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

    // define SSOT for user log in state (will base on firebase when integrated)

    let loggedIn = true


    // this was a test to see what useRoute returns.. it returns just the path for ex /settings
    console.log('App vue route is:' + useRoute().path)

    return {loggedIn, currentPage}
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
