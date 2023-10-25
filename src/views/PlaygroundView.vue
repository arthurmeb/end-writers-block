<template>
  <div class="playground">
    <div class="horizontal-group">
      <p>Quill value : {{  }}</p>
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
      <div id="editor" @paste.prevent>
        End writers block was made for a simple reason.
      
      </div>

      <p>{{wordCount.value}}/{{ lintMinWords }}words</p>
      <button class="dark-btn" @click="saveChanges">Save changes</button>
      <button class="dark-btn" @click="saveChanges"> I'm done! </button>

    </div>

    </div>

  </div>
</template>

<script>  

import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import {minWords, maxDays, dailyAmount} from 'c:/Users/APMeb/OneDrive/Documents/web-apps/end-writers-block/src/store'
import { collection, addDoc, Timestamp } from "firebase/firestore"; 
import { onMounted, ref } from 'vue';
import {db} from '../main.js'


export default { 
  components: {  },
  name: 'PlaygroundView',
  
  setup() {
    console.log(minWords, dailyAmount, maxDays)

    // dashboard data

    let streak = 4
    let currentDay = 1


    // Save Quill value to database
    let quillContent = ref('') // Store the Quill editor content

    // Track Quill current word count
    let wordCount = ref(0) // Initialize wordCount with 0

    let quill // Declare quill here

    onMounted(() => {
    // eslint-disable-next-line
      const quill = new Quill('#editor', {
      theme: 'snow',
    });
    });

    const quillCollection = collection(db, "quill")
    const saveChanges = async () => {
      try {
        console.log('Value:', 'word count:', wordCount.value)
         
        const docRef = await addDoc(quillCollection, {
          textValue: 'sup',
          timeAdded: Timestamp.now()
        })
        console.log("Document written with ID: ", docRef.id)
        console.log("Succesfully saved!")
      } catch (e) {
        console.error("Error adding document: ", e);
}
    }


    let lintMinWords = minWords
    let lintDailyAmount = dailyAmount
    let lintMaxDays = maxDays

    return {quillContent, quill, quillCollection, saveChanges, lintMinWords, lintDailyAmount, lintMaxDays, wordCount, streak, currentDay}

  }
}

</script>
