<template>
  <router-view/>
  <footer> Footer | By Beboo - Twitter | Email </footer>
</template>

<script>


export default ({
  setup() {

    // define SSOT for user log in state (will base on firebase when integrated)

    let loggedIn = false

    return {loggedIn}
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
