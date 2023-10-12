<template>
      <div>

        <i class="fa-solid fa-arrow-left" @click="handleBack" v-if="index >= 1"></i>
        <p>current index: {{ index }}</p>

        <!-- Daily word choice group -->
        
        <div class="horizontal-group" ref="wordsComponent" v-if="index == 0">
            <div class="card">
                <h1>Minimum daily word count</h1>
                <p> Each day I want to write atleast..</p>
            </div>

            <div class="tags" v-for="tag in wordsTags" :key="tag">
                <button class="light btn" @click="handleForward">{{ tag }}</button>
            </div>
            <input class="custom-input" type="text" name="customWords" placeholder="Custom...">
        </div>

        <!-- Days choice group-->

        <div class="horizontal-group" ref="daysComponent" v-if="index == 1">
            <div class="card">
                <h1>Number of days</h1>
                <p> I want to write for...</p>
            </div>

            <div class="tags" v-for="tag in daysTags" :key="tag">
                <button class="light btn" @click="handleForward">{{ tag }}</button>
            </div>
            <input class="custom-input" type="text" name="customWords" placeholder="Custom...">
        </div>

        <!-- Failure amount choice group-->

        <div class="horizontal-group" ref="amountsComponent" v-if="index == 2">
            <div class="card">
                <h1>Failure amount</h1>
                <p> Each day I fail I will pay...</p>
            </div>

            <div class="tags" v-for="tag in amountsTags" :key="tag">
                <button class="light-btn" @click="handleForward">{{ tag }}</button>

            </div>
            <input class="custom-input" type="text" name="customWords" placeholder="Custom...">
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup(){

        // choice tags arrays
        const wordsTags = [250, 500, 750, 1000, 1500, 2000, 2500, 3000, 4000]
        const daysTags = ['1 day', '2 days', '3 days', '5 days', '1 week', '2 weeks', '1 month', '2 months']
        const amountsTags = ['$1', '$2', '$3', '$5', '$10', '$15', '$20', '$50']

        // define component refs

        const wordsComponent = ref()
        const daysComponent = ref()
        const amountsComponent = ref()


        // cycle through component views on button click

        const currentComponent = [wordsComponent, daysComponent, amountsComponent]
        const index = 0
        const handleForward = () => {currentComponent[index+1]}
        const handleBack = () => {currentComponent[[index-1]]}
        
        // cycle to next component on custom input enter

        return {index, wordsTags, daysTags, amountsTags, handleForward, currentComponent, wordsComponent, daysComponent, amountsComponent, handleBack} 
    }

}
</script>

<style>

</style>>