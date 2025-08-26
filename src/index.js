import app from './app.js'
import { PORT } from './config/env.js'
import { startRedisServer } from './config/redisDB.js'

startRedisServer()

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server on port: ${PORT}`)
})