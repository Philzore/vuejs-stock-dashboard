<template>
  <div class="head-line">
    <hr>
    <h1>The Magnificent Seven Companies</h1>
  </div>

  <div>
    <BaseCard class="single-card-container">
      <SingleCard v-for="(card, index) in cards" :key="index" :img="card.img" :company="card.company"></SingleCard>
    </BaseCard>
  </div>

</template>

<script>
import BaseCard from './components/BaseCard.vue'
import { stockService } from '@/services/stockService';
import SingleCard from './components/SingleCard.vue';

export default {
  name: 'App',
  components: {
    BaseCard,
    SingleCard
  },
  data() {
    return {
      cards: [
        { img: '/img/apple.png', company: 'Apple' },
        { img: '/img/meta.png', company: 'Meta' },
        { img: '/img/microsoft.png', company: 'Microsoft' },
        { img: '/img/google.png', company: 'Google' },
        { img: '/img/amazon.png', company: 'Amazon' },
        { img: '/img/tesla.png', company: 'Tesla' },
      ]
    };
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

.head-line {
  position: absolute;
  left: 0;
  top: 64px;
  gap: 24px;
  display: flex;
  align-items: center;
}

hr {
  width: 96px;
  height: 32px;
  border-radius: 0px 100px 100px 0px;
  background-color: #39DAFF;
}

h1 {
  color: white;
}

h2 {
  margin: 0;
}

.single-card-container {
  display: flex;
  gap: 24px;
}

#app {
  padding: 150px 100px;
  width: 100vw;
  min-height: 100vh;
  background: radial-gradient(71.11% 100% at 50% 0%, #020204 14.6%, #011F35 100%);
  box-sizing: border-box;
}

.arrow-right {
  height: 32px;
  width: 32px;
}
</style>
