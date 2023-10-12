<template>
      <div>
        <!-- Daily word choice group -->
        
        <div class="horizontal-group">
            <div class="card">
                <h1>Minimum daily word count</h1>
                <p> Each day I want to write atleast..</p>
            </div>

            <div class="tags" v-for="tag in wordsTags" :key="tag">
                <button class="light btn">{{ tag }}</button>
            </div>
            <input class="custom-input" type="text" name="customWords" placeholder="Custom...">
        </div>

        <!-- Days choice group-->

        <div class="horizontal-group">
            <div class="card">
                <h1>Number of days</h1>
                <p> I want to write for...</p>
            </div>

            <div class="tags" v-for="tag in daysTags" :key="tag">
                <button class="light btn">{{ tag }}</button>
            </div>
            <input class="custom-input" type="text" name="customWords" placeholder="Custom...">
        </div>

        <!-- Failure amount choice group-->

        <div class="horizontal-group">
            <div class="card">
                <h1>Failure amount</h1>
                <p> Each day I fail I will pay...</p>
            </div>

            <div class="tags" v-for="tag in amountsTags" :key="tag">
                <button class="light-btn">{{ tag }}</button>

            </div>
            <input class="custom-input" type="text" name="customWords" placeholder="Custom...">
        </div>
    </div>
</template>

<script>
export default {
    setup(){
        const wordsTags = [250, 500, 750, 1000, 1500, 2000, 2500, 3000, 4000]
        const daysTags = ['1 day', '2 days', '3 days', '5 days', '1 week', '2 weeks', '1 month', '2 months']
        const amountsTags = ['$1', '$2', '$3', '$5', '$10', '$15', '$20', '$50']


        return {wordsTags, daysTags, amountsTags}
    }

}
</script>

<style>

</style>>