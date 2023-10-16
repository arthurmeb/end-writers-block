<template>
  <div>
    <h1>explanation box</h1>
    <button class="light-btn" @click="contentNext">next view</button>
  </div>
</template>

<script>
export default {
  props: ['contentNext', 'dummyProp'],
  setup(){

    return {}
  }

}
</script>

<style>

</style>