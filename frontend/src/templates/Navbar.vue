<template>
  <div class="weather-wrapper">
    <div class="nav-buttons">
      <o-button 
        class="daily-weather"
        :class="{ 'is-primary': chosenComponent === 'DailyWeather' }"
        @click="chosenComponent = 'DailyWeather'">
          <h2>Daily Weather</h2>
          <i class="fas fa-cloud-sun-rain fa-2xl"></i>
      </o-button>
      <o-button  
        class="weekly-weather"
        :class="{ 'is-primary': chosenComponent === 'WeeklyWeather' }"
        @click="chosenComponent = 'WeeklyWeather'">
          <h2>Weekly Weather</h2>
          <i class="fas fa-calendar-week fa-2xl"></i>
      </o-button>
    </div>
    <div class="main-content">
      <DailyWeather />
      <!--<component :is="chosenComponent" />-->
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import DailyWeather from '../components/DailyWeather.vue';
import WeeklyWeather from '../components/WeeklyWeather.vue';
export default defineComponent({
  name: 'Navbar',

  components: {
    DailyWeather,
    WeeklyWeather
  },

  data() {
    return {
      chosenComponent: 'DailyWeather'
    }
  }
  
})
</script>


<style scoped>

  .weather-wrapper {
    display: flex;
  }

  .main-content {
    margin: 20px;
    width: 2000px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .nav-buttons {
    display: flex;
    flex-direction: column;
  }

  .daily-weather {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    border-radius: 20px;
    width: 190px;
    height: 190px;
  }

  .weekly-weather {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    border-radius: 20px;
    width: 190px;
    height: 190px;
  }

</style>
