<template>
  <NavBar :page="page"/>
  <div class="home">
    <h1>This is the homepage</h1>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'


export default {
  name: 'HomeView',
  props: ['page'],
  components: {NavBar}

}
</script>
