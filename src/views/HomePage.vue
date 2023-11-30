<template>
  <div>
    <h1 @click="toggleColor" :class="{ 'yellow-color': isTextClicked }">Home Page</h1>
  </div>
</template>

<script>
import homeLogic from './components/js/homeLogic.js';  

export default {
  mixins: [homeLogic]
};
</script>

<style scoped>
@import './components/css/sharedStyles.css';  
</style>

