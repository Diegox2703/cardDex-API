import { getSetsFromCache, saveSetsInCache } from "../modules/redisModules/set.module.js"
import { buildApiQueryParams } from "../utils/buildApiQueryParams.js"
import { buildRedisQueryParams } from "../utils/buildRedisQueryParams.js"
import { handleErrorResponse } from "../utils/handleErrorResponse.js"
import { getSets } from '../modules/apiModules/set.module.js'

export const getSetController = async (req, res) => {
    const queryParams = req.query

    const apiQueryParams = buildApiQueryParams(queryParams)
    const redisQueryParams = buildRedisQueryParams(queryParams)

    try {
        const setsFromCacheExist = await getSetsFromCache(redisQueryParams)

        if (setsFromCacheExist) {
            const setsFromCache = JSON.parse(setsFromCacheExist)

            return res.status(200).json({
                message: 'Cached sets found',
                ...setsFromCache
        }) 
        }
  
        const sets = await getSets(apiQueryParams)

        await saveSetsInCache(redisQueryParams, JSON.stringify(sets), 6)
  
        res.status(200).json({
            message: 'Sets found',
            ...sets
        })
    } catch (error) {
        handleErrorResponse(res, error)
    }
} 