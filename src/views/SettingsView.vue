<template>
  <div class="home">
    <h1>This is the settings page</h1>
  </div>
</template>

<script>

import { useRoute } from 'vue-router'

export default {
  name: 'SettingsView',

  setup() {
    console.log('App vue route is:' + useRoute().path)
    const paste = (evt) => {console.log('you just pasted didnt you', evt)}

    return {paste}
  }
}
</script>
