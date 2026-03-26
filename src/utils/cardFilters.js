export const cardFilters = (name, number, set) => {
    const filter = {}

    if (name) filter.name = { $regex: name, $options: 'i' }
    if (number) filter.number = number
    if (set) filter.set = set

    return filter
}