import { getCityImage } from "../api/usplash.api"
import { Request, Response } from "express"

export async function getImage(req :Request, res: Response) {
  const query = String(req.query.query)
  try {
    const response = await getCityImage(query)
    res.json(response)
  } catch(error) {
    res.status(500).json({ error: 'Image missing' })
    return
  }
}