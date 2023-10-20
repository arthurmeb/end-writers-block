<template>
    <div class="backdrop">
        <!-- Signup modal -->
        <div class="popup" v-if="signup">
            <h1>Create a le account</h1>
            <input type="email" required label="email">
            <input type="password" required label="password">
            <p>Have an account? <span style="color: blue;" @click="toggleMode">Log in</span></p>
        </div>

        <!--Login modal-->
        <div class="popup" v-if="!signup">
            <h1> Login doeeee</h1>
            <input type="email" required label="email">
            <input type="password" required label="password">
            <p>New? <span style="color: blue;" @click="toggleMode">Register</span></p>
        </div>
    </div>
  
</template>

<script>
import { ref } from 'vue'
export default {
    setup(){

    let signup = ref(true)
    let toggleMode = () => {signup.value = !signup.value}

    // @click for backdrop

    return {signup, toggleMode}

    }
}
</script>

<style>

.backdrop { 
    display: block; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */


}
.popup {
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
}
</style>

