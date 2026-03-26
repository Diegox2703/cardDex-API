import { NODE_ENV } from "../config/env.js"

const ALLOWED_ORIGINS = {
    production: ['https://carddex.netlify.app'],
    development: ['http://localhost:5173']
}

export const CORS_OPTIONS = {
    origin: (origin, callback) => {
        const env = NODE_ENV
        const origins = ALLOWED_ORIGINS[env]

        if (!origin || origins.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}