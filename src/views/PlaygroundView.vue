<template>
  <div class="playground">
    <div class="horizontal-group">

    <div>

      <div class="card">
        <h3>Day {{ currentDay }} of {{ lintMaxDays }}</h3>
      </div>

      <div class="card">
        <h3>{{ streak }} day streak</h3>
      </div>

      <div class="card">
        <h3>{{ lintDailyAmount }} paid in laziness</h3>
      </div>

      <!-- The Quill editor -->
      <div id="editor" @paste.prevent>End Writers Block was made for one simple reason.</div>

      <p>{{wordCount}}/{{ lintMinWords }}words</p>
      <button class="dark-btn" v-if="button">submit</button>

    </div>

    </div>

  </div>
</template>

<script>  

import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import {minWords, maxDays, dailyAmount} from 'c:/Users/APMeb/OneDrive/Documents/web-apps/end-writers-block/src/store'

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
    console.log(minWords, dailyAmount, maxDays)

    let streak = 0
    let currentDay = 1

    // Track Quill current word count
    const wordCount = 0

    //const button = () => {if ()} 

    let lintMinWords = minWords
    let lintDailyAmount = dailyAmount
    let lintMaxDays = maxDays

    return {lintMinWords, lintDailyAmount, lintMaxDays, wordCount, streak, currentDay}

  }
}
</script>
