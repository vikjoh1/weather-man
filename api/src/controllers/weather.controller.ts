import { geocode } from "../api/geocode.api";
import { getDailyWeatherData, getHourlyWeatherData } from "../api/openMeteo.api";
import { Request, Response } from "express";

export async function getDaily(req: Request, res: Response) {
  const address = String(req.query.search)
  
  if (!address) {
    res.status(400).json({ error: 'Address missing' })
    return
  }
  try {
    const places = await geocode(address) 
    const weatherDataForPlaces = await Promise.all(places.map(async (place: any) => {
      const latitude = place.value.lat
      const longitude = place.value.lng
      const weatherData = await getDailyWeatherData(latitude, longitude)
      return {
        city: place.label,
        weatherData
      }
    }));
    res.json(weatherDataForPlaces)
  } catch(error) {
    console.error(error)
    res.status(500).send(error)
  }
}

export async function getCities(req: Request, res: Response) {
  const query = req.query.search

  if (!query || typeof query !== 'string') {
    res.status(400).json({ error: 'Search query missing.' })
    return
  }
  
  try {
    const cities = await geocode(query)
    res.json(cities)
  } catch(error) {
    res.status(500).json({ error: 'Could not get cities' })
  }
}