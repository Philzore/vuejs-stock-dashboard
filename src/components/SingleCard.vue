<template>
  <div class="single-card">
    <div class="single-card-headline">
      <img :src="img">
      <h2 class="text-wh">{{ company }}</h2>
    </div>
    <div class="single-card-content">
      <span class="text-wh">{{ revenueText }}</span>
      <div class="revenue-numbers">
        <div class="text-wh">
          {{ revenue }}
        </div>
        <div class="revenue-result">
          <span class="text-wh">{{ revenuePoints }} </span>
          <span class="text-wh">{{ revenuePercent }} %</span>
        </div>
      </div>
      <span class="text-wh">In Bill USD</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleCard',
  props: ['img', 'company', 'revenueText' ,'revenue' , 'revenuePoints' ,'revenuePercent']
}
</script>

<style scoped>
.single-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-width: 175px;
  height: 145px;
  background-color: #011F35;
  padding: 20px 24px;
  border-radius: 16px;
  gap: 8px;
}

img {
  object-fit: contain;
}

h2 {
  margin: 0;
}

.text-wh {
  color: white;
}

.single-card-headline {
  display: flex;
  height: 24px;
}

.single-card-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.revenue-numbers {
  display: flex;
  align-items: center;
  gap: 4px;
}

.revenue-result {
  display: flex;
  flex-direction: column;
}
</style>