<template>
  <div class="search-bar">
    <o-input v-model="userAddress"></o-input>
    <o-button @click="dailyWeather">Search location</o-button>
  </div>
  <div class="result-container" v-for="(data, index) in weatherData" :key="index">
    <h3>{{ data.city }}</h3>
    <p>latitude: {{ data.weatherData.latitude }}</p>
    <p>longitude: {{ data.weatherData.longitude }}</p>
    <p>elevation: {{ data.weatherData.elevation }}</p>
    <div class="week"> 
      <div class="day" v-for="(code, i) in data.weatherData.daily.weathercode" :key="i">
        <p>{{ formatDate(data.weatherData.daily.time[i]) }}</p>
        <i class="weathericons" :class="getWeatherIcon(code)"></i>
        <div class="temperature">
          <div class="low-temp">
            <font-awesome-icon :icon="['fas', 'temperature-low']" size="2xl" style="color: #1c5bca;"></font-awesome-icon>
            <p>{{ data.weatherData.daily.temperature_2m_min[i] }} °C</p>
          </div>
          <div class="high-temp">
            <font-awesome-icon :icon="['fas', 'temperature-high']" size="2xl" style="color: #e41a0c;"></font-awesome-icon>
            <p>{{ data.weatherData.daily.temperature_2m_max[i] }} °C</p>
          </div>
        </div>
        <div class="sun">
          <div class="sunrise">
            <i class="wi wi-sunrise color-yellow weathericons"></i>
            <p>{{ formatToTime(data.weatherData.daily.sunrise[i]) }}</p>
          </div>
          <div class="sunset">
            <i class="wi wi-sunset color-yellow weathericons"></i>
            <p>{{ formatToTime(data.weatherData.daily.sunset[i]) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
  import { defineComponent } from 'vue'
  import { fetchDailyWeather } from '../api/weather.api'
  import { WeatherCode, Daily, getWeatherIcon, getTemperatureIcon } from '../common/models/dailyWeather'
  import { formatDate, formatToTime } from '../common/libraries/day'

  export default defineComponent({
    name: 'DailyWeather',
    data() {
      return {
        userAddress: '' as string,
        latitude: 0 as number,
        longitude: 0 as number,
        elevation: 0 as number,
        daily: [] as Array<Daily>,
        time: [] as Array<string>,
        weathercode: [] as Array<WeatherCode>,
        temperature_2m_max: [] as Array<number>,
        temperature_2m_min: [] as Array<number>,
        sunrise: [] as Array<string>,
        sunset: [] as Array<string>,
        precipitation_sum: [] as Array<number>,
        rain_sum: [] as Array<number>,
        showers_sum: [] as Array<number>,
        snowfall_sum: [] as Array<number>,
        precipitation_hours: [] as Array<number>,
        windspeed_10m_max: [] as Array<number>,
        windspeed_10m_min: [] as Array<number>,
        weatherData: [] as Array<any>,
        getWeatherIcon,
        getTemperatureIcon,
        formatDate,
        formatToTime
      }
    },

    methods: {
      async dailyWeather() {
        const response = await fetchDailyWeather(this.userAddress)
        console.log(response)
        this.weatherData = response
      },
    },
  })
</script>

<style scoped>

  .day {
    border: 1px solid;
    padding: 10px;
    margin: 20px;
    border-radius: 10px;
  }

  .result-container {
    background-color: aqua;
    width: 500px;
    margin: 20px;
    padding-left: 20px;
    border-radius: 10px;
  }

  .weathericons {
    font-size: 50px;
  }

  .sun {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sunrise {
    display: flex;
    padding: 10px;
  }

  .sunset {
    display: flex;
    padding: 10px;
  }

  .temperature {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .high-temp {
    display: flex;
    padding: 10px;
  }

  .low-temp {
    display: flex;
    padding: 10px;
  }

  .color-yellow {
    color: yellow;
  }

  .color-white {
    color: white;
  }

  .color-blue {
    color: blue;
  }

  .color-grey {
    color: grey;
  }

</style>