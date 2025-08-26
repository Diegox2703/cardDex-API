export const buildRedisQueryParams = (queryParams) => {
    const queryParamsArray = Object.keys(queryParams)

    const redisQueryParams = queryParamsArray
                                .filter(param => param !== 'pageSize')
                                .map(param => `:${queryParams[param]}` ).join('')
                                
    return redisQueryParams
}