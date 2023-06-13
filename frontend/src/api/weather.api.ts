import axios from 'axios'

export async function fetchDailyWeather(address: string) {
  try {
    const response = await axios.get(`http://localhost:8080/daily?search=${address}`)
    return response.data
  } catch(error) {
    console.log(`fetchDailyWeather error: ${error}`)
  }
}