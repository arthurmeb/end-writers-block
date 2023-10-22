<template>
  <div class="box">
    <div>
      <h1>Settings</h1>
      <h3 @click="view = 0">Account details</h3>
      <h3 @click="view++">Card details</h3>
    </div>

    <div v-if="view == 0"> 
      <button>Reset password </button>
      <p>Challenge a friend</p>
    </div>

    <div v-if="view == 1">
      <button>Click here to change credit card info</button>
    </div>

  </div>
</template>

<script>
import { ref } from 'vue'


export default {
  name: 'SettingsView',

  setup() {

    let view = ref(0)


    return {view}
  }
}
</script>

<style scoped>
.box{
  display: flex;
  justify-content: space-between;
}
</style>