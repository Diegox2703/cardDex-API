export const handleErrorResponse = (res, error) => {
    if (error.response) {
        console.error('API error:', error.response)
        const status = error.response.status

        if (status === 400) return res.status(status).json({
            message: 'Bad request'
        })

        if (status === 404) return res.status(status).json({
            message: 'No item found'
        })

        if (status === 500) return res.status(status).json({
            message: 'Internal server error'
        })

        if (status === 504) return res.status(status).json({
            message: 'Thee server took too long to respond'
        })

        return res.status(status).json({
            message: 'Unexpected error'
        })
    }

    console.error('Unexpected error:', error)
    return res.status(500).json({
        message: 'Internal server error'
    })
}