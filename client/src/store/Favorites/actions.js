export const addFavorite = product => {
    return {
        type: 'ADD_FAVORITE',
        payload: { product }
    }
}

export const getFavoriteLS = data => {
    return {
        type: 'GET_FAVORITES_LOCALSTORAGE',
        payload: { data }
    }
}
