import chalk from 'chalk'
import app from './app.js'
import { connectDB } from './config/db.js'

connectDB()

app.listen(3000, () => console.log(chalk.green.bold('Server connected! ✅')))