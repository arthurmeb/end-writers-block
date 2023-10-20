<template>
  <div class="home">
    <LoginModal v-if="loginMode"/>
    <h1>This is the homepage. Content: {{ content }}</h1>

    <div>
      <i class="fas fa-arrow-left" @click="contentBack" v-if="content >= 0 && content != 1"></i>
      <div v-if="content == 0">
        <ExplanationBox :contentNext="contentNext"/>
      </div>

      <div v-if="content == 1">
        <HomeContent :contentNext="contentNext" :contentBack="contentBack"/>
      </div>

      <div v-if="content == 2">
        <CreditCard :contentNext="contentNext" :contentBack="contentBack"/>
      </div>

    </div>
  </div>
</template>

<script>
import HomeContent from "@/components/hero/HomeContent.vue"
import ExplanationBox from "@/components/hero/ExplanationBox.vue"
import CreditCard from "@/components/hero/CreditCard.vue"
import LoginModal from "@/components/LoginModal.vue"
import { ref } from 'vue'



export default {
  name: 'HomeView',
  components: { HomeContent, ExplanationBox, CreditCard, LoginModal },

  setup(){
    let yes = true
    let content = ref(0)
    let loginMode = false
    let loginPressed = () => !loginMode
    // When pressing button on final view, cycle to next component box

    const contentNext = () => {content.value++, console.log(content)}

      // When pressing button on first view, cycle to previous component box

    const contentBack = () => {content.value--, console.log(content)}

    return {content, contentNext, contentBack, yes, loginMode, loginPressed}
  }

}
</script>
