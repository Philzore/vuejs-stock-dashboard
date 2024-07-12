<template>
  <div>
    <BaseCard>
      <h1>Title</h1>
      <p>This is a paragraph inside the card.</p>
    </BaseCard>
    
  </div>

</template>

<script>
import BaseCard from './components/BaseCard.vue'
import { stockService } from '@/services/stockService';

export default {
  name: 'App',
  components: {
    BaseCard
  },
  async created() {
    this.data = await stockService.getRevenue('$AAPL');
    console.log('Loaded data', this.data);
  }
}
</script>

<style>
body {
  
  margin: 0;
  
  
}

#app {
  padding: 150px;
  width: 100vw;
  min-height: 100vh;
  background: radial-gradient(71.11% 100% at 50% 0%, #020204 14.6%, #011F35 100%);
  box-sizing: border-box;
}
</style>
