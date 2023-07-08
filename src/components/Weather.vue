<template>
  <div>
    <input v-model="city" placeholder="enter city" />
    <button @click="selectCity">sub</button>
    <p v-if="result">temperature: {{ result.temperature }}</p>
    <p v-if="result">windspeed: {{ result.windspeed }}</p>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import cities from '../mock/city.json'
interface result {
  is_day: number
  temperature: number
  time: string
  weathercode: number
  winddirection: number
  windspeed: number
}
const city = ref('')
let result = ref<result[]>()
const selectCity = () => {
  console.log(city.value)
  const res = cities.filter((C) => {
    return C.city == city.value
  })
  // console.log(result)
  axios
    .get('https://api.open-meteo.com/v1/forecast', {
      params: {
        latitude: res[0].lat,
        longitude: res[0].lng,
        current_weather: true
      }
    })
    .then((response) => {
      console.log(response)
      result = response.data.current_weather
      console.log(result)
      city.value = ''
    })
    .catch((error) => {
      console.log(error)
    })
}
</script>
