<template>        

    <!-- Signup modal -->
    <div class="backdrop" v-if="signup">

        <div class="popup" v-if="signup">
            <h1>Create a le account</h1>
        <div>          
                <input type="email" required label="email" v-model="email">
                <input type="password" required label="password" v-model="password">
            </div>
            <div>
                <button @click="register">Sign up</button>
                <button @click="signGoogle">Sign in with Google</button>
                <button @click="signApple">Sign in with Apple</button>
            </div>
            <p>Have an account? <span style="color: blue;" @click="toggleMode">Log in</span></p>
        </div>
    </div>
            

        <!--Login modal-->
    <div class="backdrop" v-if="!signup">
        <div class="popup" v-if="!signup">
            <h1> Login doeeee</h1>
            <div>
                <input type="email" required label="email">
                <input type="password" required label="password">
            </div>
            <div>
                <button @click="login">Sign up</button>
                <button @click="loginGoogle">Login in with Google</button>
                <button @click="loginApple">Login in with Apple</button> 
            </div>
            <p>New? <span style="color: blue;" @click="toggleMode">Register</span></p>
        </div>
    </div>

  
</template>

<script>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router';


export default {
    setup(props, {emit}){
    const router = useRouter()

    // toggle modal view

    let signup = ref(true)
    let toggleMode = () => {signup.value = !signup.value}

    // sign in sign up flow

    const email = ref('')
    const password = ref('')

    const register = () => {
        createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then(() => {
            console.log('Gg u registered buddy');
            router.push('/playground')
            toggleMode()
            emit('loginDone')
        })
        .catch((error) => {
            console.log(error.code);
            alert(error.message);
        });
    }

    const signGoogle = () => {

    }

    const signApple = () => {

    }

    // @click for backdrop

    return {signup, toggleMode, email, password, register, signApple, signGoogle, router}

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

