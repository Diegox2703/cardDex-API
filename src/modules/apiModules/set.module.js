import api from '../../config/axios.js'

export const getSets = async (queryParams) => {
    try {
        const { data } = await api.get('/sets', {
            params: {
                ...queryParams
            }
        })
        return data
    } catch (error) {
        throw error
    }
}