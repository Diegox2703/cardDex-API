import { config } from 'dotenv'
 
config()

export const PORT = process.env.PORT || 3000
export const API_URL = process.env.API_URL
export const API_KEY = process.env.API_KEY
export const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173'
export const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379'