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
                <button class="light-btn" @click="handleForward">{{ tag }}</button>
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
                <button class="light-btn" @click="handleForward">{{ tag }}</button>
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
                <button class="light-btn" @click="contentNext">{{ tag }}</button>

            </div>
            <input class="custom-input" type="text" name="customAmount" placeholder="Custom...">
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    props: ['contentNext', 'contentBack'],
    setup(props){

        // div group to reference when cycling on homeView

        const amountsComponent = ref()

        // choice tags arrays
        const wordsTags = [250, 500, 750, 1000, 1500, 2000, 2500, 3000, 4000]
        const daysTags = ['1 day', '2 days', '3 days', '5 days', '1 week', '2 weeks', '1 month', '2 months']
        const amountsTags = ['$1', '$2', '$3', '$5', '$10', '$15', '$20', '$50']

        // cycle through component views on button click

        let index = ref(0)
        const handleForward = () => {index.value++}
        const handleBack = () => {index.value--}

        props.contentBack
        props.contentNext
        
 
        // cycle to next component on custom input enter

        // take user inputs and send to stripe api

        return {index, wordsTags, daysTags, amountsTags, handleForward, amountsComponent, handleBack} 
    }

}
</script>

<style>

</style>