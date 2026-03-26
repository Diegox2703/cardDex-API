import mongoose from "mongoose"
import { MONGO_DB_URI } from './env.js'
import chalk from "chalk"

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_DB_URI)
        console.log(chalk.greenBright.bold('CardDex database connected! ✅'))
    } catch (error) {
        console.log(chalk.redBright.bold('Error connecting database ❌'))
        console.log(error)
    }
}