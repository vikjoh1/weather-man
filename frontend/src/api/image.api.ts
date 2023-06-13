import axios from "axios"

export async function fetchImage(query: string) {
  try {
    const response = await axios.get(`http://localhost:8080/image?query=${query}`)
    return response.data
  } catch(error) {
    console.log(error)
  }
}