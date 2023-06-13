import * as dotenv from 'dotenv'
dotenv.config()
import express, { NextFunction, Request, Response } from 'express'
import { hashPassword } from './auth/password'
import { getCities, getDaily } from './controllers/weather.controller'
import { getImage } from './controllers/image.controller'

const app = express()
const PORT = process.env.PORT

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(function (request: Request, response: Response, next: NextFunction) {
    response.set("Access-Control-Allow-Origin", "http://localhost:5173");
    response.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    response.set("Access-Control-Allow-Headers", "*");
    response.set("Access-Control-Expose-Headers", "*");
    next();
});

app.get('/', async (req: Request, res: Response) => {
    res.send('hello, World!')
})

app.get('/cities', getCities)

app.get('/daily', getDaily)

app.get('/image', getImage)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})