import { buildNameQuery } from './buildNameQuery.js'

export const buildApiQueryParams = (queryParams) => {
    const { page, pageSize, name, cardNumber, set } = queryParams

    const nameQueryParam = name ? buildNameQuery(name) : ''

    const setQueryParam = set ? `set.id:*${set}*` : ''

    const numberQueryParam = cardNumber ? `number:${cardNumber}` : ''

    const filterParams = `${nameQueryParam} ${setQueryParam} ${numberQueryParam}`.trim()

    return {
        page,
        pageSize,
        q: filterParams !== '' ? filterParams : undefined
    }
}