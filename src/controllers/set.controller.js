import Set from "../models/Set.js"

export const getSetController = async (req, res) => {
    const { name, sortDate } = req.query

    const page = Number(req.query.page)
    const pageSize = Number(req.query.pageSize)

    const filter = {}
    const sort = {}

    if (name) filter.name = { $regex: name, $options: 'i' }

    if (sortDate === 'desc') {
        sort.releaseDate = 1
    } else {
        sort.releaseDate = -1
    }

    if (isNaN(pageSize) || isNaN(page)) return res.status(400).json({
        message: 'Limit and page must be numbers'
    })

    const skip = (page - 1) * pageSize

    try {
        const [sets, total] = await Promise.all([
            Set.find(filter)
                .limit(pageSize)
                .skip(skip)
                .sort(sort)
                .lean(),
            Set.countDocuments(filter)
        ])
                         
        res.json({
            data: sets,
            page,
            totalPages: Math.ceil(total / pageSize)
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'An unexpected error has ocurred'
        })
    }
}