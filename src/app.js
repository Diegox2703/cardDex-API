import express from 'express'
import cardRoutes from './routes/card.routes.js'
import setRoutes from './routes/set.routes.js'
import cors from 'cors'
import { CLIENT_URL } from './config/env.js'

const app = express()
   
app.use(express.json())
app.use(cors({
    origin: CLIENT_URL
}))

app.use('/cards', cardRoutes)
app.use('/sets', setRoutes)

export default app