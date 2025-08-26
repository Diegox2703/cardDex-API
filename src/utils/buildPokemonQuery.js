export const buildPokemonQuery = (field, query ) => {
    return query.trim().split(/\s+/).map((q, index) => (
        index === 0 ? `${field}:*${q}*` : `AND ${field}:*${q}*`
    )).join(' ')
}