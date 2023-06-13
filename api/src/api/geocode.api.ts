import opencage from 'opencage-api-client'

interface Place {
  formatted: string,
  geometry: {
    lat: number,
    lng: number
  }
}

export async function geocode(search: string) {
  try {
    const data = await opencage.geocode({q: search})
    const places: Array<any> = data.results.map((place: Place) => ({
      label: place.formatted,
      value: place.geometry
    }))
    return places
  } catch(error) {
    console.error('Error:', error)
    throw error
  }
}