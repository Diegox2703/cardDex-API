import { createClient } from 'redis'
import { REDIS_URL } from './env.js'

export const redisClient = createClient({
    url: REDIS_URL
}) 

export const startRedisServer = async () => {
    try {
        await redisClient.connect()
        console.log('Connected to redis')
    } catch (error) {
        console.log('Error connecting to redis')
        console.log(error) 
    }
} 