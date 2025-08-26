import axios from 'axios'
import { API_KEY, API_URL } from './env.js'

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'X-Api-Key': API_KEY
    }
})

export default api