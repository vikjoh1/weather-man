import axios from "axios"

export async function fetchLocation(address: string) {
  try {
    const response = await axios.get(`http://localhost:8080/cities?search=${address}`)
    return response.data
  } catch(error) {
    console.error(`fetchLocation error: ${error}`)
  } 
}