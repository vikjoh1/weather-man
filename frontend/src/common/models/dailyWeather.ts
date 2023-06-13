export enum WeatherCode {
  Clear = 0,
  MainlyClear = 1,
  PartlyCloudy = 2,
  Overcast = 3,
  Fog = 45,
  DepositingRimeFog = 48,
  LightDrizzle = 51,
  ModerateDrizzle = 53,
  DenseDrizzle = 55,
  LightFreezingDrizzle = 56,
  DenseFreezingDrizzle = 57,
  SlightRain = 61,
  ModerateRain = 63,
  HeavyRain = 65,
  LightFreezingRain = 66,
  HeavyFreezingRain = 67,
  SlightSnowfall = 71,
  ModerateSnowfall = 73,
  HeavySnowfall = 75,
  SnowGrains = 77,
  SlightRainShowers = 80,
  ModerateRainShowers = 81,
  ViolentRainShowers = 82,
  SlightSnowShowers = 85,
  HeavySnowShowers = 86,
  ThunderStorm = 95,
  SlightHailThunderStorm = 96,
  HeavyHailThunderStorm = 99
}



export interface Daily {
  time: Array<string>
  weathercode: Array<number>
  temperature_2m_max: Array<number>
  temperature_2m_min: Array<number>
  sunrise: Array<string>
  sunset: Array<string>,
  precipitation_sum: Array<number>
  precipitation_hours: Array<number>
  rain_sum: Array<number>
  showers_sum: Array<number>
  snowfall_sum: Array<number>
  windspeed_10m_max: Array<number>
  windspeed_10m_min: Array<number>
}

export function getTemperatureIcon(temp: number): Array<string> {
  if (temp > 12 && temp < 20) {
    return ['fas', 'temperature-half']
  } else if (temp < 12) {
    return ['fas', 'temperature-empty']
  } else return ['fas', 'temperature-full']
}

export function getIconForMaxTemp() {
  return ['fas', 'temperature-full']
}

export function getWeatherIcon(weatherCode: WeatherCode) {
  switch(weatherCode) {
    case WeatherCode.Clear:
      return ['wi', 'wi-day-sunny', 'color-yellow']
    case WeatherCode.MainlyClear:
      return ['wi', 'wi-day-cloudy-high', 'color-white']
    case WeatherCode.PartlyCloudy:
      return ['wi', 'wi-cloudy', 'color-white']
    case WeatherCode.Overcast:
      return ['wi', 'wi-day-sunny-overcast', 'color-yellow']
    case WeatherCode.Fog:
      return ['wi', 'wi-fog', 'color-grey']
    case WeatherCode.DepositingRimeFog:
      return ['wi', 'wi-fog', 'color-grey']
    case WeatherCode.LightDrizzle:
      return ['wi', 'wi-rain', 'color-blue']
    case WeatherCode.ModerateDrizzle:
      return ['wi', 'wi-rain', 'color-blue']
    case WeatherCode.DenseDrizzle:
      return ['wi', 'wi-rain', 'color-blue']
    case WeatherCode.LightFreezingDrizzle:
      return ['wi', 'wi-rain', 'color-blue']
    case WeatherCode.DenseFreezingDrizzle:
      return ['wi', 'wi-rain', 'color-blue']
    case WeatherCode.SlightRain:
      return ['wi', 'wi-rain', 'color-blue']
    case WeatherCode.ModerateRain:
      return ['wi', 'wi-rain', 'color-blue']
    case WeatherCode.HeavyRain:
      return ['wi', 'wi-rain', 'color-blue']
    case WeatherCode.LightFreezingRain:
      return ['wi', 'wi-day-rain-mix', 'color-blue']
    case WeatherCode.HeavyFreezingRain:
      return ['wi', 'wi-day-rain-mix', 'color-blue']
    case WeatherCode.SlightSnowfall:
      return ['wi', 'wi-snow', 'color-white']
    case WeatherCode.ModerateSnowfall:
      return ['wi', 'wi-snow', 'color-white']
    case WeatherCode.HeavySnowfall:
      return ['wi', 'wi-snow', 'color-white']
    case WeatherCode.SnowGrains:
      return ['wi', 'wi-sleet', 'color-white']
    case WeatherCode.SlightRainShowers:
      return ['wi', 'wi-showers', 'color-blue']
    case WeatherCode.ModerateRainShowers:
      return ['wi', 'wi-showers', 'color-blue']
    case WeatherCode.ViolentRainShowers:
      return ['wi', 'wi-showers', 'color-blue']
    case WeatherCode.SlightSnowShowers:
      return ['wi', 'wi-snow', 'color-white']
    case WeatherCode.HeavySnowShowers:
      return ['wi', 'wi-snow', 'color-white']
    case WeatherCode.ThunderStorm:
      return ['wi', 'wi-thunderstorm', 'color-grey']
    case WeatherCode.SlightHailThunderStorm:
      return ['wi', 'wi-storm-showers', 'color-grey']
    case WeatherCode.HeavyHailThunderStorm:
      return ['wi', 'wi-storm-showers', 'color-grey']
  }
}