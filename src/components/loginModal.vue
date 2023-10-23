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
            </div>
            <p>Have an account? <span style="color: blue;" @click="toggleMode">Log in</span></p>
        </div>
    </div>
            

        <!--Login modal-->
    <div class="backdrop" v-if="!signup">
        <div class="popup" v-if="!signup">
            <h1> Login doeeeeeeeee</h1>
            <div>
                <input type="email" required label="email" v-model="email">
                <input type="password" required label="password" v-model="password">
                <p v-if="loginError">{{ loginError }}</p>
            </div>
            <div>
                <button @click="login">Log in</button>
                <button @click="signGoogle">Login in with Google</button>
            </div>
            <p>New? <span style="color: blue;" @click="toggleMode">Register</span></p>
        </div>
    </div>

  
</template>

<script>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from 'vue-router';


export default {
    emits: ['loginDone'],
    setup(props, {emit}){
    const router = useRouter()

    // toggle modal view

    let signup = ref(true)
    let toggleMode = () => {signup.value = !signup.value}

    // sign up flow

    const email = ref('')
    const password = ref('')
    let loginError = ref()

    const register = () => {
        createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then(() => {
            console.log('Gg u registered buddy');
            router.push('/playground')
            emit('loginDone')
        })
        .catch((error) => {
            console.log(error.code);
            alert(error.message);
        });
    }

        // log in flow

        const login = () => {
        signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then(() => {
            console.log('You logged in buddy')
            router.push('/playground')
            emit('loginDone')
        })
        .catch((error) => {
            console.log(error.code);
            loginError.value = error.code
            alert(error.message);
        });
    }



        // Oauth

    const signGoogle = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(getAuth(), provider)
        .then((result) => {
            console.log(result.user)
            router.push("/playground")
            emit('loginDone')
        })
        .catch((error) => {
            console.log(error)
        })
    }

    // @click for backdrop

    return {signup, toggleMode, email, password, register, signGoogle, router, login, loginError}

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

