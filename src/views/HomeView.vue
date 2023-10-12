<template>
  <div class="home">

    <h1>This is the homepage</h1>

    <div v-if="wrong">
      <ExplanationBox/>
    </div>

    <div>
      <HomeContent/>
    </div>

    <div v-if="wrong">
      <CreditCard/>
    </div>

  </div>
</template>

<script>
import HomeContent from "@/components/hero/HomeContent.vue"
import ExplanationBox from "@/components/hero/ExplanationBox.vue"
import CreditCard from "@/components/hero/CreditCard.vue"



export default {
  name: 'HomeView',
  components: { HomeContent, ExplanationBox, CreditCard },
  props: [''],

  setup(){

    let wrong = false



    return {wrong}
  }

}
</script>
