import { getCards, getCardsById } from '../modules/apiModules/card.module.js'
import { getCardByIdFromCache, getCardsFromCache, saveCardByIdInCache, saveCardsInCache } from '../modules/redisModules/card.module.js'
import { buildApiQueryParams } from '../utils/buildApiQueryParams.js'
import { buildRedisQueryParams } from '../utils/buildRedisQueryParams.js'
import { handleErrorResponse } from '../utils/handleErrorResponse.js'

export const getCardsController = async (req, res) => {
    const queryParams = req.query

    const apiQueryParams = buildApiQueryParams(queryParams)
    const redisQueryParams = buildRedisQueryParams(queryParams)

    try {
        const cardsFromCacheExist = await getCardsFromCache(redisQueryParams)

        if (cardsFromCacheExist) {
            const cardsFromCache = JSON.parse(cardsFromCacheExist)

            return res.status(200).json({
                message: 'Cached cards found',
                ...cardsFromCache
        }) 
        }
  
        const cards = await getCards(apiQueryParams)

        await saveCardsInCache(redisQueryParams, JSON.stringify(cards), 6)
  
        res.status(200).json({
            message: 'Cards found',
            ...cards
        })
    } catch (error) {
        handleErrorResponse(res, error)
    }
} 

export const getCardByIdController = async (req, res) => {
    const { id } = req.params

    try {
        const cardFromCacheExist = await getCardByIdFromCache(id)

        if (cardFromCacheExist) {
            const cardFromCache = JSON.parse(cardFromCacheExist)

            return res.status(200).json({
                message: 'Cached card found',
                ...cardFromCache
            })
        }

        const card = await getCardsById(id)

        await saveCardByIdInCache(id, JSON.stringify(card), 6)

        res.status(200).json({
            message: 'Card found',
            ...card
        })
    } catch (error) {
        handleErrorResponse(res, error)
    }
}