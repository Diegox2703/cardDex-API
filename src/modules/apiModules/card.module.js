import api from '../../config/axios.js'

export const getCards = async (queryParams) => {
    try {
        const { data } = await api.get('/cards', {
            params: {
                ...queryParams
            }
        })
        return data
    } catch (error) {
        throw error
    }
}

export const getCardsById = async (id) => {
    try {
        const { data } = await api.get(`/cards/${id}`)
        return data
    } catch (error) {
        throw error
    }
}