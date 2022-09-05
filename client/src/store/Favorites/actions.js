export const addFavorite = product => {
    return {
        type: 'ADD_FAVORITE',
        payload: { product }
    }
}
