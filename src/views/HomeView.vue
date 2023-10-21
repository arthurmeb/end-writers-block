<template>
  <div class="home">
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

import { ref } from 'vue'



export default {
  name: 'HomeView',
  components: { HomeContent, ExplanationBox, CreditCard },

  setup(){

    // When pressing button on final view, cycle to next component box

    let content = ref(0)
    const contentNext = () => {content.value++, console.log(content)}

      // When pressing button on first view, cycle to previous component box

    const contentBack = () => {content.value--, console.log(content)}

    return {content, contentNext, contentBack}
  }

}
</script>
