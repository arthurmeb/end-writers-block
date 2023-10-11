<template>
    <nav>
        <!-- Change navbar buttons based on user log in state and current page-->

        <!-- Show login button whenever user not loggedin-->

        <button class="light btn" @click="loginModal" v-if="!loggedIn">Log in</button>
 

        <!-- Show logout button whenever user is loggedin-->

        <button class="dark btn" @click="registerModal" v-if="loggedIn">Log out</button>


        <!-- Show settings button whenever user loggedin and page is not settings-->

        <router-link to="/settings" v-if="loggedIn && page != 'settings'" >
            <button class=""> Settings </button>
        </router-link> 



        
    </nav>
</template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  
  </style>