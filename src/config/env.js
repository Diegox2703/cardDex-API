import { config } from 'dotenv'
 
config()

export const MONGO_DB_URI = process.env.MONGO_DB_URI
export const NODE_ENV = process.env.NODE_ENV || 'development'
export const PORT = process.env.PORT || 3000