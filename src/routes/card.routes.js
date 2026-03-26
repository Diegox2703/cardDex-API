import { Router } from 'express'
import { getCardsByIdController, getCardsController } from '../controllers/card.controller.js'

const router = Router()

router.get('/', getCardsController)
router.get('/:id', getCardsByIdController)

export default router