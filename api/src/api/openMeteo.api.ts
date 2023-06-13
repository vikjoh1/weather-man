import axios from "axios";
import { WeatherData } from "../models/weatherModel";

export async function getDailyWeatherData(latitude: number, longitude: number): Promise<WeatherData> {
  try {
    const response = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,windspeed_10m_max,windgusts_10m_max&winddirection_10m_dominant&windspeed_unit=ms&timezone=Europe%2FBerlin`
    )
    return response.data
  } catch(error) {
    console.log(error)
    throw error
  }
}

export async function getHourlyWeatherData(latitude: number, longitude: number): Promise<WeatherData> {
  try {
    const response = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&relativehumidity_2m&apparent_temperature&rain&showers&snowfall&weathercode&visibility&windspeed_10m&winddirection_10m`
    )
    return response.data
  } catch(error) {
    console.log(error);
    throw error
  }
}