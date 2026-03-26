import express from 'express'
import cardRoutes from './routes/card.routes.js'
import setRoutes from './routes/set.routes.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use('/cards', cardRoutes)
app.use('/sets', setRoutes)
 
export default app