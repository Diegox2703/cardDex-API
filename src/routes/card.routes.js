import { Router } from 'express'
import { getCardsController, getCardByIdController } from '../controllers/card.controller.js'

const router = Router()

router.get('/', getCardsController)

router.get('/:id', getCardByIdController)

export default router