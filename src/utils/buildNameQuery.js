export const buildNameQuery = ( query ) => {
    return query.trim().split(/\s+/).map((q, index) => (
        index === 0 ? `name:*${q}*` : `AND name:*${q}*`
    )).join(' ')
}