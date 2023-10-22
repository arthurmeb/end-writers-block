<template>
  <div class="line">
    <div class="box">
      <h3>Set commitmen</h3>
      <p>
        Choose your minimum word count per day

Choose how many days you want to commit to

Choose how much you pay for each day you fail</p>
    </div>
    <div class="box">
      <h3>Write daily</h3>
      <p>
        Come back each day to write your minimum amount (or else!)

Use the rich text editor to write

Export your work when you’re done (copy and paste)

24h rolling clock from when u start
      </p>
    </div>
    <div class="box">
      <h3>Pay if you fail</h3>
      <p>
        The fun part (for me!)
Each day you fail to write your minimum amount, your card gets charged your selected amount
All the money goes to me (I won’t spend it wisely!)
      </p>
    </div>


  </div>
  <button class="dark-btn" @click="contentNext">Challenge yourself</button>
</template>

<script>
export default {
  props: ['contentNext'],
  setup(){

    return {}
  }

}
</script>

<style>

.line {
  display: flex;
  justify-content: space-between;
}

.box{
  white-space: pre-line;
}
</style>