<template>
  <div class="search-bar">
    <o-input v-model="userSearch"></o-input>
    <o-button @click="cityImage"></o-button>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { fetchImage } from '../api/image.api'
export default defineComponent({
  name: 'WeeklyWeather',

  data() {
    return {
      userSearch: '' as string,
      image: '' as string
    }
  },

  methods: {
    async cityImage() {
      const response = await fetchImage(this.userSearch)
      console.log(response)
      this.image = response
    }
  }

})
</script>