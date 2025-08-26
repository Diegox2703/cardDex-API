import { Router } from 'express'
import { getSetController } from '../controllers/set.controller.js'

const router = Router()

router.get('/', getSetController)

export default router