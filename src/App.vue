<template>
  <div class="head-line">
    <hr>
    <h1>The Magnificent Seven Companies</h1>
  </div>

  <div class="content-section">
    <div>
      <BaseCard class="single-card-container">
        <SingleCard v-for="(item, index) in data" :key="index" :img="item.img" :company="item.company"></SingleCard>
      </BaseCard>
    </div>

    <div class="middle-section">
      <BaseCard class="lighter-bg"></BaseCard>
      <BaseCard class="lighter-bg"></BaseCard>
    </div>

    <div class="lower-section">
      <BaseCard class="lighter-bg"></BaseCard>
      <BaseCard class="lighter-bg"></BaseCard>
      <BaseCard class="lighter-bg"></BaseCard>
    </div>
  </div>
</template>

<script>
import BaseCard from './components/BaseCard.vue'
import { stockService } from '@/services/stockService';
import SingleCard from './components/SingleCard.vue';
import data from '@/services/stockData';


export default {
  name: 'App',
  components: {
    BaseCard,
    SingleCard
  },
  data() {
    return {
      data: data,
    };
  },

  async created() {
    for (let index = 0; index < data.length; index++) {
      
      const company = data[index];
      console.log(company.gidNr);
      let allData = await stockService.fetchData(company.gidNr);
      data[index].quarters = allData[2];
      data[index].revenue = allData[data[index].revenueLine];
      data[index].grossMargin = allData[data[index].grossMarginLine];
      data[index].netIncome = allData[data[index].netIncomeLine];
    }
    console.log(data);
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

.lighter-bg {
  background-color: #011F35 !important;
}

.content-section {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.middle-section {
  display: flex;
  justify-content: space-between;

}

.lower-section {
  display: flex;
  justify-content: space-between;
}
</style>
