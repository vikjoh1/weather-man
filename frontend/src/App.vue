<template>
  <div id="app">
    <Navbar />
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import DailyWeather from './components/DailyWeather.vue';
import Navbar from './templates/Navbar.vue';

export default defineComponent({
  name: 'App',

  components: {
    DailyWeather,
    Navbar
  }
  
})
</script>

<style lang="scss">

</style>