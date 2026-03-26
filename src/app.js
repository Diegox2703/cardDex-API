import express from 'express'
import cardRoutes from './routes/card.routes.js'
import setRoutes from './routes/set.routes.js'
import cors from 'cors'
import { CORS_OPTIONS } from './constants/origin.js'

const app = express()

app.use(express.json())
app.use(cors(CORS_OPTIONS))

app.use('/cards', cardRoutes)
app.use('/sets', setRoutes)
 
export default app