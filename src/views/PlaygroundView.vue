<template>
  <div class="playground">
    <div class="horizontal-group">

    <div>

      <div class="card">
        <h3>Day {{ currentDay }} of {{ maxDays }}</h3>
      </div>

      <div class="card">
        <h3>{{ streak }} day streak</h3>
      </div>

      <div class="card">
        <h3>{{ amount }} paid in laziness</h3>
      </div>

      <!-- The Quill editor -->
      <div id="editor" @paste.prevent>End Writers Block was made for one simple reason.</div>

      <p>uhh{{ minWords }}/words</p>
      <button class="dark-btn" v-if="button">submit</button>

    </div>

    </div>

  </div>
</template>

<script>  

import Quill from 'quill'
import 'quill/dist/quill.snow.css'


export default { 
  components: {  },
  name: 'PlaygroundView',
  mounted(){
    // eslint-disable-next-line
    const quill = new Quill('#editor', {
    theme: 'snow',

  });
  },
  setup() {

    //const button = () => {if ()} 

    return {}

  }
}
</script>
