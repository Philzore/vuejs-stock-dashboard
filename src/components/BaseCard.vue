<template>
    <div class="card">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BaseCard'
  }
  </script>
  
  <style scoped>
  .card {
    background-color: #023A6233;
    padding: 20px 32px 20px 32px;
    border-radius: 16px;
    overflow: hidden;
  }



 
  </style>
  