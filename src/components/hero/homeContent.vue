<template>
      <div>

        <i class="fas fa-arrow-left" @click="handleBack" v-if="index > 0"></i>
        <i class="fas fa-arrow-left" @click="contentBack" v-else></i>
        <p>current index: {{ index }}</p>

        <!-- Daily word choice group -->
        
        <div class="horizontal-group" v-if="index == 0">
            <div class="card">
                <h1>Minimum daily word count</h1>
                <p> Each day I want to write atleast..</p>
            </div>

            <div class="tags" v-for="tag in wordsTags" :key="tag">
                <button class="light-btn" @click="handleForward(); handleWords(tag)">{{ tag }}</button>
            </div>
            <input class="custom-input" type="text" name="customWords" placeholder="Custom...">
        </div>

        <!-- Days choice group-->

        <div class="horizontal-group" v-if="index == 1">
            <div class="card">
                <h1>Number of days</h1>
                <p> I want to write for...</p>
            </div>

            <div class="tags" v-for="tag in daysTags" :key="tag">
                <button class="light-btn" @click="handleForward(); handleDays(tag)" >{{ tag }} days</button>
            </div>
            <input class="custom-input" type="text" name="customDays" placeholder="Custom...">
        </div>

        <!-- Failure amount choice group-->

        <div class="horizontal-group" ref="amountsComponent" v-if="index == 2">
            <div class="card">
                <h1>Failure amount</h1>
                <p> Each day I fail I will pay...</p>
            </div>

            <div class="tags" v-for="tag in amountsTags" :key="tag">
                <button class="light-btn" @click="contentNext(); handleAmount(tag)">${{ tag }}</button>

            </div>
            <input class="custom-input" type="text" name="customAmount" placeholder="Custom...">
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    props: ['contentNext', 'contentBack'],
    setup(){

        // div group to reference when cycling on homeView

        const amountsComponent = ref()

        // choice tags arrays
        const wordsTags = [250, 500, 750, 1000, 1500, 2000, 2500, 3000, 4000]
        const daysTags = [1, 2, 3, 4, 5, 14, 30, 60]
        const amountsTags = [1, 2, 3, 5, 10, 15, 20, 50]

        // cycle through component views on button click

        let index = ref(0)
        const handleForward = () => {index.value++}
        const handleBack = () => {index.value--}


        // cycle to next component on custom input enter

        // store user inputs from button clicks

        let minWords = 0
        let maxDays = 0
        let dailyAmount = 0

        
        const handleWords = (tag) => {minWords = tag, console.log(minWords)}
        const handleDays = (tag) => {maxDays = tag, console.log(maxDays)}
        const handleAmount = (tag) => {dailyAmount = tag, console.log(dailyAmount)}



        return {minWords, index, wordsTags, daysTags, amountsTags, handleForward, amountsComponent, handleBack, maxDays, dailyAmount, handleAmount, handleDays, handleWords} 
    }

}
</script>

<style>

</style>