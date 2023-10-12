<template>
  <div class="home">
    <h1>This is the homepage</h1>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'


export default {
  name: 'HomeView',
  props: ['page'],

  setup(){
    // this was a test to see what useRoute returns.. it returns just the path for ex /settings
    console.log('Route is:' + useRoute().path)

    return {}
  }

}
</script>
