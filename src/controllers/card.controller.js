import Card from "../models/Card.js"
import { cardFilters } from "../utils/cardFilters.js"

export const getCardsController = async (req, res) => {
    const { 
        name,
        set,
        number
     } = req.query
     
    const page = Number(req.query.page)
    const pageSize = Number(req.query.pageSize)
    
    const filter = cardFilters(name, number, set)

    if (isNaN(pageSize) || isNaN(page)) return res.status(400).json({
        message: 'Limit and page must be numbers'
    })

    const skip = (page - 1) * pageSize

    try {
        const [cards, total] = await Promise.all([
            Card.find(filter)
                .select(' images.small ')
                .populate({
                    path: 'set',
                    select: 'name -_id'
                })
                .limit(pageSize)
                .skip(skip)
                .lean(),
            Card.countDocuments(filter)
        ])

        res.status(200).json({
            data: cards,
            totalPages: Math.ceil(total / pageSize), 
            page: page,
            totalCount: total
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'An unexpected error has ocurred'
        })
    }
}

export const getCardsByIdController = async (req, res) => {
    const { id } = req.params

    try {
        const card = await Card.findOne({ _id: id })
                               .populate('set')
                               .lean()

        if (!card) return res.status(404).json({
            message: 'Card not found'
        })

        res.status(200).json({
            data: card
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'An unexpected error has ocurred'
        })
    }
}