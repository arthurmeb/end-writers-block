<template>
    <nav>
        <!-- Change navbar buttons based on user log in state and current page-->

        <!-- Show login button whenever user not loggedin-->

        <button class="light btn" @click="$emit('loginPressed')" v-if="!loggedIn">Log in</button>
 

        <!-- Show logout button whenever user is loggedin-->

        <button class="dark btn" @click="$emit('loggoutPressed')" v-if="loggedIn">Log out</button>


        <!-- Show settings button whenever user loggedin && page is not settings-->

        <router-link to="/settings" v-if="loggedIn && currentPage.path != '/settings'" >
            <button class="" @click="$emit('bebe')"> Settings </button>
        </router-link> 

        
        <!-- Show playground button whenever user loggedin && page is not playground-->

        <router-link to="/playground" v-if="loggedIn && currentPage.path != '/playground'" >
            <button class=""> Playground </button>
        </router-link>
        
    </nav>
</template>
  
  <script>
  export default ({
    props: ['loggedIn', 'currentPage'],
    setup() {  
        const loggg = () => {console.log('received')}
    return {loggg}        
    }
  

  })
  </script>
  
  <style>
  
  </style>