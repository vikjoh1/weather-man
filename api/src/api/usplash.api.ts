import * as dotenv from 'dotenv'
dotenv.config()
import axios from "axios"

interface Photo {
  likes: number
}

export async function getCityImage(query: string) {
  try {
    const response = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${query}`, {
      headers: {
        "Authorization": `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`
      }
    })
    return response.data
  } catch(error) {
    console.error(error)
  }
}